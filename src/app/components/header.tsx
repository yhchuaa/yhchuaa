import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { RefObject, useCallback, useRef } from "react";
import menu from "../icons/menu.json";

export default function Header() {
    const menuRef: RefObject<LottieRefCurrentProps> = useRef<LottieRefCurrentProps>(null);
    const menuClicked = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            menuRef.current?.setDirection(1);
        } else { 
            menuRef.current?.setDirection(-1);
        };
        menuRef.current?.play();
    }, []);
    return (
        // <header>
        //     <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        //         <div className="flex lg:flex-1">
        //             <a href="#" className="text-lg font-bold leading-6 text-gray-900">Richard CHIU</a>
        //         </div>
        // //         <div className="lg:flex lg:gap-x-12">
        //             <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Educational Qualifications</a>
        //             <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Work Experience</a>
        //             <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Personal Projects</a>
        //         </div>
        //         <div className="lg:flex lg:flex-1 lg:justify-end">
        //             <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
        //         </div>
        //     </nav>
        // </header>
        <header>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1 -z-20">
                    <a href="#" className="text-lg font-bold leading-6 text-gray-900">Richard CHIU</a>
                </div>
                <input type="checkbox" id="drawer-toggle" className="relative sr-only peer" onChange={menuClicked} />
                <label htmlFor="drawer-toggle">
                    <Lottie animationData={menu} loop={false} autoplay={false} lottieRef={menuRef}></Lottie>
                    {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="5" width="24" height="2" fill="#000"/>
                        <rect x="9" y="12" width="15" height="2" fill="#000"/>
                    </svg> */}
                </label>
                <div className="fixed top-0 right-0 -z-10 h-full w-64 transition-all duration-500 transform translate-x-full bg-white shadow-lg peer-checked:translate-x-0">
                    <div className="px-6 py-4">
                        <h2 className="text-lg font-semibold">Drawer</h2>
                        <p className="text-gray-500">This is a drawer.</p>
                    </div>
                </div>
            </nav>
        </header>
    )
}