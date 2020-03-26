import React from 'react';
// NEED: to setup update view and pass prop here
//////// add clickAll and clickCompleted, pass

function Buttons(props) {
  return (
    <React.Fragment>
      <button id='clear' className='mt-3 mb-3' onClick={props.clickClear}>
        Clear All
      </button>
      <button id='all' className='mt-3 mb-3' onClick={props.clickClear}>
        View All
      </button>
      <button id='completed' className='mt-3 mb-3' onClick={props.clickClear}>
        View Completed
      </button>
    </React.Fragment>
  );
}

export default Buttons;
