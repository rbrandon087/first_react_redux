import Counter from './components/Counter';
import './App.css';
import React from 'react';
import Todo from './components/Todo'

function App() {
  return (
    <div className="App">
      <Counter />
      <Todo />
    </div>
  );
}

export default App;