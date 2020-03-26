import React from 'react';
import List from './List';
import Buttons from './Buttons';

//TODO: once finished testing, move state/methods to App.js - so input === input

let updateTodoList;

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

    updateTodoList = this.state.todoList.concat(newTodo);

    this.setState(
      {
        todoList: updateTodoList,
        newTodo: ''
      }
      // ,() => console.log('THIS state', this.state)
    );
  };

  // create checked fx
  // NEED: 1) determine which item has been checked
  /////////////// --> logic using input chkbx name/value
  /////////2) css to strike out item

  // NEED: ability to clear LS// expand to delete li elements post succ test
  // add setState to clear li el --> new arr var to indir manip state

  clear = e => {
    e.preventDefault();
    localStorage.clear();
    let clearedList = [];

    this.setState({
      todoList: clearedList
    });
  };
  ////////////////////
  // delete function
  /////// NEED: 1) to be able to determine which item is to be deleted
  //////////////////// ---> via key // if not = to del key add to filtArr
  ///////////// 2) reset state of todoList to post del arr
  deleteTodo = e => {
    //
    let postDelete = this.state.items.filter(item => {
      if (item.key !== e.target.key) {
        return item;
      }
      return postDelete;
    });

    this.setState({
      todoList: postDelete
    });
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
          <List clickDelete={this.clickDelete} list={this.state.todoList} />
        </ul>
        <Buttons
          clickClear={this.clear}
          clickDelete={this.clickDelete}
          clickAll={this.clickAll}
        />
      </React.Fragment>
    );
  }
}

export default Input;
