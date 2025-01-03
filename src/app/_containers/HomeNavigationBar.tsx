import { TopNavBar } from "@/app/_components/TopNavBar";
import React from "react";
import { Bell, CircleHelp, Menu } from "lucide-react";
import AirtableLogo from "@/app/_components/AirtableLogo";
import { HomeSearchBar } from "@/app/_containers/HomeSearchBar";
import Image from "next/image";

type HomeNavigationBarProps = {
  children?: React.ReactNode;
  className?: string;
  AccountAvatarURL?: string;
}
export default function HomeNavigationBar(props: HomeNavigationBarProps) {
  return (
    <TopNavBar className={props.className + " flex flex-col justify-center"}>
      <nav className="flex items-center w-full pl-1 pr-2 justify-between">
        <div className="flex min-w-[170px] justify-center flex-row">
          <div className={"pl-1 pr-2 focus-visible:rounded cursor-pointer"}>
            <Menu width={20} height={20} color={"gray"}/>
          </div>

          <a href={"/"} className={"pl-3"}>
            <AirtableLogo/>
          </a>
          <div className="flex-auto"></div>
        </div>
        <HomeSearchBar />
        <div className={"flex flex-row items-center justify-end"}>
        {/*  Buttons */}
          <div className={"flex-auto"}></div>
          <div className={"flex-row items-center justify-center flex"}>
            <CircleHelp/>
            <Bell/>
          </div>
        {/*  Account*/}
          {
            props.AccountAvatarURL ?
               <Image src={props.AccountAvatarURL} alt={"User Avatar"} width={30} height={30} className={"rounded-full"}/>
            : <p>?</p>
          }

        </div>
      </nav>
    </TopNavBar>
  )
}