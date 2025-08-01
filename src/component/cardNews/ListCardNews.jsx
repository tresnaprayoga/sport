import React from 'react';
import ItemCardNews from './ItemCardNews';

function ListCardNews({ items }) {
  return (
    <div className='card-news'>
      <h3>Selamat Datang di Sport Club </h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industri standard dummy text ever since the been when an unknown printer.</p>
      <div className='list'>
        {items.map((item, index) => (
          <ItemCardNews key={index} image={item.image} date={item.date} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
}

export default ListCardNews;
