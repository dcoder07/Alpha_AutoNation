"use client";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import React from "react";
import { SearchManufacturerProps } from "@/types";
const SearchManfacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <Image
              src='/car-logo-v.svg'
              width={20}
              height={20}
              className='ml-4'
              alt='car logo'
            />
          </Combobox.Button>
          <Combobox.Input
          className="search-manufacturer__input"
          />
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManfacturer;
