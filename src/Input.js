import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    // initialize state
    this.state = {
      newTodo: '',
      todoList: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // console.log('change handled');
    this.setState({
      newTodo: e.target.value
    });
  }

  render() {
    // console.log(this.state.newTodo);
    return (
      <div className='row'>
        <input
          type='text'
          placeholder='yuz haz nu todo?'
          className='text-center'
          //set value to state of newTodo
          value={this.state.newTodo}
          //onChange attr execute handleChange fx
          onChange={this.handleChange}
        ></input>
      </div>
    );
  }
}

export default Input;
