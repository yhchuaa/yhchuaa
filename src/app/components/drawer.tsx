import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faGraduationCap,
  faBriefcase,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

export default function Drawer() {
  const [language, setLanguage] = useState<string>("en");

  return (
    <div className="flex gap-y-12 flex-col p-6 py-20 text-md font-semibold leading-6 text-gray-900 bg-white items-end border-l-2 h-full">
      <a href="#" className="flex space-x-2 items-center">
        <div>Educational Qualifications</div>
        <FontAwesomeIcon icon={faGraduationCap} />
      </a>
      <a href="#" className="flex space-x-2 items-center">
        <div>Work Experience</div>
        <FontAwesomeIcon icon={faBriefcase} />
      </a>
      <a href="#" className="flex space-x-2 items-center">
        <div>Personal Projects</div>
        <FontAwesomeIcon icon={faPenToSquare} />
      </a>
      <div className="relative">
        <button className="peer">
          <div className="flex justify-end space-x-2">
            <div>{language === "en" ? "Eng" : "中文"}</div>
            <div className="transition-all ease-out duration-300 peer-checked:transform peer-checked:rotate-180">
              <FontAwesomeIcon
                icon={faChevronDown}
                data-fa-transform="rotate-0"
              />
            </div>
          </div>
        </button>
        <nav
          tabIndex={0}
          className="border-2 bg-white invisible text-center border-gray-800 rounded w-16 absolute right-0 transition-all opacity-0 peer-focus-within:visible peer-focus-within:opacity-100 peer-focus-within:translate-y-1"
        >
          <ul className="py-1">
            <li className="block p-2 hover:bg-gray-100">
              <button
                onClick={() => {
                  setLanguage("en");
                }}
              >
                Eng
              </button>
            </li>
            <li className="block p-2 hover:bg-gray-100">
              <button
                onClick={() => {
                  setLanguage("cn");
                }}
              >
                中文
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
