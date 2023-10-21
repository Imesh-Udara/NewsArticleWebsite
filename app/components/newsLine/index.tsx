import Link from 'next/link'
import React from 'react'
import {BiHomeCircle} from 'react-icons/bi'

const BottomNav = () => {
  return (
    <>
        <div className="container mx-auto px-2  h-20   top-0 mt-4 ">
        <div className="container mx-auto px-4 h-full bg-rose-500 rounded ">
          <div className="flex justify-between items-center h-full ">
            <Link href={"/"}><BiHomeCircle size="25" color="white"/></Link>
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
            </ul>
            
            
          </div>
        </div>
      </div>
    </>
  )
}

export default BottomNav