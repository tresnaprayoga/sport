import React from 'react';
import Navbar from './component/NavHader';
import HeroSection from './component/HeroSection';
import AboutSection from './component/About';
import GalleryList from './component/GaleryImage/GaleryListImage';
import WhatsAppButton from './component/WaButton';
import CarouseList from './component/carouselList/ListCarousel';
import ListCardNews from './component/cardNews/ListCardNews';
import FooterSosial from './component/Footer';
import { NavBarItems, dataHeroSection, AboutData, GALERY, Carousel, CardNews } from './data/data';
import { useState } from 'react';

function App() {
  const [DataNav, setDataNave] = useState(() => NavBarItems());
  const [DataHeroImage, setDataHeroImage] = useState(() => dataHeroSection());
  const [DataAbout, setDataAbout] = useState(() => AboutData());
  const [DataGalery, setDataGalery] = useState(() => GALERY());
  const [DataCarousel, setDataCarousel] = useState(() => Carousel());
  const [DataNews, setDataNews] = useState(() => CardNews());
  return (
    <>
      <header>
        <Navbar menuItems={DataNav} />
      </header>
      <main>
        <HeroSection slides={DataHeroImage} />
        <WhatsAppButton text='Hubungi kami' />
        <AboutSection title={DataAbout.title} description={DataAbout.description} image={DataAbout.logo} />

        <div className='home-galery'>
          <h2>GALERY</h2>
          <GalleryList images={DataGalery} />
        </div>

        <div className='carousel'>
          <h2>OUR PARTNER</h2>
          <CarouseList carousel={DataCarousel} />
        </div>

        <div>
          <ListCardNews items={DataNews} />
        </div>
      </main>

      <footer>
        <FooterSosial />
      </footer>
    </>
  );
}

export default App;
