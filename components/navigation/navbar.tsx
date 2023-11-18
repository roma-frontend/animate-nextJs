"use client";

import { useHash } from "@/hooks/use-hash";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "../sidebar/sidebar";
import { ModeToggle } from "../toggle-mode";
import { MenuOverlay } from "./_components/menu-overlay";
import NavLink, { navLinks } from "./_components/nav-links";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [show, setShow] = useState(false);
  const scrolled = useScrollTop();
  const pathname = usePathname();

  const items = [
    {
      name: "Homepage",
      href: "#Homepage",
    },
    {
      name: "Services",
      href: "#Services",
    },
    {
      name: "Portfolio",
      href: "#Portfolio",
    },
    {
      name: "Contacts",
      href: "#Contacts",
    },
  ];

  useEffect(() => {
    const cleanup = useHash(setActiveItem);

    return () => {
      cleanup();
    };
  }, []);

  return (
    <header
      className={cn(
        "flex h-[100px] fixed top-0 left-0 right-0 items-center justify-between pr-10 py-6 mx-auto bg-[white] dark:bg-[#111132] bg-opacity-90 dark:bg-opacity-90 z-[30] transition-all ease-linear",
        scrolled && "shadow-md",
        pathname === "/" ? "pl-[100px] lg:pl-[6.5vw]" : "pl-[6.5vw]"
      )}
    >
      <Sidebar />
      <nav className="flex items-center justify-center sm:justify-end gap-[1rem]">
        <div className="hidden lg:flex items-center gap-2">
          {items.map((item) => (
            <Link
              href={pathname === "/" ? `${item.href}` : `/${item.href}`}
              key={item.name}
              className={cn(
                "text-black dark:text-white capitalize text-[16px] font-medium p-[1rem] transition-all ease-linear hover:text-[#18B0B1] dark:hover:text-[#18B0B1] hover:[text-shadow:_0_0_50px_#18B0B1] dark:hover:[text-shadow:_0_0_50px_#18B0B1]",
                activeItem === `${item.href}` &&
                  "text-[#18B0B1] dark:text-[#18B0B1]"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center md:w-auto mr-0 md:mr-2">
          <ul className="flex px-4 space-x-0 md:space-x-4">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="grid cursor-pointer hover:scale-[1.05] dark:hover:scale-[1.05]"
              >
                <NavLink
                  href={link.href}
                  title={link.title}
                  src={link.src}
                  target="_blank"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-2 md:ml-0 flex items-center">
          <ModeToggle />
        </div>
      </nav>
      {show && <MenuOverlay links={navLinks} />}
    </header>
  );
};

export default Navbar;
