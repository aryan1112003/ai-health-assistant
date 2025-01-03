import React, { useState } from 'react';
import { Brain, RefreshCw } from 'lucide-react';

const mindfulnessExercises = [
  {
    title: "4-7-8 Breathing",
    description: "Inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds. Repeat 4 times.",
  },
  {
    title: "Body Scan",
    description: "Close your eyes and mentally scan your body from head to toe, noting any tension.",
  },
  {
    title: "5-4-3-2-1 Grounding",
    description: "Name 5 things you see, 4 you feel, 3 you hear, 2 you smell, and 1 you taste.",
  },
];

const motivationalQuotes = [
  "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
  "You don't have to be positive all the time. You just need to be positive that you'll get through it.",
  "Recovery is not one and done. It is a lifelong journey that takes place one day, one step at a time.",
];

export default function MentalHealth() {
  const [currentQuote, setCurrentQuote] = useState(0);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % motivationalQuotes.length);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Brain className="w-6 h-6 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-800">Mental Wellness</h2>
      </div>

      <div className="space-y-6">
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-purple-800">Daily Inspiration</h3>
            <button 
              onClick={nextQuote}
              className="text-purple-600 hover:text-purple-800"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
          <p className="text-purple-900 italic">{motivationalQuotes[currentQuote]}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Mindfulness Exercises</h3>
          <div className="space-y-3">
            {mindfulnessExercises.map((exercise, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-1">{exercise.title}</h4>
                <p className="text-gray-600 text-sm">{exercise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}