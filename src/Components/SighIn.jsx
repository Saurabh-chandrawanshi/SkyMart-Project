
import React, { useState } from "react";
import {
  Zap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

const SignIn = ({setisOpen}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col md:flex-row">

      {/* LEFT SECTION */}
      <div className="relative w-full md:w-1/2 min-h-[550px] md:min-h-screen border-b md:border-b-0 md:border-r border-[#333333] p-8 md:p-[53px] flex flex-col justify-between overflow-hidden">

        {/* Background Glow */}
        <div className="absolute -left-20 top-40 w-80 h-80 bg-[#C6FF00]/10 blur-[120px] rounded-full"></div>

        {/* Logo */}
        <div className="relative flex items-center gap-3">
          <div className="bg-[#C6FF00] p-3 rounded-xl">
            <Zap size={23} fill="black" color="black" />
          </div>

          <h1 className="text-2xl font-bold">
            Sky<span className="text-[#C6FF00]">Mart</span>
          </h1>
        </div>

        {/* Hero Content */}
        <div className="relative my-auto py-16 md:py-0 md:mt-20">

          <p className="text-[#C6FF00] font-semibold tracking-wider mb-5">
            WELCOME BACK
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Shop the future.
            <br />
            <span className="text-[#C6FF00]">Today.</span>
          </h1>

          <p className="text-[#777777] text-lg mt-8 max-w-[430px] leading-relaxed">
            Thousands of products, lightning-fast delivery,
            and prices that make your wallet happy.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-3 mt-14">

            <div className="border border-[#777777] rounded-2xl p-4 text-center">
              <h2 className="text-[#C6FF00] text-xl md:text-2xl font-bold">
                20K+
              </h2>
              <p className="text-[#777777] text-sm mt-1">
                Products
              </p>
            </div>

            <div className="border border-[#777777] rounded-2xl p-4 text-center">
              <h2 className="text-[#C6FF00] text-xl md:text-2xl font-bold">
                50K+
              </h2>
              <p className="text-[#777777] text-sm mt-1">
                Users
              </p>
            </div>

            <div className="border border-[#777777] rounded-2xl p-4 text-center">
              <h2 className="text-[#C6FF00] text-xl md:text-2xl font-bold">
                4.9★
              </h2>
              <p className="text-[#777777] text-sm mt-1">
                Rating
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-1/2 min-h-[600px] md:min-h-screen flex items-center justify-center p-6 md:p-12">

        {/* Login Card */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Sign in button clicked!");
          }}
          className="bg-[#111111] border border-[#292929] w-full max-w-[500px] p-8 md:p-9 rounded-[26px] shadow-2xl flex flex-col gap-4"
        >

          <h1 className="text-3xl font-bold">
            Sign in
          </h1>

          <p className="text-[#777777] -mt-2 mb-5">
            Enter your credentials to continue
          </p>

          {/* Email */}
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666]"
            />

            <input
              type="email"
              placeholder="Email address"
              required
              className="bg-[#1E1E1E] border border-[#333333] rounded-2xl py-3.5 pl-11 pr-4 w-full outline-none focus:border-[#C6FF00] transition"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666]"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="bg-[#1E1E1E] border border-[#333333] rounded-2xl py-3.5 pl-11 pr-12 w-full outline-none focus:border-[#C6FF00] transition"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666666] hover:text-white"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="bg-[#C6FF00] text-black font-bold py-4 rounded-2xl w-full flex items-center justify-center gap-3 hover:bg-[#b5ed00] transition mt-1"
          >
            Sign in
            <ArrowRight size={20} />
          </button>

          {/* Register Link */}
          <p className="text-center text-[#777777] mt-3 text-sm">
            Don't have an account?
            <span onClick={() => setisOpen(true)} className="text-[#C6FF00] font-semibold ml-1 cursor-pointer hover:underline">
              Create one
            </span>
          </p>

        </form>
      </div>
    </div>
  );
};

export default SignIn;
