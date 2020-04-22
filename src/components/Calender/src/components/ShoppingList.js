import React from 'react';
import PropTypes from 'prop-types';

const ShoppingList = ({ list }) => {
  console.log('azzzz')
  return (
    <div className='ingredients-list'>
      <h3 className='subheader'>
        Your Shopping List
      </h3>
      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
      {(!list || list.length === 0) && <div>No meal found. Please add meal to your Meal Planner.</div>}
    </div>
  )
};

ShoppingList.propTypes = {
  list: PropTypes.array,
};
export default ShoppingList;