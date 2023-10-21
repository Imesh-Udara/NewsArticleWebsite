import React from 'react';
import Link from "next/link";
import Logo from "./Logo";
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <>
        <div className="w-full h-20 border bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-black">
              <li>
                <Link className='text-red-600 ' href="/english">
                  <p >English</p>
                </Link>
              </li>
              <li>
                <Link href="/tamil">
                <p>தமிழ்</p>
                </Link>
              </li>
              <li>
                <Link href="/sinhala">
                <p>සිංහල</p>
                </Link>
              </li>         
            </ul>
            <div>
                <SearchBar/>
            </div>
            
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar