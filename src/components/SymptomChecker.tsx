import React, { useState } from 'react';
import { Heart, Loader2, AlertCircle } from 'lucide-react';
import { analyzeSymptoms } from '../utils/gemini';
import type { SymptomAnalysis } from '../utils/gemini';
import SymptomResult from './SymptomResult';

export default function SymptomChecker() {
  const [symptoms, setSymptoms] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SymptomAnalysis | null>(null);
  const [error, setError] = useState<string>('');

  const handleAnalysis = async () => {
    if (!symptoms.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);
    
    try {
      const data = await analyzeSymptoms(symptoms);
      setResult(data);
    } catch (err) {
      console.error('Error analyzing symptoms:', err);
      setError('Failed to analyze symptoms. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Heart className="w-6 h-6 text-red-500" />
        <h2 className="text-2xl font-bold text-gray-800">AI Symptom Analysis</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-2">
            Describe your symptoms in detail
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px]"
            placeholder="Example: I've been experiencing a persistent headache for 2 days, along with mild fever and fatigue..."
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            disabled={loading}
          />
        </div>
        
        <button
          onClick={handleAnalysis}
          disabled={loading || !symptoms.trim()}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {loading ? 'Analyzing Symptoms...' : 'Get AI Analysis'}
        </button>

        {error && (
          <div className="p-4 bg-red-50 rounded-lg text-red-700 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            <p>{error}</p>
          </div>
        )}

        {result && <SymptomResult {...result} />}
      </div>

      <div className="mt-6 text-sm text-gray-500">
        <p className="font-medium">Important Disclaimer:</p>
        <p>This AI analysis is for informational purposes only and should not be considered as professional medical advice. Always consult with a qualified healthcare provider for proper diagnosis and treatment.</p>
      </div>
    </div>
  );
}