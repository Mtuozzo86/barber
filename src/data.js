import haircut from "./img/haircut.jpeg";
import beard from "./img/beard.jpg";
import haircutbeard from "./img/haircutbeard.jpg";
import { RiScissorsFill } from "react-icons/ri";
import { GiRazor, GiBeard } from "react-icons/gi";
 
export const servicesOffered = [
  {
    serviceName: "Haircut",
    time: "60 min",
    icon: <RiScissorsFill color="black" size={40} />,
    photo: haircut,
  },
  {
    serviceName: "Beard",
    time: "30 min",
    icon: <GiBeard color="black" size={40} />,
    photo: beard,
  },
  {
    serviceName: "Haircut + Beard",
    time: "75 min",
    icon: <GiRazor color="black" size={40}/>,
    photo: haircutbeard,
  },
];
