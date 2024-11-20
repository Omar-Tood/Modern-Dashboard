import React from 'react';
import { ShoppingCart, Users, Briefcase, Wallet } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import StatCard from '../components/StatCard';
import { BarChart, DonutChart } from '../components/Chart';

export default function Dashboard() {
  const stats = [
    {
      icon: ShoppingCart,
      title: 'Total Orders',
      value: '14,678',
      change: { value: 2.3, timeframe: 'Last Week' },
      iconBg: 'bg-blue-600'
    },
    {
      icon: Users,
      title: 'New Leads',
      value: '95,103',
      change: { value: 5.2, timeframe: 'Last Month' },
      iconBg: 'bg-blue-600'
    },
    {
      icon: Briefcase,
      title: 'Total Deals',
      value: '1204',
      change: { value: -0.4, timeframe: 'Last Week' },
      iconBg: 'bg-blue-600'
    },
    {
      icon: Wallet,
      title: 'Booked Revenue',
      value: '$23,578K',
      change: { value: -10.6, timeframe: 'Last Month' },
      iconBg: 'bg-blue-600'
    }
  ];

  return (
    <div>
      <PageHeader title="Dashboard" />
      <div className="grid grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6">
        <BarChart />
        <DonutChart />
      </div>
    </div>
  );
}