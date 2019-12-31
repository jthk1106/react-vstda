import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: []
    }

    this.trashItem = this.trashItem.bind(this)
  }

  // list should either show a message to get started adding todos, or it should display the todos
  // new items will be coming in from sibling AddItem, which should be passed down here as props from App

  trashItem() {
    console.log(`trashItem!`)
  }

  render() {
    const list = this.props.list
    console.log(`this.props.list from List component: ${list}`)

    const mappedList = list.map((listItem) => {
      return <Item key={listItem.id} todo={listItem.todo} priority={listItem.priority} trash={this.trashItem}/>
    })

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


// import React from "react"

// import Joke from "./Joke"
// import jokesData from "./jokesData"

// function App() {
//     const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

//     return (
//         <div>
//             {jokeComponents}
//         </div>
//     )
// }

// export default App
