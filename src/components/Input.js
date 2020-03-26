import React from 'react';
import List from './List';
import Delete from './Delete';

//input will require state ---> use class

class Input extends React.Component {
  constructor(props) {
    super(props);
    // initialize state

    this.state = {
      todoList: [],
      newTodo: ''
    };
  }

  // BEGIN : life cycle methods -- local storage
  ///////// localStorage only holds strings --> stringify todoList array

  // --didmount method--
  componentDidMount() {
    // console.log('DidMount');
    //TypeError: this.state.todoList is null
    //////////////// NEED: to check if null first? --> ||
    // console.log(localStorage.todos);

    let newList = JSON.parse(localStorage.getItem('todos')) || [];

    this.setState(
      {
        todoList: newList
      }
      // ,() => console.log('newList', newList)
    );
  }

  // // -didupdate method--
  componentDidUpdate() {
    // console.log('DidUpdate', JSON.stringify(this.state.todoList));
    localStorage.setItem('todos', JSON.stringify(this.state.todoList));
  }

  // END : life cycle methods -- local storage

  handleChange = e => {
    this.setState(
      {
        newTodo: e.target.value
      }
      // ,() => console.log('setState in handleChange', this.state)
    );
  };

  ////////
  // NEED: fx to execute on submit
  //////// a way to derive a unique key (no index) --> Date.now()

  gotSubmitted = e => {
    e.preventDefault();
    const newTodo = {
      description: this.state.newTodo,
      key: Date.now()
    };
    console.log('gotSubmitted - newTodo', newTodo);

    //create constant to hold new, updated array
    //need: attach newTodo to todoList array
    /////////// --->  no push ** 1) illegal to directly mutate state
    /////////////////////////////2) push returns array length ---> concat?

    const updateTodoList = this.state.todoList.concat(newTodo);

    this.setState(
      {
        todoList: updateTodoList,
        newTodo: ''
      }
      // ,() => console.log('THIS state', this.state)
    );
  };

  //testing ability to clear LS//need to expand to delete li elements as well
  clear = e => {
    e.preventDefault();
    localStorage.clear();
  };

  render() {
    ////////
    // NEED: to disable submit when input value is 0 ---> required
    ////////
    return (
      <React.Fragment>
        <form onSubmit={this.gotSubmitted}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control text-center form-control-lg'
              placeholder='yuz haz nu todoz?'
              value={this.state.newTodo}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type='submit' className='btn btn-block btn-info mt-1'>
            add y0 todo
          </button>
        </form>
        <ul className='p-0'>
          <List list={this.state.todoList} />
        </ul>
        <button className='mt-3 mb-3' onClick={this.clear}>
          Clear All
        </button>
        <Delete />
      </React.Fragment>
    );
  }
}

export default Input;
