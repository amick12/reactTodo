import React from 'react';
// NEED: to setup update view and pass prop here
//////// add clickAll and clickCompleted --> props.[insert attribute name]

function Buttons(props) {
  return (
    <React.Fragment>
      <button id='clear' className='mt-3 mb-3 mr-2' onClick={props.clickClear}>
        Clear All(operableAtm)
      </button>
      <button id='delete' className='mt-3 mb-3' onClick={props.clickDelete}>
        Delete Checked(inopAtm)
      </button>
      <div>
        <button id='all' className='mt-3 mb-3 mr-2' onClick={props.clickAll}>
          View All
        </button>
        <button
          id='completed'
          className='mt-3 mb-3'
          onClick={props.clickCompleted}
        >
          View Completed
        </button>
      </div>
    </React.Fragment>
  );
}

export default Buttons;
