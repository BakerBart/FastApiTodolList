// AddTodoForm.jsx
import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [todoTitle, setTodoTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoTitle.trim()) {
      addTodo({
        title: todoTitle.trim(),
        completed: false
      });
      setTodoTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        placeholder="Task title"
      />
      <button type="submit">Add task</button>
    </form>
  );
};

export default AddTodoForm;
