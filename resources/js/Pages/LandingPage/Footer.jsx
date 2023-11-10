import Icon from "@/Components/Icon/Icon";
import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <section className=" mt-24">
            <footer className=" text-black container lg:p-10 ">
                <div className="flex flex-col items-start space-y-7 lg:flex lg:flex-row lg:justify-between lg:space-y-0">
                    <div className="lg:max-w-md">
                        <Link
                            href="/"
                            className="flex flex-row justify-start items-center font-bold text-xl md:text-2xl  text-black no-underline "
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
                        <p className="text-gray/70 pb-5">
                            Created by designers for medical.
                        </p>
                        <p className="text-base lg:text-base font-light md:max-w-lg">
                            Platform inovatif dengan dasar Mechine Learning (ML)
                            untuk memahami beragam diagnosa penyakit.
                            Menyediakan wawasan mendalam mengenai gejala,
                            pengobatan, dan pencegahan penyakit.
                        </p>
                    </div>
                    <div>
                        <h5 className="font-medium text-lg mb-3">Company</h5>
                        <ul className="!list-none space-y-2 lg:space-y-3 lg:pt-3 -ml-0">
                            <li>
                                <a
                                    href=""
                                    className="!text-black/60 no-underline inline-flex items-center hover:!text-primary transition-all"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    className="!text-black/60 no-underline inline-flex items-center hover:!text-primary transition-all"
                                >
                                    Licensing
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    className="!text-black/60 no-underline inline-flex items-center hover:!text-primary transition-all"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    className="!text-black/60 no-underline inline-flex items-center hover:!text-primary transition-all"
                                >
                                    Terms of Use
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-medium text-lg mb-3">
                            Team Developers
                        </h5>
                        <ul className="!list-none space-y-2 lg:space-y-3 lg:pt-3 -ml-0">
                            <li>
                                <a
                                    href="https://www.instagram.com/ralwaf/"
                                    className="!text-black/60 no-underline inline-flex items-center hover:!text-primary transition-all"
                                    target="_blank"
                                >
                                    Rifig Al Wafaa
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
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/balalii_/"
                                    className="!text-black/60 no-underline inline-flex items-center hover:!text-primary transition-all"
                                    target="_blank"
                                >
                                    Iqbal Ali Ar-Ridho
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
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 pt-3 border-t border-black text-center w-full lg:text-right pb-3">
                    <span className="text-xs lg:text-sm">
                        © Copyright {new Date().getFullYear()}. All rights
                        reserved.
                    </span>
                </div>
            </footer>
        </section>
    );
}
