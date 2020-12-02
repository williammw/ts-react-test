import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import styles from './App.module.css'
import Todo from './Todo';

function App() {

  // const changeTheme = () => {
  //   document.documentElement.style.setProperty(
  //     '--error-color',
  //     'red',
  //   )
  //   console.log('color updated')
  // }

  return (
    <div className="App">
      <h2>This is a todo app</h2>      
      <Todo title='good girl'/>
      <button  >Click me to change the error color to red</button>
    </div>
  );
}

export default App;
