"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import moon from "../../../public/moon.png";

export default function Drawer() {
  return (
    <div className="flex gap-y-12 flex-col p-6 py-20 text-md font-semibold leading-6 text-gray-900 bg-white items-end h-full dark:bg-black dark:text-white transition-all ease-out duration-300">
      <a href="/edu" className="flex space-x-2 items-center">
        <div>Education</div>
        <FontAwesomeIcon icon={faGraduationCap} />
      </a>
      <a href="/job" className="flex space-x-2 items-center">
        <div>Work Experience</div>
        <FontAwesomeIcon icon={faBriefcase} />
      </a>
      <a href="/project" className="flex space-x-2 items-center">
        <div>Personal Projects</div>
        <FontAwesomeIcon icon={faPenToSquare} />
      </a>
      <p>
        <a href="">Eng</a> <a href="">中</a>
      </p>

      <label
        htmlFor="light-switcher"
        className="h-8 w-16 rounded-full shadow-bright-inner dark:shadow-dark-inner bg-transparent"
      >
        <input
          type="checkbox"
          id="light-switcher"
          className="hidden peer"
          onChange={(event) => {
            const element = document.querySelector("html")!;
            if (event.currentTarget.checked && document.querySelector("html")) {
              element.classList.add("dark");
            } else {
              element.classList.remove("dark");
            }
          }}
        />
        <div className="transition-all ease-out duration-300 peer-checked:opacity-0 peer-checked:translate-x-8 translate-x-0">
          <div className="w-6 h-6 rounded-full bg-sun absolute m-1">
            <div className="w-6 h-6 rounded-full bg-sun blur-sm" />
          </div>
        </div>
        <div className="transition-all ease-out duration-300 opacity-0 peer-checked:opacity-100 peer-checked:translate-x-8 translate-x-0">
          <div className="w-8 h-8">
            <Image src={moon} alt="moon" />
          </div>
        </div>
      </label>
    </div>
  );
}
