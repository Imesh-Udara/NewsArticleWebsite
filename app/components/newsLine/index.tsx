import Link from 'next/link'
import React from 'react'
import {BiHomeCircle} from 'react-icons/bi'

const BottomNav = () => {
  const links = [
    {label: 'Hot News', href: '/hotnews'},
    {label: 'Sports', href: '/sports'},
    {label: 'Biz', href: '/biz'},
    {label: 'Entertainment', href: '/entertainment'},
    {label: 'Cinema', href: '/cinema'},
    {label: 'Health', href: '/health'},
    {label: 'America', href: '/america'},
    {label: 'Asia', href: '/asia'},
    {label: 'Business', href: '/business'},
    {label: 'U.S', href: '/u.s'},
    {label: 'Technology', href: '/technology'},
    
  ]
  return (
    <>
    <nav>
        <div className="container mx-auto px-2  h-20   top-0 mt-2 ">
        <div className="container  px-4 h-12 bg-rose-500 rounded md:h-14">
          <div className="flex justify-between items-center h-full ">
            <Link href={"/"}><BiHomeCircle size="24" color="white"/></Link>
            <ul className="hidden md:flex gap-x-6 text-white px-2">
              {links.map(link =><Link 
              key={link.href} 
              className='text-white hover:text-zinc-800 transition-colors' 
              href={link.href}>{link.label}</Link>)}                             
            </ul>                       
          </div>
        </div>
      </div>
      </nav>
    </>
  )
}

export default BottomNav