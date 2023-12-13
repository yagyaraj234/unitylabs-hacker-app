import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoFreebsdDevil } from "react-icons/io";


const MenuItem = ({ item }) => {
  return (
    <li className="">
      <NavLink className="text-gray-600 hover:text-blue-600" to={item.href}>
        {item.name}
      </NavLink>
    </li>
  );
};

const MenuItems = [
  { name: "Pricing", href: "/" },
  { name: "Demo", href: "/" },
  { name: "Help Center", href: "/" },
];

const Navbar = () => {
  return (
    <header className="mb-2 px-4 shadow">
      <div className="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between ">
        <NavLink className="flex items-center text-2xl font-black" to="/">
          <span className="mr-2 text-3xl text-blue-600">
           <IoLogoFreebsdDevil/>
          </span>
          <span>HackerX</span>
        </NavLink>
        <input className="peer hidden" type="checkbox" id="navbar-open" />
        <label
          className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <GiHamburgerMenu />
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0"
        >
          <ul className="flex flex-col gap-y-4 sm:flex-row sm:items-center sm:gap-x-8">
            {MenuItems.map((item, index) => (
              <MenuItem item={item} key={item.name + index} />
            ))}
            <Button
              name="Get Started"
              style="bg-blue-500 text-white font-medium"
            />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
