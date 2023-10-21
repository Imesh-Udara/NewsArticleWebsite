import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <div>
        <Image
          src="/LOGO.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </div>
    </>
  );
};

export default Logo;
