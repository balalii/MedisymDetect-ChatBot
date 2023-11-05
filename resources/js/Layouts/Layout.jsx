import Aside from "@/Components/Card/Aside";
import CardAside from "@/Components/Card/CardAside";
import Icon from "@/Components/Icon/Icon";
import NavMobileListMenu from "@/Components/NavMobileListMenu";
import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen  w-full container ">
            <header className="bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
                    <div className="flex items-center sm:justify-between sm:gap-4 text-[var(--white-or-black)]">
                        <h1 className="text-lg flex-1 pl-3 ">MedisymDetect</h1>
                        <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="block shrink-0 rounded-lg bg-[var(--background-color)] p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                                >
                                    <span className="sr-only">Academy</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="1"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        />
                                    </svg>
                                </a>

                                <a
                                    href="#"
                                    className="block shrink-0 rounded-lg bg-[var(--background-color)] p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                                >
                                    <span className="sr-only">
                                        Notifications
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="1"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                        />
                                    </svg>
                                </a>
                            </div>

                            <button
                                type="button"
                                className="group flex shrink-0 items-center rounded-lg transition"
                            >
                                <span className="sr-only">Menu</span>
                                <img
                                    alt="Man"
                                    src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    className="h-10 w-10 rounded-full object-cover"
                                />

                                <p className="ms-2 hidden text-left text-xs sm:block">
                                    <strong className="block font-medium">
                                        Eric Frusciante
                                    </strong>

                                    <span className="text-gray-500">
                                        eric@frusciante.com
                                    </span>
                                </p>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className=" flex-1">
                {children}
                <footer className="bg-[var(--backround-color)] text-[var(--white-or-black)] text-center flex items-center justify-center  text-xs md:text-sm ">
                    <span className="hidden md:block line-clamp-1">
                        MedisymDetect mungkin menampilkan informasi yang kurang
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
