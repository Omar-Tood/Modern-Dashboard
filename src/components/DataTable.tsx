import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

interface DataTableProps {
  columns: { key: string; label: string }[];
  data: any[];
  onEdit?: (item: any) => void;
  onDelete?: (item: any) => void;
}

export default function DataTable({ columns, data, onEdit, onDelete }: DataTableProps) {
  return (
    <div className="bg-[#1C1C1E] rounded-xl overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-[#2C2C2E]">
            {columns.map((column) => (
              <th key={column.key} className="px-6 py-4 text-left text-sm font-semibold text-white">
                {column.label}
              </th>
            ))}
            {(onEdit || onDelete) && <th className="px-6 py-4 text-right">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t border-[#2C2C2E]">
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 text-sm text-gray-300">
                  {item[column.key]}
                </td>
              ))}
              {(onEdit || onDelete) && (
                <td className="px-6 py-4 text-right space-x-2">
                  {onEdit && (
                    <button
                      onClick={() => onEdit(item)}
                      className="text-blue-500 hover:text-blue-400"
                    >
                      <Edit2 size={16} />
                    </button>
                  )}
                  {onDelete && (
                    <button
                      onClick={() => onDelete(item)}
                      className="text-red-500 hover:text-red-400"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}