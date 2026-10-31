import React, { useState } from "react";
import { UserRound, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

const Register = ({ setisOpen}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <form className="bg-[#111111] w-full max-w-[460px] p-9 rounded-[26px] border border-[#292929] shadow-2xl flex flex-col gap-4 text-white">
      <h1 className="text-3xl font-bold">Create account</h1>

      <p className="text-[#777777] -mt-3 mb-4">
        Join SkyMart and start Shopping
      </p>

      {/* Full Name */}
      <div className="relative">
        <UserRound
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666]"
        />
        <input
          type="text"
          placeholder="Full name"
          className="bg-[#1E1E1E] border border-[#333333] rounded-2xl py-3 pl-12 pr-4 w-full outline-none focus:border-[#C6FF00]"
        />
      </div>

      {/* Email */}
      <div className="relative">
        <Mail
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666]"
        />
        <input
          type="email"
          placeholder="Email address"
          className="bg-[#1E1E1E] border border-[#333333] rounded-2xl py-3 pl-12 pr-4 w-full outline-none focus:border-[#C6FF00]"
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
          placeholder="Password (min 6 chars)"
          className="bg-[#1E1E1E] border border-[#333333] rounded-2xl py-3 pl-12 pr-12 w-full outline-none focus:border-[#C6FF00]"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666666]"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {/* Confirm Password */}
      <div className="relative">
        <Lock
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666]"
        />

        <input
          type={showConfirm ? "text" : "password"}
          placeholder="Confirm password"
          className="bg-[#1E1E1E] border border-[#333333] rounded-2xl py-3 pl-12 pr-12 w-full outline-none focus:border-[#C6FF00]"
        />

        <button
          type="button"
          onClick={() => setShowConfirm(!showConfirm)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666666]"
        >
          {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-[#C6FF00] text-black font-bold py-4 rounded-2xl w-full flex items-center justify-center gap-3 hover:bg-[#b5ed00] transition"
      >
        Create Account
        <ArrowRight size={20} />
      </button>

      <h3 className="text-center text-sm text-[#777777] mt-3">
        Already have an account?
        <span onClick={() => setisOpen(false)} className="text-[#C6FF00] font-semibold cursor-pointer ml-1">
          Sign in
        </span>
      </h3>
    </form>
  );
};

export default Register;
