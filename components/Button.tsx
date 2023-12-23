"use client";
import React from "react";
import Image from "next/image";
import { ButtonProps } from "@/types";
const Button = ({ title, containerStyles, handleClick, type }: ButtonProps) => {
  return (
    <button
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      type={type}
      onClick={handleClick}
    >
      <span className='flex-1'>{title}</span>
    </button>
  );
};

export default Button;
