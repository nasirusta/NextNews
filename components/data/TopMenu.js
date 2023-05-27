import {
  FaHome,
  FaVideo,
  FaCamera,
  FaMicrophoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const TopMenu = [
  {
    url: "/kategori/video-galeri",
    title: "Video Galeri",
    icon: <FaVideo size={13} />,
  },
  {
    url: "/kategori/foto-galeri",
    title: "Foto Galeri",
    icon: <FaCamera size={13} />,
  },
  {
    url: "/kategori/roportaj",
    title: "Özel Röpörtaj",
    icon: <FaMicrophoneAlt size={13} />,
  },
  {
    url: "/kategori/kunye",
    title: "Künye",
  },
  {
    url: "/bize-ulasin",
    title: "Bize Ulaşın",
    icon: <FaEnvelope size={13} />,
  },
];

export default TopMenu;
