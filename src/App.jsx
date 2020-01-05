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

    const currentList = [...this.state.list];

    const itemToPush = {
      id: this.state.list.length,
      todo: this.state.todo,
      priority: this.state.priority
    };

    currentList.push(itemToPush);

    this.setState({
      list: [...currentList]
    });
  }

  // get the id of the item to delete and delete from list here, then update state list
  deleteTodo() {
    const currentList = [...this.state.list];
    console.log(`deleteTodo runs: `, currentList);

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
          <List list={this.state.list} deleteItem={() => this.deleteTodo()}></List>
        </div>
      </div>
    );
  }
}

export default App;
