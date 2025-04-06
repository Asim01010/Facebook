import { BsPeople } from "react-icons/bs";
import { GiBasket } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { PiVideoBold } from "react-icons/pi";
import { RiGamepadLine } from "react-icons/ri";

export const navbar_data = [
  {
    id: 1,
    title: "Home",
    icon: <GoHome />,
    link: "/home",
  },
  {
    id: 2,
    title: "Friends",
    icon: <BsPeople />,
    link: "/friends",
  },
  {
    id: 3,
    title: "Video",
    icon: <PiVideoBold />,
    link: "/video",
  },
  {
    id: 4,
    title: "Marketplace",
    icon: <GiBasket />,
    link: "/marketplace",
  },
  {
    id: 5,
    title: "Gaming",
    icon: <RiGamepadLine />,
    link: "/gaming",
  },
];
