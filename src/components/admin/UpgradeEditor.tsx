import React, { useState } from 'react';
import { upgrades } from '../../data/config';
import { Upgrade } from '../../types';
import { AdminTable } from './AdminTable';
import { UpgradeForm } from './UpgradeForm';

export function UpgradeEditor() {
  const [items, setItems] = useState<Upgrade[]>(upgrades);
  const [editingItem, setEditingItem] = useState<Upgrade | null>(null);

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'price', label: 'Price', format: (value: number) => `${value.toLocaleString()} €` },
    { key: 'description', label: 'Description' },
  ];

  const handleSave = (upgrade: Upgrade) => {
    if (editingItem) {
      setItems(items.map(i => i.id === upgrade.id ? upgrade : i));
    } else {
      setItems([...items, { ...upgrade, id: `upgrade-${items.length + 1}` }]);
    }
    setEditingItem(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-medium text-gray-900">Additional Upgrades</h2>
        <p className="mt-1 text-sm text-gray-500">
          Manage optional upgrades and add-ons that customers can choose to enhance their house. Configure pricing and detailed descriptions for each upgrade option.
        </p>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => setEditingItem({ id: '', name: '', price: 0, description: '' })}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
        >
          Add Upgrade
        </button>
      </div>

      <AdminTable
        data={items}
        columns={columns}
        onEdit={setEditingItem}
        onDelete={(item) => setItems(items.filter(i => i.id !== item.id))}
      />

      {editingItem && (
        <UpgradeForm
          upgrade={editingItem}
          onSave={handleSave}
          onCancel={() => setEditingItem(null)}
        />
      )}
    </div>
  );
}