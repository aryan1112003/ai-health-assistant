import React, { useState } from 'react';
import { Bell, Plus, X } from 'lucide-react';
import type { MedicationReminder } from '../types/health';

export default function MedicationReminder() {
  const [reminders, setReminders] = useState<MedicationReminder[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newReminder, setNewReminder] = useState<Partial<MedicationReminder>>({
    name: '',
    time: '',
    frequency: 'daily',
    dosage: '',
  });

  const addReminder = () => {
    if (newReminder.name && newReminder.time) {
      setReminders([...reminders, { ...newReminder, id: Date.now().toString() } as MedicationReminder]);
      setNewReminder({ name: '', time: '', frequency: 'daily', dosage: '' });
      setShowForm(false);
    }
  };

  const removeReminder = (id: string) => {
    setReminders(reminders.filter(r => r.id !== id));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Bell className="w-6 h-6 text-yellow-600" />
          <h2 className="text-2xl font-bold text-gray-800">Medication Reminders</h2>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-yellow-600 text-white p-2 rounded-full hover:bg-yellow-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {showForm && (
        <div className="mb-6 p-4 bg-yellow-50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Medication name"
              value={newReminder.name}
              onChange={(e) => setNewReminder({ ...newReminder, name: e.target.value })}
              className="p-2 border rounded focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="time"
              value={newReminder.time}
              onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
              className="p-2 border rounded focus:ring-2 focus:ring-yellow-500"
            />
            <select
              value={newReminder.frequency}
              onChange={(e) => setNewReminder({ ...newReminder, frequency: e.target.value as MedicationReminder['frequency'] })}
              className="p-2 border rounded focus:ring-2 focus:ring-yellow-500"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
            <input
              type="text"
              placeholder="Dosage"
              value={newReminder.dosage}
              onChange={(e) => setNewReminder({ ...newReminder, dosage: e.target.value })}
              className="p-2 border rounded focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <button
            onClick={addReminder}
            className="mt-4 w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition-colors"
          >
            Add Reminder
          </button>
        </div>
      )}

      <div className="space-y-3">
        {reminders.map((reminder) => (
          <div key={reminder.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-semibold text-gray-800">{reminder.name}</h3>
              <p className="text-sm text-gray-600">
                {reminder.time} • {reminder.frequency} • {reminder.dosage}
              </p>
            </div>
            <button
              onClick={() => removeReminder(reminder.id)}
              className="text-red-500 hover:text-red-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ))}
        {reminders.length === 0 && (
          <p className="text-center text-gray-500">No reminders set</p>
        )}
      </div>
    </div>
  );
}