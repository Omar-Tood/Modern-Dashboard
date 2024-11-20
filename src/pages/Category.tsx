import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';

const initialCategories = [
  { id: 1, name: 'Electronics', products: 145, status: 'Active' },
  { id: 2, name: 'Clothing', products: 89, status: 'Active' },
  { id: 3, name: 'Shoes', products: 56, status: 'Active' },
];

export default function Category() {
  const [categories] = useState(initialCategories);

  const columns = [
    { key: 'name', label: 'Category Name' },
    { key: 'products', label: 'Total Products' },
    { key: 'status', label: 'Status' },
  ];

  return (
    <div>
      <PageHeader title="Categories" />
      <div className="mb-6 flex justify-between items-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600">
          <Plus size={20} />
          Add Category
        </button>
      </div>
      <DataTable
        columns={columns}
        data={categories}
        onEdit={(category) => console.log('Edit category:', category)}
        onDelete={(category) => console.log('Delete category:', category)}
      />
    </div>
  );
}