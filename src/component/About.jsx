import React from 'react';

const AboutSection = ({ title, description, image }) => {
  return (
    <section className='content-section'>
      <h2 id='info'>{title}</h2>
      <div className='content-wrapper'>
        <div className='content-text'>
          <h3>Footbal Spain</h3>
          <p>{description}</p>
        </div>
        <div className='content-image'>
          <img src={image} alt='Content illustration' />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
