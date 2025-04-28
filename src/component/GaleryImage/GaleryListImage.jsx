import React from 'react';
import GalleryItem from './GlaeryItem';

const GalleryList = ({ images }) => {
  return (
    <div className='gallery-container'>
      {images.map((url, index) => (
        <GalleryItem key={index} src={url} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default GalleryList;
