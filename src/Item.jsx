/* eslint-disable linebreak-style */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-curly-spacing */
import React, { Component } from 'react';

class Item extends Component {

  // the item should have at least a content prop and a priority prop that are displayed
  // if the component is clicked, it should show editable features that allow changing the values of the props upon submit

  render() {
    const colorClass = this.props.priority === 'high' ? 'list-group-item list-group-item-danger'
                     : this.props.priority === 'normal' ? 'list-group-item list-group-item-success'
                     : 'list-group-item list-group-item-warning';
    return (
      <li className={colorClass}>
        <div className="row">
          <input type="checkbox" className="col-lg-1 list-item-checkbox" id="exampleCheck1" />
          <label className="col-lg-9">{this.props.todo}</label>
          <span className="list-item-btns-div col-lg-2">
            <button type="button" className="btn btn-default list-item-btns ">
              <i className="fas fa-edit"></i>
            </button>
            <button type="button" className="btn btn-default list-item-btns" onClick={this.props.propToHandleTrashClick} value={this.props.id}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </span>
          {/* <label className="form-check-label list-item-label justify-content-between">
            <input type="checkbox" className="form-check-input" value="" /> props.content
          </label> */}
        </div>
      </li>
    )
  }
}

export default Item;

// !!! CONDITIONAL DISPLAY STYLE !!!
// function Joke(props) {
//     return (
//         <div>
//             <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
//             <h3 style={{display: !props.question && "red"}}>Answer: {props.punchLine}</h3>
//             <hr/>
//         </div>
//     )
// }
