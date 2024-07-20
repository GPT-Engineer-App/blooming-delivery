import { Home, Info, PhoneCall, Flower } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About Us",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <div>About Us Page</div>,
  },
  {
    title: "Services",
    to: "/services",
    icon: <Flower className="h-4 w-4" />,
    page: <div>Services Page</div>,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <PhoneCall className="h-4 w-4" />,
    page: <div>Contact Page</div>,
  },
];