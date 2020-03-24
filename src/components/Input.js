import React from 'react';
// import List from './List';

//input will require state ---> use class

class Input extends React.Component {
  constructor(props) {
    super(props);
    // initialize state
    this.state = {
      newTodo: '',
      todoList: []
    };
  }

  // BEGIN : life cycle methods -- local storage
  ///////// localStorage only holds strings --> stringify todoList array

  // --didmount method--
  componentDidMount() {
    // console.log('DidMount');
    //TypeError: this.state.todoList is null
    //////////////// NEED: to check if null first? --> ||
    let newList = JSON.parse(localStorage.getItem('todos')) || [];

    this.setState(
      {
        todoList: newList
      }
      // ,() => console.log('newList', newList)
    );
  }

  // -didupdate method--
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

  //fx to execute on submit
  gotSubmitted = e => {
    e.preventDefault();
    const newTodo = {
      title: this.state.newTodo
    };
    // console.log('gotSubmitted - newTodo', newTodo);

    //create constant to hold new, updated array
    //need: attach newTodo to todoList array
    ///////////----->   no push  1) illegal to directly mutate state
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

  render() {
    // console.log(this.state.newTodo);
    // NEED: to find way to get babel to stop changing my jsx "" to ''
    /////////before I lose my mind...HTML = "" JS = '', da**it, Babel.

    return (
      <React.Fragment>
        <form onSubmit={this.gotSubmitted}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control text-center'
              placeholder='yuz haz nu todoz?'
              value={this.state.newTodo}
              onChange={this.handleChange}
            />
          </div>
          <button type='submit' className='btn btn-block btn-info mt-1'>
            add y0 todo
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Input;
