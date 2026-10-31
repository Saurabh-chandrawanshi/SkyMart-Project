
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/70 bg-[#0B0B0B] px-5 py-10">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2">

        {/* Logo */}
        <h2 className="text-2xl font-medium tracking-tight text-[#C6FF00]">
          SkyMart
        </h2>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500 sm:text-base">
          © 2025 SkyMart • Built with React + Redux + TanStack Query
        </p>

      </div>

    </footer>
  );
};

export default Footer;
