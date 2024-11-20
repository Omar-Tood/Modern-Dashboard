import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, FolderTree, ShoppingCart, ClipboardList, Receipt, Settings } from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, text: 'Dashboard', path: '/' },
  { icon: Package, text: 'Products', path: '/products' },
  { icon: FolderTree, text: 'Category', path: '/category' },
  { icon: ShoppingCart, text: 'Orders', path: '/orders' },
  { icon: ClipboardList, text: 'Purchase', path: '/purchase' },
  { icon: Receipt, text: 'Invoice', path: '/invoice' },
  { icon: Settings, text: 'Settings', path: '/settings' }
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-[#1C1C1E] p-4 overflow-y-auto">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
          <span className="text-black font-bold">E</span>
        </div>
        <span className="text-white text-xl font-semibold">Ecom</span>
      </div>
      
      <nav>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center gap-3 p-3 rounded-lg mb-2 cursor-pointer ${
              location.pathname === item.path ? 'bg-[#2C2C2E] text-white' : 'text-gray-400 hover:bg-[#2C2C2E] hover:text-white'
            }`}
          >
            <item.icon size={20} />
            <span>{item.text}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}