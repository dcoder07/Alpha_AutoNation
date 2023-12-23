import React from "react";
import { footerLinks } from "@/constants";
import Link from "next/link";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <div className='w-max-screen'>
        <div className='flex max-md:grid max-md:grid-cols-2 mx-5 justify-center my-16 gap-32 max-md:gap-8'>
          {footerLinks.map((ftlink) => (
            <div key={ftlink.title}>
              <h3 className='font-bold text-2xl max-sm:text-lg'>
                {ftlink.title}
              </h3>
              {ftlink.links.map((item) => (
                <span key={item.title} className='flex flex-col font-semibold text-lg max-sm:text-sm text-slate-500 my-2'>
                  <Link href={item.url}>{item.title}</Link>
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className='text-slate-500 flex max-md:flex-col justify-between m-10 max-sm:mx-auto max-sm:px-4 px-16'>
          <div>AlphaAutonation {date}</div>
          <div>All rights are reserverd ©</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
