import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

const data = [
  {
    id: '1',
    toDo: 'Wash the car',
    done: true,
  },
  {
    id: '2',
    toDo: 'Walk the dog',
    done: false,
  },
  {
    id: '3',
    toDo: 'Go to the groceries',
    done: false,
  },
]

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: data,
    }
  }

  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.todos.map((todo) => {
              return (
                <ToDo toDo={todo} />
              )
            })
          }
        </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </div>
    );
  }
}
export default App;
