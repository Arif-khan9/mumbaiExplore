"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const pathname = usePathname();

  const handleclick = () => {
    setMenu(!menu);
  };

  return (
    <>
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">

          
          <Link href="/" className="text-2xl font-bold text-blue-600">
            <div className="flex items-center gap-1">
              <img
                className="h-8 w-10 object-contain"
                src="/logo.png"
                alt="logo image"
              />

              Mumbai
              <span className="text-slate-900">Explorer</span>
            </div>
          </Link>

          
          <div className="hidden items-center gap-8 md:flex">

            <Link
              href="/"
              className={
                pathname === "/"
                  ? "text-blue-500 underline"
                  : "text-gray-500 hover:text-blue-500"
              }
            >
              Home
            </Link>

            <Link
              href="/places"
              className={
                pathname === "/places"
                  ? "text-blue-500 underline"
                  : "text-gray-500 hover:text-blue-500"
              }
            >
              Places
            </Link>

            <Link
              href="/search"
              className={
                pathname === "/search"
                  ? "text-blue-500 underline"
                  : "text-gray-500 hover:text-blue-500"
              }
            >
              Search
            </Link>

            <Link
              href="/about"
              className={
                pathname === "/about"
                  ? "text-blue-500 underline"
                  : "text-gray-500 hover:text-blue-500"
              }
            >
              About
            </Link>

            <Link
              href="/article"
              className={
                pathname === "/article"
                  ? "text-blue-500 underline"
                  : "text-gray-500 hover:text-blue-500"
              }
            >
              Articles
            </Link>
          </div>

         
          <button
            className="rounded-lg border border-slate-200 px-3 py-2 text-xl md:hidden"
            onClick={handleclick}
          >
            ☰
          </button>
        </div>

       
        {menu && ( <div className="border-t border-slate-700 bg-slate-900 px-5 py-4 md:hidden"> <div className="flex flex-col gap-4"> <Link href="/" onClick={() => setMenu(false)} className="text-white hover:text-blue-400" > Home </Link> <Link href="/places" onClick={() => setMenu(false)} className="text-white hover:text-blue-400" > Places </Link> <Link href="/search" onClick={() => setMenu(false)} className="text-white hover:text-blue-400" > Search </Link> <Link href="/about" onClick={() => setMenu(false)} className="text-white hover:text-blue-400" > About </Link> <Link href="/article" onClick={() => setMenu(false)} className="text-white hover:text-blue-400" > Articles </Link> </div> </div> )}
      </nav>
    </>
  );
};

export default Navbar;