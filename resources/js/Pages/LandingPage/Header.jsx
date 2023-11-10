import { Link } from "@inertiajs/react";
import headerHero from "../../../../public/assets/header1.png";
import HomeFeatures from "./HomeFeatures";

export default function Header() {
    return (
        /* ============== header ==============*/
        <section className="h-[40rem] md:h-[83vh] flex items-center pt-20">
            <div className="container mx-auto flex flex-col items-center py-16 text-left md:text-center md:py-32 md:px-10  xl:max-w-3xl">
                <h1 className=" text-4xl  md:text-5xl font-bold  ">
                    <span className="leading-snug text-[var(--primary-color)] flex flex-col">
                        Chatbot Machine Learning
                    </span>
                    <span className="leading-snug">
                        untuk Diagnosa Penyakit Kulit
                    </span>
                </h1>
                <p className="md:px-8 mt-5 mb-10 md:mb-12 text-lg max-w-xl">
                    Sebuah solusi untuk melakukan diagnosa dini dengan model
                    chatbot yang mudah dimengerti
                </p>
                <div className="flex flex-wrap justify-center">
                    <a
                        href="/chats"
                        className="w-full no-underline md:w-fit px-8 py-4 m-2 font-medium text-sm inline-flex items-center justify-center  rounded-full bg-[var(--primary-color)] text-white"
                    >
                        Get Started Free{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-3 h-3 ml-3"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                        </svg>
                    </a>
                    <a
                        href=""
                        className="w-full no-underline md:w-fit px-8 py-3 m-2 font-medium text-sm inline-flex items-center justify-center border rounded-full text-[var(--primary-color)] border-gray/50"
                    >
                        Watch Video
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-3 h-3 ml-3"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
