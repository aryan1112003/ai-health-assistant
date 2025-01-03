import type { SymptomAnalysis } from '../types/health';

export const validateSymptomAnalysis = (data: unknown): data is SymptomAnalysis => {
  if (!data || typeof data !== 'object') return false;
  
  const analysis = data as any;
  
  // Validate conditions array
  if (!Array.isArray(analysis.conditions) || analysis.conditions.length === 0) {
    return false;
  }
  
  const validConditions = analysis.conditions.every((c: any) => 
    typeof c.name === 'string' && c.name.length > 0 &&
    typeof c.probability === 'number' && c.probability >= 0 && c.probability <= 1 &&
    typeof c.description === 'string' && c.description.length > 0
  );
  
  if (!validConditions) return false;
  
  // Validate urgency level
  if (!['low', 'medium', 'high'].includes(analysis.urgencyLevel)) {
    return false;
  }
  
  // Validate recommendations
  if (!Array.isArray(analysis.recommendations) || analysis.recommendations.length === 0) {
    return false;
  }
  
  return analysis.recommendations.every((r: any) => typeof r === 'string' && r.length > 0);
};