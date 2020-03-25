import React from 'react';
import './List.css';

function List(props) {
  // create constant for mapping fx ---- use props from Input.js
  // set unique key on element
  // add checkbox input

  const renderListItems = props.list.map((item, index) => (
    <div className='row' key={item.key}>
      <div className='col'>
        {console.log({ item, index }, item.key)}
        <li className='list-group-item'>
          {`${item.description}`}
          <input
            className=' myCheck'
            type='checkbox'
            name={index}
            value={`todo${index}`}
          />
        </li>
      </div>
    </div>
  ));

  return renderListItems;
}

export default List;
