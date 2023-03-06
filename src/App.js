import './App.css';
import { useState } from 'react';
import { FormCreator } from './components/todo-creator';
import { TodoItem } from './components/todo-item/todo-item';
import json from './todos.json';

function App() {
  let [todos, setTodos] = useState(json);

  const createTodo = (title) => {
    setTodos([...todos, { title, isDone: false }])

    console.log(todos);
  }

  const removeTodo = (index) => {
    return () => {
      setTodos(todos.filter((todo, idx) => index !== idx));
    }
  };


  const checkTodo = (index) => {
    return () => {
      console.log(todos[index].isDone);
      todos[index].isDone = !todos[index].isDone;
      setTodos([...todos]);
    }
  }
  return (
    <div className="App">
      <h1>Todo app</h1>
      <hr />

      <FormCreator createTodo={createTodo}/>
      <hr />
      <div className='d-flex justify-content-between ms-5 me-5'>
        <div>
          <h3>Todo</h3>
          {
            todos.map((todo, index) => {
              if (!todo.isDone) {
                return (
                  <TodoItem key={index} itemIndex={index} removeItem={removeTodo(index)} todo={todo} checkItem={checkTodo(index)} todos={todos} setTodos={setTodos}/>
                );
              }
            })
          }
        </div>
        <div>
          <h3>Done</h3>
          {
            todos.map((todo, index) => {
              if (todo.isDone) {
                return (
                  <TodoItem key={index} itemIndex={index} removeItem={removeTodo(index)} todo={todo} checkItem={checkTodo(index)} todos={todos} setTodos={setTodos}/>
                );
              }
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
