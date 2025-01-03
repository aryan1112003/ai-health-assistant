// Existing interfaces...

export interface SymptomAnalysis {
  conditions: Array<{
    name: string;
    probability: number;
    description: string;
  }>;
  urgencyLevel: 'low' | 'medium' | 'high';
  recommendations: string[];
}