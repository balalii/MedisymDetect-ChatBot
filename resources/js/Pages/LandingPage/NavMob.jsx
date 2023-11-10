import Aside from "@/Components/Card/Aside";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function NavMob() {
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
            <div
                className={`coverMobileNav absolute top-0 z-50 h-[100lvh] flex w-full transition-all  -left-[100vw] `}
            >
                <div
                    className={` border-s border-gray  bg-white h-[100lvh] transition-all  w-[70rem] p-5 md:w-[31rem] md:h-[95%]  `}
                >
                    <svg
                        onClick={closeMenu}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7 ml-auto text-black"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>

                    {/* menu =================== */}

                    <aside className="w-full p-6 bg-white  text-black">
                        <nav className="space-y-8 text-sm">
                            <div className="space-y-5">
                                <h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400">
                                    List Menu
                                </h2>
                                <ul className=" md:flex flex-row md:flex-col justify-end items-start !list-none !ml-0 !space-y-3  !mt-5">
                                    <li className=" lg:block">
                                        <Link
                                            onClick={closeMenu}
                                            href={`/`}
                                            as="a"
                                            className=" text-base no-underline hover:underline"
                                        >
                                            Beranda
                                        </Link>
                                    </li>
                                    <li className=" lg:block">
                                        <Link
                                            onClick={closeMenu}
                                            href={`/#featurs`}
                                            as="a"
                                            className=" text-base no-underline hover:underline"
                                        >
                                            Overview
                                        </Link>
                                    </li>
                                    <li className=" lg:block">
                                        <Link
                                            onClick={closeMenu}
                                            href="/dev"
                                            as="a"
                                            className=" text-base no-underline hover:underline"
                                        >
                                            Developers
                                        </Link>
                                    </li>
                                    <li className="list-none !mt-14 hidden">
                                        <Link
                                            onClick={closeMenu}
                                            href="/chats"
                                            as="button"
                                            className="bg-[var(--primary-color)]  text-white px-6 md:px-10 py-4 flex flex-row items-center justify-center border-white border rounded-full transition-all  font-medium"
                                        >
                                            Coba Sekarang{" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-3 h-3 ml-2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                                />
                                            </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </aside>
                    {/* menu =================== */}
                </div>
                <div
                    onClick={closeMenu}
                    className={` border-s border-gray   bg-bgColor/50 !w-full h-screen transition-all  `}
                ></div>
            </div>
        </>
    );
}
