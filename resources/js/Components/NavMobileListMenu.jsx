import { useEffect, useState } from "react";
import Aside from "./Card/Aside";

export default function NavMobileListMenu() {
    const [navOpen, setNavOpen] = useState(true);

    const closeMenu = () => {
        const getMenus =
            window.document.getElementsByClassName("coverMobileNav");
        const getMenu = getMenus[0];
        const getBody = window.document.body.classList;
        getBody.remove("overflow-hidden");
        getMenu.classList.remove("!left-0"); //hide nav
        getMenu.classList.add("-left-[100vw]"); //hide nav
    };

    const openNav = () => {
        const getMenus =
            window.document.getElementsByClassName("coverMobileNav");
        const getMenu = getMenus[0];

        const getBody = window.document.body.classList;
        // overflow;

        getBody.add("overflow-hidden");
        // show side mobile nav
        getMenu.classList.remove("-left-[100vw]");
        getMenu.classList.add("!left-0");
    };
    return (
        <>
            <svg
                onClick={openNav}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 lg:hidden "
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
            </svg>
            <aside
                className={`coverMobileNav absolute top-0 z-50 h-screen flex w-full transition-all  -left-[100vw] `}
            >
                <div
                    className={` border-s border-gray  bg-bgColor h-screen transition-all  p-5 `}
                >
                    <svg
                        onClick={closeMenu}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7 ml-auto text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>

                    <Aside />
                </div>
                <div
                    onClick={closeMenu}
                    className={` border-s border-gray   bg-bgColor/50 !w-full h-screen transition-all  `}
                ></div>
            </aside>
        </>
    );
}
