import React from "react";
import { Zap } from "lucide-react";
const Logo = () => {
  return (
    <div>
      <div className=" flex items-center gap-2">
        <div className="logo-icon bg-[#C6FF00]  p-2 rounded-xl">
          {" "}
          <Zap size={20} color="black" fill="black" />
        </div>
        <h1 className="text-white text-2xl font-bold">
          {" "}
          Sky<span className=" text-[#C6FF00]">Mart</span>
        </h1>
      </div>
    </div>
  );
};

export default Logo;
