import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';

const initialPurchases = [
  { id: '#PO001', supplier: 'ABC Supplies', date: '2024-03-15', total: '$1,299.99', status: 'Received' },
  { id: '#PO002', supplier: 'XYZ Wholesale', date: '2024-03-14', total: '$2,149.99', status: 'Pending' },
  { id: '#PO003', supplier: 'Global Traders', date: '2024-03-13', total: '$889.99', status: 'Ordered' },
];

export default function Purchase() {
  const [purchases] = useState(initialPurchases);

  const columns = [
    { key: 'id', label: 'PO Number' },
    { key: 'supplier', label: 'Supplier' },
    { key: 'date', label: 'Order Date' },
    { key: 'total', label: 'Total' },
    { key: 'status', label: 'Status' },
  ];

  return (
    <div>
      <PageHeader title="Purchase Orders" />
      <div className="mb-6 flex justify-between items-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600">
          <Plus size={20} />
          New Purchase Order
        </button>
      </div>
      <DataTable
        columns={columns}
        data={purchases}
        onEdit={(purchase) => console.log('Edit purchase:', purchase)}
        onDelete={(purchase) => console.log('Delete purchase:', purchase)}
      />
    </div>
  );
}