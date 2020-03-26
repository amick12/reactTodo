import React from 'react';
import './App.css';
import Input from './Input';

function App() {
  return (
    <div className='container d-flex justify-content-center'>
      <div className='row'>
        <div className='col-6 offset-3 text-center mt-5'>
          <h1>toDoList</h1>
        </div>
        <div className='col-6 offset-3 text-center'>
          <Input />
        </div>
      </div>
    </div>
  );
}

export default App;
