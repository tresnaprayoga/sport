import React, { useEffect } from "react";
import Navbar from "./component/NavHader";
import HeroSection from "./component/HeroSection";
import AboutSection from "./component/About";
import GalleryList from "./component/GaleryImage/GaleryListImage";
import WhatsAppButton from "./component/WaButton";
import CarouseList from "./component/carouselList/ListCarousel";
import ListCardNews from "./component/cardNews/ListCardNews";
import FooterSosial from "./component/Footer";
import Service from "./component/service";
import AchievementList from "./component/Achviment/AchievemnetList";
import OurPartnerList from "./component/ourpartners/PartenrList";
import {
  NavBarItems,
  dataHeroSection,
  AboutData,
  GALERY,
  Carousel,
  CardNews,
  Achievements,
  Partners,
} from "./data/data";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [DataNav, setDataNave] = useState(() => NavBarItems());
  const [DataHeroImage, setDataHeroImage] = useState(() => dataHeroSection());
  const [DataAbout, setDataAbout] = useState(() => AboutData());
  const [DataGalery, setDataGalery] = useState(() => GALERY());
  const [DataCarousel, setDataCarousel] = useState(() => Carousel());
  const [DataNews, setDataNews] = useState(() => CardNews());
  const [DataAchievement, setDataAchievement] = useState(() => Achievements());
  const [DataPartner, setDataPartner] = useState(() => Partners());

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection slides={DataHeroImage} />
        <WhatsAppButton text="Hubungi kami" />

        <section id="service">
          <Service />
        </section>

        <section id="about">
          <AboutSection
            title={DataAbout.title}
            description={DataAbout.description}
            image={DataAbout.logo}
          />

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="achievement-section"
          >
            <AchievementList achievements={DataAchievement} />
          </div>
        </section>

        <section id="news">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <ListCardNews items={DataNews} />
          </div>
        </section>

        <div className="partners">
          <h2> Telah dipercaya oleh</h2>
          <CarouseList carousel={DataCarousel} />
        </div>

        <section id="gallery">
          <div className="home-galery">
            <h2>GALERY</h2>
            <GalleryList images={DataGalery} />
          </div>
        </section>
      </main>

      <footer>
        <FooterSosial />
      </footer>
    </>
  );
}

export default App;
