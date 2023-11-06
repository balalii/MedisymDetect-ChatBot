import Aside from "@/Components/Card/Aside";
import CardAside from "@/Components/Card/CardAside";
import ThemeBtn from "@/Components/Elements/ThemeBtn";
import Icon from "@/Components/Icon/Icon";
import NavMobileListMenu from "@/Components/NavMobileListMenu";
import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen  w-full   ">
            <header className="bg-[var(--background-color)]">
                <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
                    <div className="flex items-center sm:justify-between sm:gap-4 text-[var(--white-or-black)]">
                        <div className="inline-flex items-center">
                            <Icon
                                widht={50}
                                fillColor={"fill-[var(--primary-color)]"}
                            />
                            <h1 className="text-base flex-1 pl-0 font-[600] font-poppins ">
                                MedisymDetect
                            </h1>
                        </div>
                        <div className="flex flex-1 items-center gap-3 justify-end">
                            <ThemeBtn />

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

                                    <span className="text-white0">
                                        eric@frusciante.com
                                    </span>
                                </p>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ms-4 hidden h-5 w-5 text-white0 transition group-hover:text-[var(--white)] sm:block"
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
            <div className="container">
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
