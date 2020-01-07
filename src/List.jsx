/* eslint-disable jsx-quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-spacing */
import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteItem: '',
      todoItems: []
    };

    this.handleTrashClick = this.handleTrashClick.bind(this);
    this.listEmpty = this.listEmpty.bind(this);
  }

  // list should either show a message to get started adding todos, or it should display the todos
  // new items will be coming in from sibling AddItem, which should be passed down here as props from App

  handleTrashClick(item) {
    console.log('handleTrashclick runs, item: ', item);
    this.props.deleteItem(item);
  }

  listEmpty() {
    return (
      <li className="list-group-item list-group-item-primary">
        <div className="row">
          <span className="col-12 empty-list-msg">Welcome to Very Simple To Do App</span>
          <span className="col-12">Get started by adding an item</span>
        </div>
      </li>
    );
  }

  render() {
    const list = this.props.list;
    const mappedList = list.map(listItem => <Item key={listItem.id} id={listItem.id} todo={listItem.todo} priority={listItem.priority} trashClick={() => this.handleTrashClick(listItem.id)} editClick={() => this.handleEditClick()} />);
    const emptyList = this.listEmpty();
    const displayList = list.length === 0 ? emptyList : mappedList;

    return (
      <div className="col-sm-8 container">
        <ul className="list-group list-body">
          <li className="list-group-item list-header">View Todos</li>
          {displayList}
        </ul>
      </div>
    );
  }
}

export default List;
