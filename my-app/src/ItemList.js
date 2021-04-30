import React, { Component } from 'react';

import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

class ItemList extends Component {

	constructor (props){
		super(props);
		this.removeItem = this.removeItem.bind(this);
	}

	removeItem(){
		this.props.parentRemove(this.props.id_item);
	}

	render(){
		return(
		<li>{this.props.items} <Button className="delete" variant="contained" color="secondary" onClick={this.removeItem}>{<DeleteIcon />}</Button>>/li>
		);
	}
}
export default ItemList;
