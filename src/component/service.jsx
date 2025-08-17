import React from "react";
import { FaCamera, FaFutbol, FaVideo } from "react-icons/fa";
import "../style/service.css"; // Assuming you have a CSS file for styling

const services = [
  {
    icon: <FaCamera className="service-icon" />,
    title: "Jasa Foto Olahraga",
    description:
      "Abadikan momen terbaikmu saat berolahraga dengan layanan foto profesional.",
    link: "#",
  },
  {
    icon: <FaFutbol className="service-icon" />,
    title: "Sewa Lapangan",
    description:
      "Temukan dan sewa lapangan olahraga favoritmu dengan mudah dan cepat.",
    link: "#",
  },
  {
    icon: <FaVideo className="service-icon" />,
    title: "Jasa Video Olahraga",
    description:
      "Rekam aksi olahraga dengan kualitas video terbaik untuk dokumentasi atau promosi.",
    link: "#",
  },
];

const Service = () => (
  <section className="service-section">
    <h2 className="service-title">Layanan Kami</h2>
    <p className="service-subtitle">
      Temukan jasa yang ingin anda gunakan dengan kualitas terbaik dan
      terpercaya
    </p>
    <div className="service-list">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="service-card"
        >
          <div className="service-icon-wrapper">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <a
            href={service.link}
            className="service-link"
          ></a>
        </div>
      ))}
    </div>
  </section>
);

export default Service;
