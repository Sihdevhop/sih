"use client";
import React, { useState, useEffect } from "react";
import ProfileCard from "@/components/ProfileCard";
import About from "@/components/About";
import NavButton from "@/components/NavButton";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
        <div className="w-full max-w-5xl grid md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <ProfileCard />
          </div>

          <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-5 gap-4 mb-6">
              <NavButton key="About" label="About" active="About" />
            </div>

            <div>
              <About />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link href="/user/profile"> Back</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
