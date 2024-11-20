import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';
import AddProductDialog from '../components/AddProductDialog';

const initialProducts = [
  { id: 1, name: 'Nike Air Max', category: 'Shoes', price: '$129.99', stock: 45 },
  { id: 2, name: 'Levi\'s 501', category: 'Clothing', price: '$89.99', stock: 32 },
  { id: 3, name: 'Apple Watch', category: 'Electronics', price: '$399.99', stock: 15 },
];

export default function Products() {
  const [products, setProducts] = useState(initialProducts);

  const handleAddProduct = (newProduct: any) => {
    setProducts([...products, newProduct]);
  };

  const columns = [
    { key: 'name', label: 'Product Name' },
    { key: 'category', label: 'Category' },
    { key: 'price', label: 'Price' },
    { key: 'stock', label: 'Stock' },
  ];

  return (
    <div>
      <PageHeader title="Products" />
      <div className="mb-6 flex justify-between items-center">
        <AddProductDialog onAddProduct={handleAddProduct} />
      </div>
      <DataTable
        columns={columns}
        data={products}
        onEdit={(product) => console.log('Edit product:', product)}
        onDelete={(product) => console.log('Delete product:', product)}
      />
    </div>
  );
}