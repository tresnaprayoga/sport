const navItems = ["HOME", "ABOUT", "GALERY", "SERVICE", "NEWS"];
const heroSectiondata = [
  {
    image: "customer-1/run.jpg",
    title: "Welcome to Our Site",
    description: "Discover amazing content here.",
  },
  {
    image: "customer-1/kiper.jpg",
    title: "Explore More",
    description: "Dive into our features.",
  },
];

const aboutData = {
  title: "ABOUT US",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex neque, volutpat eu vestibulum eu, posuere eu est. Donec quis dui purus. Aenean tempor iaculis quam, nec imperdiet arcu porta ac. Etiam eu urna vestibulum, varius turpis vel, pharetra ligula. Fusce quis dictum ex. Curabitur id iaculis felis, at sagittis arcu. Sed a nisi leo. Quisque fermentum metus vitae est ultrices, ut hendrerit felis gravida. Curabitur vel neque imperdiet turpis malesuada rutrum et vitae lorem. Praesent mollis, massa vitae egestas luctus, elit est eleifend velit, lobortis congue ipsum quam in odio. Nunc non suscipit ex. Suspendisse efficitur nisi et lorem laoreet sagittis. Donec ultrices nisi sed lectus euismod imperdiet. Duis facilisis ornare pharetraDonec sapien quam, sodales a mollis nec, fringilla id felis. Donec nec metus convallis, luctus tortor quis, ultrices nibh. Duis viverra ex sed ligula lobortis hendrerit. Nunc pellentesque tristique velit, vel sodales ex imperdiet sit amet. Fusce urna mi, congue in mi in, semper commodo eros. Proin imperdiet laoreet metus commodo lobortis. Vestibulum mollis id metus non pretiu",

  logo: "customer-1/foto.webp", // Ganti dengan URL logo Anda
};

const ImageGalry = [
  "customer-1/kiper.jpg",
  "customer-1/run.jpg",
  "customer-1/training.jpg",
  "customer-1/kiper.jpg",
  "customer-1/run.jpg",
  "customer-1/foto.webp",
];

const carouselData = [
  {
    image: "./customer-1/partners/1.jpg",
    title: "Title",
    author: "SubTitle",
    showPlayButton: true,
  },
  {
    image: "./customer-1/partners/2.png",
    title: "Title",
    author: "SubTitle",
    showPlayButton: false,
  },
  {
    image: "./customer-1/partners/3.png",
    title: "Title",
    author: "SubTitle",
    showPlayButton: false,
  },
  {
    image: "./customer-1/partners/4.png",
    title: "Title",
    author: "SubTitle",
    showPlayButton: false,
  },

  {
    image: "./customer-1/partners/5.png",
    title: "Title",
    author: "SubTitle",
    showPlayButton: false,
  },

  {
    image: "./customer-1/partners/6.png",
    title: "Title",
    author: "SubTitle",
    showPlayButton: false,
  },
];

const cardNews = [
  {
    image: "customer-1/kiper.jpg",
    date: "DECEMBER 21, 2024",
    title: "Essential Tips for Successfully Running a Marathon",
    description:
      '"Lorem ipsum" adalah teks pengganti atau teks tiruan yang biasa digunakan dalam desain grafis dan penataan huruf untuk melihat bagaimana sebuah halaman akan terlihat sebelum ada isi sebenarnya. Teks ini menampilkan teks Latin acak dan digunakan untuk memberikan gambaran tata letak, bukan untuk konten asli',
  },
  {
    image: "customer-1/foto.webp",
    date: "DECEMBER 21, 2024",
    title: "How to train for a marathon",
    description:
      '"Lorem ipsum" adalah teks pengganti atau teks tiruan yang biasa digunakan dalam desain grafis dan penataan huruf untuk melihat bagaimana sebuah halaman akan terlihat sebelum ada isi sebenarnya. Teks ini menampilkan teks Latin acak dan digunakan untuk memberikan gambaran tata letak, bukan untuk konten asli',
  },
  {
    image: "customer-1/training.jpg",
    date: "DECEMBER 21, 2024",
    title: "understand how to practice soccer well",
    description:
      '"Lorem ipsum" adalah teks pengganti atau teks tiruan yang biasa digunakan dalam desain grafis dan penataan huruf untuk melihat bagaimana sebuah halaman akan terlihat sebelum ada isi sebenarnya. Teks ini menampilkan teks Latin acak dan digunakan untuk memberikan gambaran tata letak, bukan untuk konten asli',
  },
];

const achievements = [
  {
    icon: "FaUsers",
    value: "100",
    label: "Client",
    desc: "Telah dipercaya oleh lebih dari 100 client.",
  },
  {
    icon: "FaCalendarAlt",
    value: "80",
    label: "Event",
    desc: "Berpengalaman menangani berbagai Dokumentasi event olahraga dan Pesta.",
  },
  {
    icon: "FaTrophy",
    value: "15",
    label: "Prestasi",
    desc: "Mendukung lebih dari 15 prestasi olahraga.",
  },
];

const partners = [
  { name: "tech Company", logo: "./customer-1/partners/1.jpg" },
  { name: "Sport", logo: "./customer-1/partners/6.png" },
  { name: "puma", logo: "./customer-1/partners/3.png" },
  { name: "Adidas", logo: "./customer-1/partners/4.png" },
  { name: "EA sports", logo: "./customer-1/partners/5.png" },
  { name: "Golf Sport", logo: "./customer-1/partners/2.png" },
];

function NavBarItems() {
  return navItems;
}

function dataHeroSection() {
  return heroSectiondata;
}

function AboutData() {
  return aboutData;
}

function GALERY() {
  return ImageGalry;
}

function Carousel() {
  return carouselData;
}

function CardNews() {
  return cardNews;
}

function Achievements() {
  return achievements;
}

function Partners() {
  return partners;
}

export {
  NavBarItems,
  dataHeroSection,
  AboutData,
  GALERY,
  Carousel,
  CardNews,
  Achievements,
  Partners,
};
