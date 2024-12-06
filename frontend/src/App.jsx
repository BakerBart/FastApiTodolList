// App.jsx
import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo List</h1>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  );
};

export default App;
