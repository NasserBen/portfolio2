"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  const currentPath = usePathname();

  return (
    <nav className="mb-10">
      <div className="flex justify-between text-md text-gray-400">
        <p
          className={`mr-2 font-bold text-black ${
            currentPath === "/" ? "underline" : ""
          }`}
        >
          <Link href="/">Nasser Ben</Link>
        </p>

        <div className="flex">
          <p
            className={`mx-2 hover:text-gray-700 cursor-pointer ${
              currentPath === "/about" ? "underline" : ""
            }`}
          >
            <Link href="/about">About</Link>
          </p>
          <p
            className={`mx-2 hover:text-gray-700 cursor-pointer ${
              currentPath === "/projects" ? "underline" : ""
            }`}
          >
            <Link href="/projects">Projects</Link>
          </p>
          <p
            className={`mx-2 hover:text-gray-700 cursor-pointer ${
              currentPath === "/skills" ? "underline" : ""
            }`}
          >
            <Link href="/skills">Skills</Link>
          </p>
          <p
            className={`mx-2 hover:text-gray-700 cursor-pointer ${
              currentPath === "/contact" ? "underline" : ""
            }`}
          >
            <Link href="/contact">Contact</Link>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
