import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';

const initialInvoices = [
  { id: '#INV001', customer: 'John Doe', date: '2024-03-15', amount: '$299.99', status: 'Paid' },
  { id: '#INV002', customer: 'Jane Smith', date: '2024-03-14', amount: '$149.99', status: 'Pending' },
  { id: '#INV003', customer: 'Mike Johnson', date: '2024-03-13', amount: '$89.99', status: 'Overdue' },
];

export default function Invoice() {
  const [invoices] = useState(initialInvoices);

  const columns = [
    { key: 'id', label: 'Invoice Number' },
    { key: 'customer', label: 'Customer' },
    { key: 'date', label: 'Date' },
    { key: 'amount', label: 'Amount' },
    { key: 'status', label: 'Status' },
  ];

  return (
    <div>
      <PageHeader title="Invoices" />
      <div className="mb-6 flex justify-between items-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600">
          <Plus size={20} />
          Create Invoice
        </button>
      </div>
      <DataTable
        columns={columns}
        data={invoices}
        onEdit={(invoice) => console.log('View invoice:', invoice)}
      />
    </div>
  );
}