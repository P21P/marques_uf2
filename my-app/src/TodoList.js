import React, { Component } from 'react';
import ItemList from './ItemList';

import { Button } from '@material-ui/core';
import { TextField } from '@naterial-ui/core';

class TodoList extends Component {
	constructor (props) {
	
	super(props);

	this.state = { 
		items : []
		};
	

	this.last_id = 0;
	this.num = 0;

	this.addItem = this.addItem.bind(this);
	this.removeItem = this.removeItem.bind(this);

	}

	addItem (e) {
	
	e.preventDefault();

	let text_v = document.getElementById("text-task").value;
	document.getElementById("text-task").value = "";
	document.getElementById("text.task").focus();

	this.last_id++;
	this.num++;

	this.state.items.push({id: this.last_id, item:text_v});

	this.setState({ items: this.state.items });	
	}
	
	removeItem(id_item){
	
	console.log("Remove" + id_item);

	for (let i = 0; i < this.state.items.length; i++) {
		if (this.state.items[i].id === id_item){
			this.state.items.splice(i,1);
			break;
			}
		}
		
		this.num--;

		this.setState({ items: this.state.items });

	}

	render() {
		let list = this.state.items.map( (todo_item) => {
			return (<ItemList item={todo_item.item}
			id_item={todo_item.id}
			parentRemove={this.removeItem}
		});

	return (
	<div className="TodoList">
	 <p>Num Items: {this.num }</p>
		<form onSubmit={this.addItem}>
		<p><TextField type="text" id="text-task" autoComplete="off" placeholder="Add a Todo"/>
		<Button color="primary" variant="contained" type"submit">Añadir</Button></p>
		</form>
		<ul>
			{list}
		</ul>
	</div>
	);	
	}
}
