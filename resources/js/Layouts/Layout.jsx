import Aside from "@/Components/Card/Aside";
import CardAside from "@/Components/Card/CardAside";
import ThemeBtn from "@/Components/Elements/ThemeBtn";
import Icon from "@/Components/Icon/Icon";
import NavMobileListMenu from "@/Components/NavMobileListMenu";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "@inertiajs/react";
import { Fragment } from "react";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen  w-full   ">
            <header className="bg-[var(--background-secondary-color)]">
                <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
                    <div className="flex items-center sm:justify-between sm:gap-4 text-[var(--white-or-black)]">
                        <div className="inline-flex items-center">
                            <Icon
                                widht={50}
                                fillColor={"fill-[var(--primary-color)]"}
                            />
                            <h1 className="text-base flex-1 pl-0 font-[600] font-poppins ">
                                MLmedisym
                            </h1>
                        </div>
                        <div className="flex flex-1 items-center gap-3 justify-end">
                            <ThemeBtn />

                            <Popover className="relative">
                                <Popover.Button>
                                    <button
                                        type="button"
                                        className="group flex shrink-0 items-center rounded-lg transition"
                                    >
                                        <span className="sr-only">Menu</span>
                                        <img
                                            alt="Man"
                                            src="/user.png"
                                            className="h-9 w-9 rounded-full object-cover"
                                        />

                                        <p className="ms-3 hidden text-left text-sm sm:block">
                                            <strong className="block font-medium">
                                                Sign in
                                            </strong>

                                            {/* <span className="text-white0">
                                        eric@frusciante.com
                                    </span> */}
                                        </p>
                                    </button>
                                </Popover.Button>

                                <Popover.Panel className="absolute z-10">
                                    <div className="bg-[var(--secondary-color)] p-3 w-48 absolute right-0 top-2 rounded-md border border-[var(--gray)]">
                                        Maaf Fitur Login masih dalam
                                        pengerjaan...
                                    </div>

                                    <img src="/solutions.jpg" alt="" />
                                </Popover.Panel>
                            </Popover>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container">
                {children}
                <footer className="bg-[var(--backround-color)] text-[var(--white-or-black)] text-center flex items-center justify-center  text-xs md:text-sm ">
                    <span className="hidden md:block line-clamp-1">
                        MLmedisym mungkin menampilkan informasi yang kurang
                        akurat, Seluruh referensi data diambil dari{" "}
                        <a
                            href="https://www.google.com/"
                            target="_blank"
                            className="underline text-[var(--primary-color)]"
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
        </div>
    );
}
