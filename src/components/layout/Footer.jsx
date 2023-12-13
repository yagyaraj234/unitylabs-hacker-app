import React from "react";
import { IoLogoFreebsdDevil } from "react-icons/io";
import { NavLink } from "react-router-dom";
const footerNav = [
  { name: "Demo", href: "/" },
  { name: "Pricing", href: "/" },
  { name: "Support", href: "/" },
  { name: "Privacy Policy", href: "/" },
  { name: "Terms & Conditions", href: "/" },
];
const Footer = () => {
  return (
    <footer className="relative mt-20 bg-gray-900 px-4 pt-20">
      <div className="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-sky-500 bg-white p-2 overflow-hidden">
        <IoLogoFreebsdDevil className="text-4xl" />
      </div>
      <nav
        aria-label="Footer Navigation"
        className="mx-auto mb-5 flex max-w-lg flex-col gap-10 text-center sm:flex-row  sm:justify-around"
      >
        {footerNav?.map((item, index) => (
          <NavLink
            key={item.name + index}
            to={item.href}
            className="font-medium text-white w-full"
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
      <p className="py-10 text-center text-gray-300">
        © 2022 HackerX | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
