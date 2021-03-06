import React, { Component } from 'react';
import AddItem from './AddItem';
import List from './List';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todo: null,
      priority: 'normal',
      list: []
    };

    this.updateTextValue = this.updateTextValue.bind(this);
    this.updatePriorityValue = this.updatePriorityValue.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  updateTextValue(e) {
    e.preventDefault();

    this.setState({
      todo: e.target.value
    });
  }

  updatePriorityValue(e) {
    e.preventDefault();

    this.setState({
      priority: e.target.value
    });
  }

  submitTodo(e) {
    e.preventDefault();
    const uniqueId = new Date().valueOf();
    const currentList = [...this.state.list];

    const itemToPush = {
      id: uniqueId,
      todo: this.state.todo,
      priority: this.state.priority,
      completed: false
    };

    currentList.push(itemToPush);

    this.setState({
      list: [...currentList]
    });
  }

  // get the id of the item to delete and delete from list here, then update state list
  deleteTodo(theItem) {
    const currentList = [...this.state.list];
    const deleteList = currentList.filter(item => item.id !== theItem);
    this.setState({
      list: [...deleteList]
    });
  }

  editTodo(theItem) {
    console.log('editTodo: ', theItem);
    const currentList = [...this.state.list];
    const editList = currentList.map((item) => {
      if(theItem.id === item.id) {
        return theItem;
      }
      return item;
    });
    console.log('editList: ', editList);
    this.setState({
      list: [...editList]
    });
  }

  render() {
    console.log(`this.state.list from render: ${this.state.list}, Keys: ${Object.keys(this.state.list)}`)
    return (
      <div className='container'>
        <div className='row'>
          <hr/>
          <h1 className='title col-sm-12'>v s t d a</h1>
          <p className='title-description col-sm-12'>very simple to-do app</p>
        </div>
        <hr className='col-sm-10'/>
        <div className='row'>
          <AddItem onTheClick={this.submitTodo} todoInput={this.updateTextValue} selectPriority={this.updatePriorityValue}></AddItem>
          <List list={this.state.list} deleteItem={(item) => this.deleteTodo(item)} editItem={(item) => this.editTodo(item)}></List>
        </div>
      </div>
    );
  }
}

export default App;
