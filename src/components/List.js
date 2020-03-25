import React from 'react';

function List(props) {
  // create constant for mapping fx ---- use props from Input.js
  const renderListItems = props.list.map((item, index) => (
    <li key={index} className='list-group-item'>
      {/* {console.log(item, index)} */}
      {`${item.title}`}
    </li>
  ));
  return <div>{renderListItems}</div>;
}

export default List;
