// API configuration and helper functions
const API_URL = 'https://api.infermedica.com/v3';
const API_KEY = import.meta.env.VITE_INFERMEDICA_API_KEY;
const APP_ID = import.meta.env.VITE_INFERMEDICA_APP_ID;

interface ApiResponse {
  conditions: Array<{
    id: string;
    name: string;
    common_name: string;
    probability: number;
  }>;
  triage: {
    level: string;
    description: string;
  };
}

export async function analyzeSymptoms(symptoms: string): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_URL}/parse`, {
      method: 'POST',
      headers: {
        'App-Id': APP_ID,
        'App-Key': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: symptoms,
        include_tokens: true,
        concept_types: ['symptom'],
      }),
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Error analyzing symptoms:', error);
    throw error;
  }
}