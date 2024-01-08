"use client";

import React from "react";
import Drawer from "./drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6">
        <div className="h-8 flex items-center">
          <a
            href="#"
            className="text-lg font-bold leading-6 text-gray-900 dark:text-white transition-all ease-out duration-300"
          >
            Richard CHIU
          </a>
        </div>
        <nav className="hidden md:flex space-x-5">
          <a href="/edu" className="group">
            <div>Education</div>
            <div className="h-1 bg-black w-0 group-hover:w-full transition-all ease-out duration-300" />
          </a>
          <a href="/job" className="group">
            <div>Work Experience</div>
            <div className="h-1 bg-black w-0 group-hover:w-full transition-all ease-out duration-300" />
          </a>
          <a href="/project" className="group">
            <div>Personal Projects</div>
            <div className="h-1 bg-black w-0 group-hover:w-full transition-all ease-out duration-300" />
          </a>
        </nav>
        <div className="block md:hidden">
          <button className="group">
            <div className="dark:text-white">
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="fixed top-0 right-0 h-full shadow-lg dark:shadow-dark-lg w-2/3 transition-all duration-500 transform translate-x-full group-focus-within:translate-x-0">
              <Drawer />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}
