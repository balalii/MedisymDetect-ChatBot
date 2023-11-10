import Icon from "@/Components/Icon/Icon";
import { Link } from "@inertiajs/react";
import NavMob from "./NavMob";
import Alert from "@/Components/Elements/Alert";

export default function Navbar(params) {
    return (
        <div className=" !w-full flex flex-row justify-center">
            <nav className="flex flex-row justify-between absolute top-0 items-center  z-50  py-2   !mx-auto !w-full bg-[var(--white-or-black)]">
                <div className="px-5 md:px-10 w-full mx-auto flex flex-row justify-between items-center ">
                    <Link
                        href="/"
                        className="flex flex-row justify-between items-center font-bold text-xl md:text-2xl  text-black no-underline "
                    >
                        <div className=" w-12  h-12 md:w-14  md:h-14  rounded-full inline-flex items-center">
                            <Icon
                                widht={80}
                                fillColor={"fill-[var(--primary-color)]"}
                            />
                        </div>
                        <span className=" text-xl">
                            {import.meta.env.VITE_APP_NAME}
                        </span>
                    </Link>
                    <ul className="hidden md:flex flex-row justify-end items-center space-x-14 !list-none ">
                        <li className="font-medium md:hidden lg:block">
                            <Link
                                href={`/`}
                                as="a"
                                className="text-black no-underline hover:text-[var(--primary-color)]"
                            >
                                Beranda
                            </Link>
                        </li>
                        <li className="font-medium md:hidden lg:block">
                            <Link
                                href={`/#featurs`}
                                as="a"
                                className="text-black no-underline hover:text-[var(--primary-color)]"
                            >
                                Overview
                            </Link>
                        </li>
                        <li className="font-medium md:hidden lg:block">
                            <Link
                                href="/dev"
                                as="a"
                                className="text-black no-underline hover:text-[var(--primary-color)]"
                            >
                                Developers
                            </Link>
                        </li>
                    </ul>

                    <NavMob />
                    <ul className="hidden lg:block">
                        <li className="list-none ">
                            <Alert
                                message={
                                    "Maaf fitur Login masih dalam pengembangan..."
                                }
                            >
                                <div className="inline-flex items-center ">
                                    <div
                                        // href=""
                                        as="button"
                                        className="bg-transparent text-black px-6 py-2.5 flex  flex-row text-sm items-center justify-center  rounded-full transition-all  font-medium"
                                    >
                                        Log In
                                    </div>
                                    <div
                                        // href=""
                                        as="button"
                                        className="bg-[var(--primary-color)] text-white px-6 py-2.5 flex flex-row text-sm items-center justify-center  rounded-full transition-all  font-medium"
                                    >
                                        Sign up
                                    </div>
                                </div>
                            </Alert>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
