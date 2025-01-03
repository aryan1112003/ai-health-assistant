import React, { useState } from 'react';
import { Activity, Droplets, Moon, Utensils } from 'lucide-react';
import type { HealthMetrics } from '../types/health';

export default function HealthMetricsTracker() {
  const [metrics, setMetrics] = useState<HealthMetrics>({
    steps: 0,
    waterIntake: 0,
    sleepHours: 0,
    calories: 0,
    date: new Date().toISOString().split('T')[0],
  });

  const updateMetric = (key: keyof HealthMetrics, value: string) => {
    const numValue = value === '' ? 0 : parseInt(value, 10);
    if (!isNaN(numValue)) {
      setMetrics(prev => ({ ...prev, [key]: numValue }));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Daily Health Metrics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-5 h-5 text-blue-600" />
            <span className="font-semibold">Steps</span>
          </div>
          <input
            type="number"
            value={metrics.steps || ''}
            onChange={(e) => updateMetric('steps', e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder="Enter steps"
            min="0"
          />
        </div>

        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Droplets className="w-5 h-5 text-blue-600" />
            <span className="font-semibold">Water (glasses)</span>
          </div>
          <input
            type="number"
            value={metrics.waterIntake || ''}
            onChange={(e) => updateMetric('waterIntake', e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder="Enter water intake"
            min="0"
          />
        </div>

        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Moon className="w-5 h-5 text-blue-600" />
            <span className="font-semibold">Sleep (hours)</span>
          </div>
          <input
            type="number"
            value={metrics.sleepHours || ''}
            onChange={(e) => updateMetric('sleepHours', e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder="Enter sleep hours"
            min="0"
            max="24"
          />
        </div>

        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Utensils className="w-5 h-5 text-blue-600" />
            <span className="font-semibold">Calories</span>
          </div>
          <input
            type="number"
            value={metrics.calories || ''}
            onChange={(e) => updateMetric('calories', e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder="Enter calories"
            min="0"
          />
        </div>
      </div>
    </div>
  );
}