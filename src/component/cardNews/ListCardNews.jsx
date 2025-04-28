import React from 'react';
import ItemCardNews from './ItemCardNews';

function ListCardNews({ items }) {
  return (
    <div className='card-news'>
      <p>NEWS </p>
      <div className='list'>
        {items.map((item, index) => (
          <ItemCardNews key={index} image={item.image} date={item.date} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
}

export default ListCardNews;
