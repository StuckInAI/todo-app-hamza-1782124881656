import { Check, Trash2, Square, CheckSquare } from 'lucide-react';
import { Todo } from '@/types';
import { cn } from '@/lib/utils';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="group flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all animate-in fade-in slide-in-from-bottom-2">
      <button
        onClick={() => onToggle(todo.id)}
        className={cn(
          "transition-colors",
          todo.completed ? "text-emerald-500" : "text-gray-400 hover:text-blue-500"
        )}
      >
        {todo.completed ? <CheckSquare size={24} /> : <Square size={24} />}
      </button>
      
      <span className={cn(
        "flex-1 text-gray-700 transition-all",
        todo.completed && "line-through text-gray-400"
      )}>
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
        aria-label="Delete todo"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}