import React from "react";
import Image from "next/image";
import {BsFacebook} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {FaTwitter} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import Link from "next/link";

const Footer = () => {
  return (
    <>
    <div className="bg-black p-16 mt-16 ">
      <div className="container grid grid-cols-1 gap-4 text-center  bg-black text-white md:grid-cols-5 md:text-left">
        <div className="md:col-span-2">
          <div className="flex justify-center md:justify-start md:mb-3">
            <Image 
              src="/LOGO.png"
              width={100}
              height={100}
              alt="Picture of the author"
              
            />
          </div >
          <p className="text-white leading-8">
            The News Entertainment (Pvt) Ltd<br></br>
            320, T.B. Jayah Mawatha,<br></br> Colombo 10.
          </p>
        </div>
        <div>
          <ul>
            <li className="font-bold text-red-400 leading-9">Company</li>
            <li className="leading-9">About Us</li>
            <li className="leading-9">Contact Us</li>
            <li className="leading-9">History</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-bold text-red-400 leading-9">Legal</li>
            <li className="leading-9">Term and Use</li>
            <li className="leading-9">Privacy and Policy</li>
            <li className="leading-9">Licences</li>
          </ul>
        </div>
        <div className="">
          
            <p className="mb-2 font-bold text-red-400 leading-9">Social Media</p>
            <ul className="flex gap-x-6  justify-center md:justify-start">
                <Link href={"/"}><li className=""><BsFacebook size="30" /></li></Link>
                <Link href={"/"}><li><BsYoutube size="32"/></li></Link>
                <Link href={"/"}><li><FaTwitter size="30"/></li></Link>
                <Link href={"/"}><li><BsInstagram size="30"/></li></Link>       
            </ul>
          
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
