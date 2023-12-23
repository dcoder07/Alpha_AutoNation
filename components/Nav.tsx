import React from "react";
import Image from "next/image";
import { Button } from "@/components";

const Nav = () => {
  return (
    <section className='w-full mx-auto  mt-10'>
      <nav className='flex justify-between items-center sm:px-16 px-1 py-4'>
        <Image
          src='/car-logo.png'
          alt='logo-image'
          width={150}
          height={150}
          className='object-contain'
        />
        <Button
          title='Sign in'
          containerStyles='bg-primary-blue rounded-full text-white mr-2'
        />
      </nav>
    </section>
  );
};

export default Nav;
