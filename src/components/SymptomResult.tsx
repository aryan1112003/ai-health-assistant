import React from 'react';
import { AlertCircle, Activity, CheckCircle2 } from 'lucide-react';
import type { SymptomAnalysis } from '../utils/gemini';

const urgencyColors = {
  low: 'bg-green-50 text-green-800',
  medium: 'bg-yellow-50 text-yellow-800',
  high: 'bg-red-50 text-red-800'
};

export default function SymptomResult({ conditions, urgencyLevel, recommendations }: SymptomAnalysis) {
  return (
    <div className="space-y-6">
      <div className={`p-4 rounded-lg ${urgencyColors[urgencyLevel]}`}>
        <div className="flex items-center gap-2 mb-2">
          <AlertCircle className="w-5 h-5" />
          <h3 className="font-semibold capitalize">
            {urgencyLevel} Urgency Level
          </h3>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">Possible Conditions:</h3>
        {conditions.map((condition, index) => (
          <div 
            key={index}
            className="p-4 bg-gray-50 rounded-lg space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-gray-600" />
                <span className="font-medium text-gray-800">{condition.name}</span>
              </div>
              <span className="text-sm text-gray-600">
                {Math.round(condition.probability * 100)}% likelihood
              </span>
            </div>
            <p className="text-sm text-gray-600">{condition.description}</p>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">Recommendations:</h3>
        <div className="bg-blue-50 p-4 rounded-lg space-y-2">
          {recommendations.map((recommendation, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1" />
              <p className="text-blue-800">{recommendation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}