import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import React, { type RefObject, useCallback, useRef } from "react";
import menu from "../icons/menu.json";
import Drawer from "./drawer";

export default function Header() {
  const menuRef: RefObject<LottieRefCurrentProps> =
    useRef<LottieRefCurrentProps>(null);
  const menuClicked = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      menuRef.current?.setDirection(1);
    } else {
      menuRef.current?.setDirection(-1);
    }
    menuRef.current?.play();
  }, []);
  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="text-lg font-bold leading-6 text-gray-900">
            Richard CHIU
          </a>
        </div>
        <div>
          <input
            type="checkbox"
            id="drawer-toggle"
            className="hidden peer"
            onChange={menuClicked}
          />
          <label htmlFor="drawer-toggle">
            <Lottie
              animationData={menu}
              loop={false}
              autoplay={false}
              lottieRef={menuRef}
            ></Lottie>
          </label>
          <div className="fixed top-0 right-0 -z-10 h-full w-full transition-all duration-500 transform translate-x-full peer-checked:translate-x-0">
            <Drawer />
          </div>
        </div>
      </nav>
    </header>
  );
}
