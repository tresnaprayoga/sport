import React from 'react';

function ItemCardNews({ image, date, title, description }) {
  return (
    <div>
      <div className='item'>
        <div className='item-img'>
          <img src={image} alt={title} />
        </div>

        <div className='item-content'>
          <div className='item-date'>{date}</div>
          <div className='item-title'>{title}</div>
          <div className='item-description'>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default ItemCardNews;
