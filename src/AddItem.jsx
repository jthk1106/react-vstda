import React, { Component } from 'react';

class AddItem extends Component {

  // this component should take an input for a todo item & priority which will be handled in a function which should contain them as properties
  // in an object and then be pushed into an array of todo items
  // AddItem should send todo object up to App as a setState

  render() {
    return (
      <div className='col-sm-4'>
        <form>
          <div className="card border-dark mb-3">
            <div className="card-header">Add New Todo</div>
            <div className="card-body text-dark">
              <div className="form-group">
                <label className="font-weight-bold">I want to..</label>
                <textarea className="form-control create-todo-text" name="textarea-todo" onChange={this.props.todoInput} id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="form-group">
                <label className="font-weight-bold">How much of a priority is this?</label>
                <select className="form-control create-todo-priority" name="select-priority" onChange={this.props.selectPriority}>
                  <option>Select option</option>
                  <option value="3">High</option>
                  <option value="2">Normal</option>
                  <option value="1">Low</option>
                </select>
              </div>
            </div>
            <div className="card-footer text-muted">
              <button type="submit" className="btn btn-success btn-block btn-lg create-todo" onClick={this.props.onTheClick}>Add</button>
            </div>
          </div>
        </form>
      </div>
    );
  };

}

export default AddItem;
