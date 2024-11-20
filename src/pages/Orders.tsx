import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';

const initialOrders = [
  { id: '#ORD001', customer: 'John Doe', date: '2024-03-15', total: '$299.99', status: 'Delivered' },
  { id: '#ORD002', customer: 'Jane Smith', date: '2024-03-14', total: '$149.99', status: 'Processing' },
  { id: '#ORD003', customer: 'Mike Johnson', date: '2024-03-13', total: '$89.99', status: 'Pending' },
];

export default function Orders() {
  const [orders] = useState(initialOrders);

  const columns = [
    { key: 'id', label: 'Order ID' },
    { key: 'customer', label: 'Customer' },
    { key: 'date', label: 'Order Date' },
    { key: 'total', label: 'Total' },
    { key: 'status', label: 'Status' },
  ];

  return (
    <div>
      <PageHeader title="Orders" />
      <DataTable
        columns={columns}
        data={orders}
        onEdit={(order) => console.log('View order:', order)}
      />
    </div>
  );
}