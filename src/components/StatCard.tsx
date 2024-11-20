import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  change: {
    value: number;
    timeframe: string;
  };
  iconBg: string;
}

export default function StatCard({ icon: Icon, title, value, change, iconBg }: StatCardProps) {
  const isPositive = change.value > 0;
  
  return (
    <div className="bg-[#1C1C1E] p-4 rounded-xl">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-2 rounded-lg ${iconBg}`}>
          <Icon size={20} className="text-white" />
        </div>
      </div>
      
      <div className="space-y-2">
        <p className="text-gray-400">{title}</p>
        <h3 className="text-2xl font-bold text-white">{value}</h3>
        <div className="flex items-center gap-2">
          <span className={`${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? '↑' : '↓'} {Math.abs(change.value)}%
          </span>
          <span className="text-gray-400">{change.timeframe}</span>
        </div>
      </div>
      
      <button className="mt-4 text-blue-500 hover:text-blue-400">
        View More →
      </button>
    </div>
  );
}