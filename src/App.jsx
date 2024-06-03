import React from "react";
import BaseLogo from "./assets/images/base-logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const App = () => {
  return (
    <div className="flex items-center justify-center w-[100%] pt-[20px]">
      <form className="w-[364px] py-6 px-4 bg-[#fff] rounded-xl">
        <div className="w-[312px] items-center flex flex-col gap-3 mb-5">
          <img src={BaseLogo} alt="base-logo" />
          <div className="flex flex-col items-center gap-1">
            <h1 className="login-title font-inter-600 text-[20px]">
              Welcome back
            </h1>
            <p className="login-subtitle text-center text-[#6B7280] font-inter-400">
              Sign in to access to your dashboard, settings and projects
            </p>
          </div>
        </div>
        <div className="connect-btns flex flex-col gap-2">
          <button className="facebook-btn flex w-[100%] items-center justify-center gap-1 border border-[#D1D5DB] rounded-[128px] py-2 hover:bg-[#4267B2] hover:text-white">
            <FaFacebookF className="facebook-logo text-[#4267B2]" />
            <span className="font-inter-600">Connect with Facebook</span>
          </button>
          <button className="twitter-btn flex w-[100%] items-center justify-center gap-1 border border-[#D1D5DB] rounded-[128px] py-2 hover:bg-[#1DA1F2] hover:text-white">
            <FaTwitter className="twitter-logo text-[#1DA1F2]" />
            <span className="font-inter-600">Connect with Twitter</span>
          </button>
        </div>
        <p className="or-signin text-center font-inter-400 text-[#6B7280] my-4 flex items-center  justify-between">
          or sign in with email
        </p>
        <div className="flex flex-col gap-2 mb-4">
          <label for="email" className="font-inter-600">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="outline-none border border-[#D1D5DB] rounded-[128px] px-4 py-2 focus:ring-4 focus:ring-[#E6F8FB] focus:border-[#B9EAF3]"
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label for="password" className="font-inter-600">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="outline-none border border-[#D1D5DB] rounded-[128px] px-4 py-2 focus:ring-4 focus:ring-[#E6F8FB] focus:border-[#B9EAF3]"
          />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <label className="font-inter-400 text-[#111827]">
            Remember for 30 days
          </label>
        </div>
        <button className="flex items-center justify-center gap-[10px] bg-[#06B6D4] text-white rounded-[128px] py-2 w-[100%] mt-4 mb-5 hover:bg-[#61def4]">
          Sign in
          <span>
            <FaArrowRight />
          </span>
        </button>
        <div className="text-center">
          <p className="font-inter-400">
            No account?&nbsp;
            <span className="text-[#06B6D4] font-inter-400 cursor-pointer">
              Create an account
            </span>
          </p>
        </div>
      </form>
    </div>
  );
  1;
};

export default App;
