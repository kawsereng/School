
"use client";

import { useState } from "react";
import Logo from '../../../public/Image/Logo.webp';
import Image from "next/image";

export default function login() {
  const [role, setRole] = useState("student");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-5">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <div className="flex flex-col items-center justify-center text-center w-full mb-[20px]">
          <Image
            src={Logo}
            alt="School Logo"
            width={110}
            height={110}
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[110px] md:h-[110px] object-contain"
          />

          <div className="min-w-0 w-full">
            <h3 className="text-[15px] leading-tight font-bold text-black sm:text-[23px] md:text-[28px] lg:text-[36px]">
              সুলতানাবাদ মাধ্যমিক বিদ্যালয়
            </h3>

            <p className="mt-1 text-[11px] font-medium text-black sm:text-[14px] lg:text-[18px]">
              স্থাপিত : ১৯৭৩
            </p>

            <p className="text-[10px] font-medium text-black sm:text-[13px] lg:text-[16px]">
              পটুয়াখালী, মির্জাগঞ্জ, সুলতানাবাদ
            </p>
          </div>
        </div>

        {/* Role Selection */}
        <div className="flex bg-gray-100 rounded-xl p-1 mb-7">
          <button
            onClick={() => setRole("student")}
            className={`w-1/2 py-3 rounded-lg font-semibold transition ${
              role === "student"
                ? "bg-indigo-600 text-white shadow"
                : "text-gray-600"
            }`}
          >
            Student
          </button>

          <button
            onClick={() => setRole("teacher")}
            className={`w-1/2 py-3 rounded-lg font-semibold transition ${
              role === "teacher"
                ? "bg-indigo-600 text-white shadow"
                : "text-gray-600"
            }`}
          >
            Teacher
          </button>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          {role === "student" ? "Student Registration" : "Teacher Login"}
        </h2>

        <p className="text-sm text-gray-500 mb-6">
          {role === "student"
            ? "Create your student account"
            : "Login to your teacher account"}
        </p>

        <div className="space-y-4">
          {role === "student" && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-200 rounded-xl p-3 outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student ID
                </label>
                <input
                  type="text"
                  placeholder="Enter student ID"
                  className="w-full border border-gray-200 rounded-xl p-3 outline-none focus:border-indigo-500"
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="example@email.com"
              className="w-full border border-gray-200 rounded-xl p-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-200 rounded-xl p-3 outline-none focus:border-indigo-500"
            />
          </div>

          {role === "student" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full border border-gray-200 rounded-xl p-3 outline-none focus:border-indigo-500"
              />
            </div>
          )}

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-xl transition shadow-lg shadow-indigo-200">
            {role === "student" ? "Create Account" : "Login as Teacher"}
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-7">
          {role === "student" ? "Already have an account?" : "New teacher?"}{" "}
          <button
            onClick={() => setRole(role === "student" ? "teacher" : "student")}
            className="text-indigo-600 font-semibold"
          >
            {role === "student" ? "Teacher Login" : "Student Registration"}
          </button>
        </p>
      </div>
    </div>
  );
}
