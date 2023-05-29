"use client";
import { useState } from "react";
import { Position, SideSheet } from "evergreen-ui";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import TopMenu from "../data/TopMenu";
import NavbarItems from "../data/NavbarItems";

const MobileMenu = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="mr-7 lg:mr-10">
      <button
        type="button"
        onClick={() => setIsShown(true)}
        className="flex flex-col justify-end"
      >
        <GiHamburgerMenu size={22} />
      </button>
      <SideSheet
        width={230}
        position={Position.LEFT}
        isShown={isShown}
        onCloseComplete={() => setIsShown(false)}
      >
        <div className="w-full h-full flex flex-col items-center gap-4 py-6 px-5 font-roboto">
          <div className="w-full block">
            <nav className="list-none w-full flex flex-col divide-y divide-gray-300">
              {NavbarItems.map((row, i) => (
                <li key={i} lang="tr" className="w-full flex items-center py-1">
                  <Link
                    href={row.url}
                    replace
                    className="w-full flex items-center text-[15px]
                    transition-all font-semibold text-gray-600
                    py-1 px-2 border-l-4 border-[#bb0000]
                    hover:text-opacity-60 hover:border-opacity-50"
                  >
                    {row.title}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
          <div className="w-full block">
            <ul className="list-none w-full flex flex-col items-center gap-2">
              {TopMenu.map((menu, i) => (
                <li key={i} className="w-full flex items-center">
                  <Link
                    href={menu.url}
                    replace
                    className="w-full flex items-center gap-3 transition-all
                    text-[15px] text-gray-900 hover:text-opacity-60"
                  >
                    {menu.icon}
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SideSheet>
    </div>
  );
};

export default MobileMenu;
