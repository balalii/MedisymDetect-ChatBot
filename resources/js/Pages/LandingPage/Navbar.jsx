import Icon from "@/Components/Icon/Icon";
import { Link } from "@inertiajs/react";
import NavMob from "./NavMob";

export default function Navbar(params) {
    return (
        <div className=" !w-full flex flex-row justify-center">
            <nav className="flex flex-row justify-between absolute top-0 items-center  z-50  py-5  container !mx-auto !w-full">
                <Link
                    href="/"
                    className="flex flex-row justify-between items-center font-bold text-xl md:text-2xl space-x-3 text-black no-underline "
                >
                    <div className="bg-[var(--primary-color)] w-10  h-10 md:w-12  md:h-12  rounded-full p-0.5">
                        <Icon />
                    </div>
                    <span>{import.meta.env.VITE_APP_NAME}</span>
                </Link>
                <NavMob />
                <ul className="hidden md:flex flex-row justify-end items-center space-x-14 !list-none ">
                    <li className="font-bold md:hidden lg:block">
                        <Link
                            href={`/`}
                            as="a"
                            className="text-black text-lg no-underline hover:underline"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="font-bold md:hidden lg:block">
                        <Link
                            href={`/#featurs`}
                            as="a"
                            className="text-black text-lg no-underline hover:underline"
                        >
                            Feature
                        </Link>
                    </li>
                    <li className="font-bold lg:block">
                        <Link
                            href="/dev"
                            as="a"
                            className="text-black text-lg no-underline hover:underline"
                        >
                            Team Dev
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link
                            href="/chats"
                            as="button"
                            className="bg-black text-white px-6 py-3 flex flex-row items-center justify-center border-black border rounded-full transition-all  font-semibold"
                        >
                            Mulai Sekarang{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 ml-3"
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
            </nav>
        </div>
    );
}
