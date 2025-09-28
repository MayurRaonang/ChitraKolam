import React from 'react';
import { Book, Star, Flame, Crown } from "lucide-react"; // import lucide-react icons

export default function StatsByNumbers() {
  const stats = [
    { icon: Book, value: '5,247', label: 'Kolam Patterns', sub: 'Curated Collection' },
    { icon: Star, value: '12,450', label: 'Active Users', sub: 'Growing Community' },
    { icon: Flame, value: '28', label: 'Indian States', sub: 'Regional Coverage' },
    { icon: Crown, value: '156', label: 'Master Artists', sub: 'Expert Contributors' },
  ];

  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-red-700">
          ChitraKolam by Numbers
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Join thousands of artists and enthusiasts in preserving this beautiful tradition
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-red-700 flex items-center justify-center shadow-md mb-4">
                <s.icon className="w-8 h-8 text-white" />
              </div>

              <div className="text-3xl md:text-4xl font-extrabold text-red-700">
                {s.value}
              </div>
              <div className="mt-2 font-semibold text-gray-800">{s.label}</div>
              <div className="text-sm text-gray-500">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
