"use client"


import React from "react";

export type NavBarProps = {
  children?: React.ReactNode;
  className?: string;
}
export const TopNavBar = ({ children, className }: NavBarProps) => {
  return (
    <header className={"h-[56px] w-full bg-white shadow-sm drop-shadow-sm flex flex-col justify-center sticky top-0" +
      " z-51 " + className}>
      {children}
    </header>
  );
};