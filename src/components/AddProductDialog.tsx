import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus } from 'lucide-react';

interface AddProductDialogProps {
  onAddProduct: (product: any) => void;
}

export default function AddProductDialog({ onAddProduct }: AddProductDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    category: '',
    price: '',
    stock: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddProduct({
      ...formData,
      id: Math.random().toString(36).substr(2, 9),
    });
    setFormData({ name: '', category: '', price: '', stock: '' });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 hover:bg-blue-600">
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#1C1C1E] text-white">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Product Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-[#2C2C2E] border-gray-700 text-white"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category" className="text-white">Category</Label>
            <Input
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="bg-[#2C2C2E] border-gray-700 text-white"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price" className="text-white">Price</Label>
            <Input
              id="price"
              type="text"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="bg-[#2C2C2E] border-gray-700 text-white"
              placeholder="$0.00"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="stock" className="text-white">Stock</Label>
            <Input
              id="stock"
              type="number"
              value={formData.stock}
              onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
              className="bg-[#2C2C2E] border-gray-700 text-white"
              required
            />
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
              Add Product
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}