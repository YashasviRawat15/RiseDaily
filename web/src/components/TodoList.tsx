import React from 'react';

interface TodoListProps {
  todos: string[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => (
  <div className="card">
    <h2>ToDo List</h2>
    <ul>
      {todos.map((task, i) => <li key={i}>{task}</li>)}
    </ul>
  </div>
);

export default TodoList;
