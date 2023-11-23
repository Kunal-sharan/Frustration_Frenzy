"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const {user,isLoaded}=useUser();
  return (
    <header>
      <nav
        className="flex items-center justify-between p-4 lg:px-6 h-20 border border-t-0 border-l-0 border-r-0 border-b-black bg-white-green"
        aria-label="Global"
      >
        <div className="flex lb:flex-1">
          <a href="/" className="-m-1.5 p-1.5 text-black text-2xl font-black  ">
            FRUSTRATION FRENZY
          </a>
        </div>
        <div>
          <Link href="/" className="text-dark-green hover:text-sec-red">
            Home
          </Link>
        </div>
        <div>
          <Link href="/rageroom" className="text-dark-green hover:text-sec-red">
            Rageroom
          </Link>
        </div>
        <div>
          <Link
            href="/sessions"
            className="text-dark-green hover:text-sec-red "
          >
            Sessions
          </Link>
        </div>
        <div>
          <Link href="/contacts" className="text-dark-green hover:text-sec-red">
            Contacts
          </Link>
        </div>
        <div>
          <Link
            href="/aboutus"
            className="text-dark-green hover:text-sec-red focus:text-sec-red"
          >
            About us
          </Link>
        </div>
        {isLoaded && user && (
          <>
            <Link
              href="/sessions"
              className=" text-lg px-2 font-bold text-sec-red hover:bg-sec-red hover:text-white-green hover:border-b-black text-center"
            >
              Available Doctors
            </Link>
            <UserButton afterSignOutUrl="/"/>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
