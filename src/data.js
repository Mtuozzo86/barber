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
    icon: <GiRazor color="black" size={40} />,
    photo: haircutbeard,
  },
];

export const reviews = [
  {
    rating: 5,
    name: "Vin",
    date: "11.16.2022",
    body: "Another great haircut with Jesse and as relaxing as always!",
  },
  {
    rating: 4,
    name: "James Conway",
    date: "11.05.2022",
    body: "If you like getting haircuts Jesse does haircuts !!!!!!",
  },
  {
    rating: 5,
    name: "Mike",
    date: "11.22.2022",
    body: "Will soon return",
  },
  {
    rating: 5,
    name: "Aaron",
    date: "11.8.2022",
    body: "I'll go nowhere else",
  },
  {
    rating: 4,
    name: "Chris",
    date: "11.1.2022",
    body: "Great job, highly recommended",
  },
  {
    rating: 5,
    name: "Danny",
    date: "10.20.2022",
    body: "I feel as if as soon as I got up from the chair…. A thunderous chariot fit for a king swept me away to my car as my freshly cut hair flowed in the wind.",
  },
  {
    rating: 5,
    name: "John",
    date: "10.23.2022",
    body: "Very professional",
  },
  {
    rating: 5,
    name: "Bill",
    date: "11.15.2022",
    body: "Awesome job, awesome guy",
  },
];
