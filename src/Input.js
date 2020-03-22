import React from 'react';

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

  handleChange = e => {
    this.setState({
      newTodo: e.target.value
    });
  };

  //fx to execute on submit
  gotSubmitted = e => {
    e.preventDefault();
    const newTodo = {
      title: this.state.newTodo
    };

    //create constant to hold new, updated array
    //need: attach newTodo to todoList array
    ///////////--> can't push bc illegal to directly mutate state ---> concat?

    const updateTodoList = this.state.todoList.concat(newTodo);

    this.setState(
      {
        todoList: updateTodoList,
        newTodo: ''
      },
      () => console.log(this.state)
    );
    console.log(this.state.todoList);
  };

  render() {
    // console.log(this.state.newTodo);
    return (
      <React.Fragment>
        <form onSubmit={this.gotSubmitted}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='add y0 todo'
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
