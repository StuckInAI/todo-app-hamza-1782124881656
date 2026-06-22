import { useState } from 'react';
import { useTodos } from '@/hooks/useTodos';
import TodoInput from '@/components/TodoInput';
import TodoItem from '@/components/TodoItem';
import TodoFilters from '@/components/TodoFilters';
import { TodoStatus } from '@/types';
import { ListTodo } from 'lucide-react';

export default function Home() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos();
  const [status, setStatus] = useState<TodoStatus>('all');

  const filteredTodos = todos.filter(todo => {
    if (status === 'active') return !todo.completed;
    if (status === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter(t => !t.completed).length;
  const hasCompleted = todos.some(t => t.completed);

  return (
    <div className="max-w-2xl mx-auto w-full px-4 py-12">
      <header className="flex items-center gap-3 mb-8">
        <div className="bg-blue-600 p-2 rounded-lg text-white">
          <ListTodo size={32} />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
          <p className="text-gray-500">Stay organized and productive.</p>
        </div>
      </header>

      <main>
        <TodoInput onAdd={addTodo} />

        <div className="space-y-3">
          {filteredTodos.length > 0 ? (
            filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
              <p className="text-gray-400">No tasks found.</p>
            </div>
          )}
        </div>

        {todos.length > 0 && (
          <TodoFilters
            status={status}
            setStatus={setStatus}
            count={activeCount}
            onClearCompleted={clearCompleted}
            hasCompleted={hasCompleted}
          />
        )}
      </main>

      <footer className="mt-12 text-center text-xs text-gray-400">
        Built with React 19 & Tailwind v4
      </footer>
    </div>
  );
}