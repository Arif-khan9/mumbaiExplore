

"use client";
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';


const Navbar = () => {

  const pathname = usePathname()

  


  return (
    <>
     <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">

          <Link href="/" className="text-2xl font-bold text-blue-600">

          <div className='flex items-center gap-1'>
             <span>< img className='<h-5></h-5> w-10' src="/logo.png" alt="logo image" /></span> Mumbai<span className="text-slate-900">Explorer</span>
          </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className={pathname==='/' ? "text-blue-600 " : "text-slate-600 hover:text-blue-500 "}
            >
              Home
            </Link>

            <Link
              href="/places"
              className={`${pathname ==="/places" ? "text-blue-500 underline" : "text-gray-500 hover:text-blue-500"}`}
            >
              Places
            </Link>

            <Link
              href="/search"
               className={`${pathname ==="/search" ? "text-blue-500 underline" : "text-gray-500 hover:text-blue-500"}`}
            >
              Search
            </Link>

            <Link
              href="/about"
             className={`${pathname ==="/about" ? "text-blue-500 underline" : "text-gray-500 hover:text-blue-500"}`}
            >
              About
            </Link>

             <Link
              href="/article"
               className={`${pathname ==="/article" ? "text-blue-500 underline" : "text-gray-500 hover:text-blue-500"}`}
            >
              Articles
            </Link>
          </div>

          <button className="rounded-lg border border-slate-200 px-3 py-2 text-xl md:hidden">
            ☰
          </button>
        </div>
      </nav>

    </>
  )
}

export default Navbar
