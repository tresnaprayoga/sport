import React from 'react';

const AboutSection = ({ title, description, image }) => {
  return (
    <section className='content-section'>
      <h2 id='info'>{title}</h2>
      <div className='content-wrapper' data-aos-duration='1000' data-aos-delay='100'>
        <div className='content-text' data-aos='slide-right'>
          <h3>Footbal Spain</h3>
          <p>{description}</p>
        </div>
        <div className='content-image' data-aos='slide-left'>
          <img src={image} alt='Content illustration' />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
