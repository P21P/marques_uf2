import React from 'react';
import ReactDOM from 'react-dom';
import App from './TodoList';
import './index.css';
import "./TodoList.css";
import "./ItemList.css";

ReactDOM.render(
  <div>
	<h1> To Do List</h1>
	<TodoList />
  </div>,
	document.getElementById('root)
);
