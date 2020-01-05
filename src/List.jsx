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

    this.updateTrashItem = this.updateTrashItem.bind(this);
    this.trashThisItem = this.trashThisItem.bind(this);
  }

  // list should either show a message to get started adding todos, or it should display the todos
  // new items will be coming in from sibling AddItem, which should be passed down here as props from App

  updateTrashItem(itemToTrash) {
    console.log(`trashItem!`, itemToTrash);
    this.setState({
      deleteItem: itemToTrash
    });
    // const list = this.props.list;
    // console.log('list from trashItem(): ', list);
    // const updatedList = list.filter(listItem => listItem.id !== itemToTrash);
    // console.log(`updatedList: `, updatedList);
    // this.setState({
    //   deletedList: updatedList
    // });
  }

  trashThisItem(item) {
    console.log('trashThisItem(), item: ', item);
    this.setState({
      deleteItem: item
    });
  }

  render() {
    const list = this.props.list;

    const mappedList = list.map(listItem => <Item key={listItem.id} id={listItem.id} todo={listItem.todo} priority={listItem.priority} trashButton={this.trashThisItem} />);

    const emptyList = '<div>The list is empty!</div>';

    return (
      <div className="col-sm-8 container">
        <ul className="list-group list-body">
          <li className="list-group-item list-header">View Todos</li>
          {mappedList}
          <div className="list-group tab-content" id="myList" role="tablist">
            <a className="list-group-item list-group-item-action" data-toggle="list" href="#home" role="tab">Home</a>
            <div className="tab-pane" id="home" role="tabpanel">HOME</div>
            <a className="list-group-item list-group-item-action" data-toggle="list" href="#profile" role="tab">Profile</a>
            <div className="tab-pane" id="profile" role="tabpanel">PROFILE</div>
            <a className="list-group-item list-group-item-action" data-toggle="list" href="#messages" role="tab">Messages</a>
            <div className="tab-pane" id="messages" role="tabpanel">MESSAGES</div>
            <a className="list-group-item list-group-item-action" data-toggle="list" href="#settings" role="tab">Settings</a>
            <div className="tab-pane" id="settings" role="tabpanel">SETTINGS</div>
          </div>
        </ul>
      </div>
    )
  }
}

export default List;
