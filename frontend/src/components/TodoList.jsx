// TodoList.jsx
import React, { useEffect, useState } from 'react';
import api from "../api.js";
import AddTodoForm from './AddTodoForm.jsx';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await api.get('/todos');
      setTodos(response.data.todos);
    } catch (error) {
      console.error("Error while downloading taskń", error);
    }
  };

  const addTodo = async (todoItem) => {
    try {
      await api.post('/todos', todoItem);
      fetchTodos();
    } catch (error) {
      console.error("Error while adding task", error);
    }
  };

  const toggleCompletion = async (todoItem) => {
    try {
      const updatedTodo = { ...todoItem, completed: !todoItem.completed };
      await api.put(`/todos/${todoItem.id}`, updatedTodo);
      fetchTodos();
    } catch (error) {
      console.error("Error while updating task", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await api.delete(`/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error("Error while deleting task", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h2>Tasks list</h2>
      <ul className="todo-list">
        {todos.map((todoItem) => (
          <li key={todoItem.id} className={todoItem.completed ? 'completed' : ''}>
            <span onClick={() => toggleCompletion(todoItem)}>
              {todoItem.title}
            </span>
            <button onClick={() => deleteTodo(todoItem.id)}>Usuń</button>
          </li>
        ))}
      </ul>
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
};

export default TodoList;
