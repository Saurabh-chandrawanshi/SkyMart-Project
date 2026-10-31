import Logo from "./Logo";
import { ShoppingCart } from "lucide-react";
import { LogOut } from "lucide-react";

import React, { useEffect, useState } from "react";

const Navbar = ({ cartItem = [], setIsOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const totalItems = cartItem.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full bg-[#0B0B0B] transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/20 shadow-lg"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1536px] items-center justify-between px-5 sm:px-10 lg:px-12 ml-20 mr-20">
        {/* Logo */}
        {/* <a href="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C6FF00] text-black">
            <i className="ri-flashlight-fill text-2xl"></i>
          </div>

          <h1 className="text-xl font-bold tracking-tight text-white">
            Sky<span className="text-[#C6FF00]">Mart</span>
          </h1>
        </a> */}
        <Logo />
        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-base font-semibold text-[#C6FF00] transition hover:text-[#C6FF00]"
          >
            Home
          </a>

          <a
            href="#products"
            className="text-base font-semibold text-gray-400 transition hover:text-white"
          >
            Shop
          </a>

          <a
            href="#about"
            className="text-base font-semibold text-gray-400 transition hover:text-white"
          >
            About
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2.5">
          {/* User Profile */}
          <button className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#191919] px-3 py-2 hover:bg-[#222222] transition">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#C6FF00] text-sm font-bold text-black">
              S
            </span>

            <span className="text-sm font-semibold text-gray-300">sau</span>
          </button>

          {/* Cart */}
          <button
            onClick={() => setIsOpen?.(true)}
            className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-white transition hover:bg-white/10"
          >
            <ShoppingCart size={22} strokeWidth={1.8} />

            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C6FF00] px-1 text-xs font-bold text-black">
                {totalItems}
              </span>
            )}
          </button>

          {/* Logout */}
          <button
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-gray-400 transition hover:bg-white/10 hover:text-white"
            title="Logout"
          >
            <LogOut size={22} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
