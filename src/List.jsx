/* eslint-disable jsx-quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-spacing */
import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editPriority: '',
      editInput: ''
      // deleteItem: '',
      // todoItems: []
    };

    this.handleTrashClick = this.handleTrashClick.bind(this);
    this.ifListEmpty = this.ifListEmpty.bind(this);
    this.editPriority = this.editPriority.bind(this);
    this.editInput = this.editInput.bind(this);
  }

  handleTrashClick(item) {
    this.props.deleteItem(item);
  }

  editPriority(e) {
    console.log('priority: ', e.target.value);
    this.setState({
      editPriority: e.target.value
    });
  }

  editInput(e) {
    console.log('input: ', e.target.value);
    this.setState({
      editInput: e.target.value
    });
  }

  handleEditSubmit(item) {
    const editedItem = {
      id: item.id,
      todo: this.state.editInput,
      priority: this.state.editPriority
    };

    this.props.editItem(editedItem);
  }

  ifListEmpty() {
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
    const mappedList = list.map(listItem => <Item
                                              key={listItem.id}
                                              thisTodo={listItem}
                                              trashClick={() => this.handleTrashClick(listItem.id)}
                                              editClick={() => this.handleEditClick()}
                                              editSubmit={() => this.handleEditSubmit(listItem)}
                                              editSelectPriority={this.editPriority}
                                              editTodoInput={this.editInput}
                                            />);
    const emptyList = this.ifListEmpty();
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
