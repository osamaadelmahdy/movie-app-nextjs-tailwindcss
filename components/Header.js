import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl my-10">
        <HeaderItem title="home" Icon={HomeIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <div className="flex items-center  mx-7 hover:animate-pulse cursor-pointer">
        <Image
          src="/pop.png"
          width="70"
          height="100"
          className="object-contain"
        />
        <h1 className="font-bold text-6xl text-[#FDD69E]">EgyBest</h1>
      </div>
    </div>
  );
}

export default Header;
