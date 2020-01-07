/* eslint-disable linebreak-style */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-curly-spacing */
import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editNow: false
    };

    this.editTodo = this.editTodo.bind(this);
  }

  editTodo() {
    const currentStatus = this.state.editNow;
    console.log('currentStatus: ', currentStatus);
    this.setState({
      editNow: !currentStatus
    });
    console.log('this.state.editNow: ', this.state.editNow);
  }

  // editing() {
  //   this.state.editNow === false ?
  //   (
  //     <div className="row align-items-center">
  //       <input type="checkbox" className="col-lg-1 list-item-checkbox" id="exampleCheck1" />
  //       <span className="col-lg-9">{this.props.todo}</span>
  //       <span className="list-item-btns-div col-lg-2 justify-content-center">
  //         <button type="button" className="btn btn-default list-item-btns" onClick={this.props.editClick}>
  //           <i className="fas fa-edit"></i>
  //         </button>
  //         <button type="button" className="btn btn-default list-item-btns" onClick={this.props.trashClick}>
  //           <i className="fas fa-trash-alt"></i>
  //         </button>
  //       </span>
  //     </div>
  //   )
  //   :
  //   (
  //     <span>SURPRISE!</span>
  //   );
  // }

  render() {
    const colorClass = this.props.priority === '3' ? 'list-group-item list-group-item-danger'
                     : this.props.priority === '1' ? 'list-group-item list-group-item-success'
                     : 'list-group-item list-group-item-warning';

    return (
      <li className={colorClass}>
        {this.state.editNow === false ?
          <div className="row align-items-center">
            <input type="checkbox" className="col-lg-1 list-item-checkbox" id="exampleCheck1" />
            <span className="col-lg-9">{this.props.todo}</span>
            <span className="list-item-btns-div col-lg-2 justify-content-center">
              <button type="button" className="btn btn-default list-item-btns" onClick={this.editTodo}>
                <i className="fas fa-edit"></i>
              </button>
              <button type="button" className="btn btn-default list-item-btns" onClick={this.props.trashClick}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </span>
          </div>
        :
          <span>SURPRISE!</span>
        }
      </li>
    );
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
