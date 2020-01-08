/* eslint-disable linebreak-style */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-curly-spacing */
import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editEnabled: false,
      editItem: {
        id: '',
        todo: '',
        priority: ''
      }
    };

    this.expandTodo = this.expandTodo.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  expandTodo() {
    const currentStatus = this.state.editEnabled;
    this.setState({
      editEnabled: !currentStatus
    });
  }

  cancelEdit() {
    this.setState({
      editEnabled: false
    });
  }

  render() {
    const colorClass = this.props.thisTodo.priority === '3' ? 'list-group-item list-group-item-danger'
                     : this.props.thisTodo.priority === '1' ? 'list-group-item list-group-item-success'
                     : 'list-group-item list-group-item-warning';

    return (
      <li className={colorClass}>
        {this.state.editEnabled === false ?
          <div className="row align-items-center">
            <input type="checkbox" className="col-lg-1 list-item-checkbox" id="exampleCheck1" />
            <span className="col-lg-9">{this.props.thisTodo.todo}</span>
            <span className="list-item-btns-div col-lg-2 justify-content-center">
              <button type="button" className="btn btn-default list-item-btns" onClick={this.expandTodo}>
                <i className="fas fa-edit"></i>
              </button>
              <button type="button" className="btn btn-default list-item-btns" onClick={this.props.trashClick}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </span>
          </div>
        :
          <div className="card-body text-dark container">
            <div className="form-group">
              <label className="font-weight-bold">Description</label>
              <textarea className="form-control" name="textarea-todo" defaultValue={this.props.thisTodo.todo} onChange={this.props.editTodoInput} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="form-group">
              <label className="font-weight-bold">Priority</label>
              <select className="form-control" name="select-priority" defaultValue={this.props.thisTodo.priority} onChange={this.props.editSelectPriority}>
                <option>Select option</option>
                <option value="3">High</option>
                <option value="2">Normal</option>
                <option value="1">Low</option>
              </select>
            </div>
            <div className="row justify-content-end">
              <div className="col edit-btns-container">
                <button type="submit" className="btn btn-success btn-sm edit-btns" onClick={this.props.editSubmit && this.cancelEdit}>Save</button>
                <button type="submit" className="btn btn-danger btn-sm edit-btns" onClick={this.cancelEdit}>Cancel</button>
              </div>
            </div>
          </div>
        }
      </li>
    );
  }
}

export default Item;
