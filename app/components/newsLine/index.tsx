import Link from 'next/link'
import React from 'react'
import {BiHomeCircle} from 'react-icons/bi'

const BottomNav = () => {
  return (
    <>
        <div className="container mx-auto px-2  h-20   top-0 mt-2 ">
        <div className="container  px-4 h-12 bg-rose-500 rounded md:h-14">
          <div className="flex justify-between items-center h-full ">
            <Link href={"/"}><BiHomeCircle size="24" color="white"/></Link>
            <ul className="hidden md:flex gap-x-6 text-white px-2">
                
              <li>
                <Link href="/hotnews">
                  <p>Hot News</p>
                </Link>
              </li>
              <li>
                <Link href="/sports">
                <p>Sports</p>
                </Link>
              </li>
              <li>
                <Link href="/bizs">
                <p>Biz</p>
                </Link>
              </li>
              <li>
                <Link href="/entertainment">
                <p>Entertainment</p>
                </Link>
              </li>
              <li>
                <Link href="/cinema">
                <p>Cinema</p>
                </Link>
              </li>
              <li>
                <Link href="/health">
                <p>Health</p>
                </Link>
              </li>
              <li>
                <Link href="/america">
                <p>America</p>
                </Link>
              </li>
              <li>
                <Link href="/asia">
                  <p>Asia</p>
                </Link>
              </li>
              <li>
                <Link href="/asia">
                  <p>Business</p>
                </Link>
              </li>  
              <li>
                <Link href="/asia">
                  <p>U.S</p>
                </Link>
              </li>  
              <li>
                <Link href="/asia">
                  <p>Technology</p>
                </Link>
              </li>                              
            </ul>                       
          </div>
        </div>
      </div>
    </>
  )
}

export default BottomNav