import React from 'react';
import './App.css';
import Input from './Input';

function App() {
  return (
    <div className='container d-flex justify-content-center'>
      <div className='row'>
        <div className='col-6 offset-4 text-center'>
          <h1>Hello from App.js Container</h1>
          <Input />
        </div>
      </div>
    </div>
  );
}

export default App;
