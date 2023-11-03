import Aside from "@/Components/Card/Aside";
import CardAside from "@/Components/Card/CardAside";
import Icon from "@/Components/Icon/Icon";
import NavMobileListMenu from "@/Components/NavMobileListMenu";
import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <div className="flex flex-row-reverse md:flex-row w-full">
            {/* <div className="hidden md:block bg-bgColor border-e border-[#F1F1F1] p-4">
                <Link
                    as="button"
                    href="/"
                    className="bg-primary w-12 h-12 rounded-full items-center flex justify-center text-2xl"
                >
                    <Icon />
                </Link>
            </div> */}
            <div className=" flex-1">
                <div className="bg-bgColor text-white border-b border-[#F1F1F1] h-[9vh] flex items-center justify-between px-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-black"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                        />
                    </svg>

                    <h1 className="text-lg flex-1 pl-3 text-black">
                        MedisymDetect
                    </h1>
                    <NavMobileListMenu />
                </div>
                {children}
                <footer className="bg-bgColor text-black text-center h-[5.8vh] md:h-[6vh] flex items-center justify-center -mt-4 text-xs md:text-sm ">
                    <span className="hidden md:block line-clamp-1">
                        MedisymDetect mungkin menampilkan informasi yang kurang
                        akurat, Seluruh referensi data diambil dari{" "}
                        <a
                            href="https://www.google.com/"
                            target="_blank"
                            className="underline"
                        >
                            Google.
                        </a>
                    </span>
                    <span className=" md:hidden line-clamp-1">
                        © Copyright {new Date().getFullYear()}. All rights
                        reserved.
                    </span>
                </footer>
            </div>
            <aside className="hidden lg:block bg-bgColor border-s border-gray p-5 !w-[23rem] ">
                {/* <Aside /> */}
            </aside>
        </div>
    );
}
