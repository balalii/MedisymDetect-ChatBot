import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <section className="container ">
            <footer className="bg-black text-white p-10 lg:p-16 rounded-2xl md:rounded-3xl ">
                <div className="flex flex-col items-start space-y-7 lg:flex lg:flex-row lg:justify-between lg:space-y-0">
                    <div className="lg:max-w-2xl">
                        <h2 className="font-bold mb-3 lg:text-3xl">
                            MedisymDetect
                        </h2>
                        <p className="text-sm lg:text-base font-light">
                            Platform inovatif dengan dasar Kecerdasan Buatan
                            (AI) untuk memahami beragam Diagnosis penyakit.
                            Menyediakan wawasan mendalam mengenai gejala,
                            pengobatan, dan pencegahan penyakit. Anda dapat
                            menjelajahi dunia kesehatan yang interaktif dan
                            memperoleh panduan handal dalam perjalanan
                            kesehatan.
                        </p>
                    </div>
                    <div>
                        <h5 className="font-bold text-xl mb-3">
                            Team Developers
                        </h5>
                        <ul className="!list-none space-y-2 lg:space-y-3 lg:pt-3 -ml-0">
                            <li>
                                <a
                                    href="https://www.instagram.com/ralwaf/"
                                    className="!text-white no-underline inline-flex items-center hover:!text-primary transition-all"
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
                                    className="!text-white no-underline inline-flex items-center hover:!text-primary transition-all"
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

                <div className="mt-10 pt-3 border-t border-white text-center w-full lg:text-right">
                    <span className="text-xs lg:text-base">
                        MedisymDetect. All Rights Reserved
                    </span>
                </div>
            </footer>
        </section>
    );
}
