import React from 'react';

export function BarChart() {
  const months = ['July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const data = [
    { revenue: 20000, profit: 10000 },
    { revenue: 15000, profit: 5000 },
    { revenue: 8000, profit: 9000 },
    { revenue: 18000, profit: 5000 },
    { revenue: 6000, profit: 3000 },
    { revenue: 19000, profit: 14000 },
  ];

  const maxValue = Math.max(...data.map(d => Math.max(d.revenue, d.profit)));

  return (
    <div className="bg-[#1C1C1E] p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Earning Revenue</h2>
        <div className="flex gap-4">
          <button className="px-3 py-1 rounded bg-blue-500 text-white">All</button>
          <button className="px-3 py-1 rounded text-gray-400">1M</button>
          <button className="px-3 py-1 rounded text-gray-400">6M</button>
          <button className="px-3 py-1 rounded text-gray-400">1Y</button>
        </div>
      </div>

      <div className="relative h-64">
        <div className="flex justify-between h-full">
          {data.map((d, i) => (
            <div key={i} className="flex flex-col justify-end items-center gap-2 w-16">
              <div className="w-8 bg-blue-500 rounded-t" style={{ height: `${(d.revenue / maxValue) * 100}%` }} />
              <div className="w-8 bg-blue-200 rounded-t" style={{ height: `${(d.profit / maxValue) * 100}%` }} />
              <span className="text-gray-400 text-sm">{months[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DonutChart() {
  return (
    <div className="bg-[#1C1C1E] p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Sales By Categories</h2>
        <select className="bg-blue-500 text-white px-3 py-1 rounded">
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>

      <div className="relative w-48 h-48 mx-auto">
        <svg viewBox="0 0 36 36" className="w-full h-full">
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="3.8"
            strokeDasharray="40, 100"
          />
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#93C5FD"
            strokeWidth="3.8"
            strokeDasharray="35, 100"
            strokeDashoffset="-40"
          />
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#BFDBFE"
            strokeWidth="3.8"
            strokeDasharray="25, 100"
            strokeDashoffset="-75"
          />
        </svg>
      </div>

      <div className="flex justify-center gap-6 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-gray-400">Men Fashion</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
          <span className="text-gray-400">Sports Shoes</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
          <span className="text-gray-400">Accessory</span>
        </div>
      </div>
    </div>
  );
}