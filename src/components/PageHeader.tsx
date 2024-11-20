import React from 'react';
import { Users } from 'lucide-react';

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
      
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-[#1C1C1E] rounded-full flex items-center justify-center">
          <Users size={20} className="text-gray-400" />
        </div>
        <div className="flex items-center gap-3">
          <img
            src="/assets/images/profile-pic.png"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-white font-medium">Omar Tood</p>
            <p className="text-gray-400 text-sm">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}