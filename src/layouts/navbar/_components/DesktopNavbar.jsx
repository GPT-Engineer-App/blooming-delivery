import { Flower } from "lucide-react";
import { NavItem } from "./NavItem";
import { UserMenu } from "./UserMenu";

export const DesktopNavbar = ({ navItems }) => (
  <nav className="hidden md:flex md:items-center md:justify-between w-full">
    <div className="flex items-center gap-5 lg:gap-6 text-lg font-medium md:text-sm">
      <NavItem
        to="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Flower className="h-6 w-6" />
        <span>Bloom Express</span>
      </NavItem>
      {navItems.map((item) => (
        <NavItem key={item.to} to={item.to}>
          {item.title}
        </NavItem>
      ))}
    </div>
    <UserMenu />
  </nav>
);