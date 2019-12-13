import React, {useState, useEffect} from 'react';
import TodoList from "./components/TodoList";
import {Context} from './helpers/context';
import './styles/app.css';

export default function App() {
  const [todo, setTodo] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');

  useEffect(() => {
    const raw = localStorage.getItem('todo') || []
    setTodo(JSON.parse(raw))
  }, []);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo]);

  const addItem = () => {
    if(todoTitle.trim()) {
      setTodo([
        ...todo,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false
        }
      ]);
      setTodoTitle('');
    } else {
      alert ('Enter text please')
    }
  };

  const removeItem = id => (
    setTodo(todo.filter(item => {
      return item.id !== id
    }))
  );

  const toggleItem = id => {
    setTodo(todo.map(item => {
      if(item.id === id) {
        item.completed = !item.completed
      }
      return item
    }))
  };

  return (
    <Context.Provider value={{
      removeItem, toggleItem
    }}>
    <div className="container">
      <h3>Todo List</h3>
      <div className="wrapper">
        <div className="input-wrapper">
          <input className="input-field"
                 type="text"
                 placeholder="add new item"
                 value={todoTitle}
                 onChange={e => setTodoTitle(e.target.value)}
                 onKeyPress={e => e.key === 'Enter' && addItem()}
          />
          <button onClick={addItem}>
            add
          </button>
        </div>
        <TodoList todo={todo}/>
      </div>
    </div>
    </Context.Provider>
  );
}
