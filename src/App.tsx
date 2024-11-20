import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Category from './pages/Category';
import Orders from './pages/Orders';
import Purchase from './pages/Purchase';
import Invoice from './pages/Invoice';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#141414]">
        <Sidebar />
        <main className="flex-1 p-8 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/category" element={<Category />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;