import React, { useState } from 'react';
import { Plus } from 'lucide-react';

type TodoInputProps = {
  onAdd: (text: string) => void;
};

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-white transition-all"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors flex items-center justify-center"
        aria-label="Add todo"
      >
        <Plus size={24} />
      </button>
    </form>
  );
}