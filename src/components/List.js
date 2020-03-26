import React from 'react';
import './List.css';

function List(props) {
  // create constant for mapping fx ---- use props from Input.js
  // set unique key on element
  // add checkbox input --> + name/value

  const renderListItems = props.list.map(item => {
    return (
      <div className='row' key={item.key}>
        <div className='col'>
          <li className='list-group-item'>
            {`${item.description}`}
            <input
              className=' myCheck'
              type='checkbox'
              name='check'
              value='false'
              onClick={props.clickDelete}
            />
          </li>
        </div>
      </div>
    );
  });

  return renderListItems;
}

export default List;
