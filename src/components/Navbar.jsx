import { useState } from "react";
import logo from "../assets/Logo.png";
import {
  LayoutDashboard,
  Clock3,
  BarChart2,
  ArrowRightLeft,
  HelpCircleIcon,
} from "lucide-react";
import RightArrow from "../assets/icons/rightArrow.svg";
import { motion } from "framer-motion";
const navLinks = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Activity",
    icon: Clock3,
  },
  {
    name: "Analytics",
    icon: BarChart2,
  },
  {
    name: "Transactions",
    icon: ArrowRightLeft,
  },
  {
    name: "Help Center",
    icon: HelpCircleIcon,
  },
];
const variants = {
  expanded: { width: "20%" },
  nonExpanded: { width: "5%" },
};
const Navbar = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      className={
        "py-12 flex flex-col border border-r-1 w-1/5 h-screen relative " +
        (isExpanded ? "px-10" : "px-4")
      }
    >
      <div className="logo-div flex space-x-3 items-center">
        <img src={logo} alt="logo" />
        <span className={isExpanded ? "block" : "hidden"}>Money Tracker</span>
      </div>
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-5 h-5 flex items-center justify-center bg-[#FF8CBC] rounded-full absolute -right-[10.5px] top-15"
      >
        <img src={RightArrow} alt="arrow" className="w-[6px]" />
      </div>
      <div className="mt-10 flex flex-col space-y-8">
        {navLinks.map((item, index) => (
          <div
            key={index}
            className={
              "flex space-x-3 p-2 rounded cursor-pointer " +
              (activeNavIndex === index
                ? "bg-[#FF8CBC] text-white text font-semibold"
                : "")
            }
            onClick={() => setActiveNavIndex(index)}
          >
            <item.icon />
            <span className={isExpanded ? "block" : "hidden"}>
              {item?.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Navbar;
