import { TodoStatus } from '@/types';
import { cn } from '@/lib/utils';

type TodoFiltersProps = {
  status: TodoStatus;
  setStatus: (status: TodoStatus) => void;
  count: number;
  onClearCompleted: () => void;
  hasCompleted: boolean;
};

export default function TodoFilters({ status, setStatus, count, onClearCompleted, hasCompleted }: TodoFiltersProps) {
  const filters: { label: string; value: TodoStatus }[] = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 px-1">
      <span className="text-sm text-gray-500">{count} {count === 1 ? 'item' : 'items'} left</span>
      
      <div className="flex bg-gray-100 p-1 rounded-lg">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setStatus(f.value)}
            className={cn(
              "px-3 py-1 text-sm font-medium rounded-md transition-all",
              status === f.value 
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <button
        onClick={onClearCompleted}
        disabled={!hasCompleted}
        className={cn(
          "text-sm font-medium transition-colors",
          hasCompleted ? "text-gray-500 hover:text-red-500 cursor-pointer" : "text-gray-300 cursor-not-allowed"
        )}
      >
        Clear completed
      </button>
    </div>
  );
}