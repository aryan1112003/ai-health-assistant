import { GoogleGenerativeAI } from '@google/generative-ai';
import { SYMPTOM_ANALYSIS_PROMPT } from './prompts';
import { validateSymptomAnalysis } from './validation';
import type { SymptomAnalysis } from '../types/health';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function analyzeSymptoms(symptoms: string): Promise<SymptomAnalysis> {
  if (!import.meta.env.VITE_GEMINI_API_KEY) {
    throw new Error('Gemini API key is not configured');
  }

  if (!symptoms.trim()) {
    throw new Error('Please provide symptoms to analyze');
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const prompt = `${SYMPTOM_ANALYSIS_PROMPT}\n\nSymptoms to analyze: ${symptoms}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    let data: unknown;
    try {
      data = JSON.parse(text);
    } catch (e) {
      throw new Error('Invalid response format from AI');
    }

    if (!validateSymptomAnalysis(data)) {
      throw new Error('AI response validation failed');
    }

    return data;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to analyze symptoms';
    throw new Error(message);
  }
}