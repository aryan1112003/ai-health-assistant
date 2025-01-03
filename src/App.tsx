import React from 'react';
import Layout from './components/Layout';
import SymptomChecker from './components/SymptomChecker';
import HealthMetrics from './components/HealthMetrics';
import MentalHealth from './components/MentalHealth';
import MedicationReminder from './components/MedicationReminder';

function App() {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <SymptomChecker />
          <MentalHealth />
        </div>
        <div className="space-y-6">
          <HealthMetrics />
          <MedicationReminder />
        </div>
      </div>
    </Layout>
  );
}

export default App;