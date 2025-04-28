import React from 'react';

export default function ItemLCaorusel({ image, title, showPlayButton }) {
  return (
    <div className='food-card'>
      <div className='food-image-wrapper'>
        <img src={image} alt={title} className='food-image' />
      </div>
    </div>
  );
}
