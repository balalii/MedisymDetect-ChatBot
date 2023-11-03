import { Link } from "@inertiajs/react";
import headerHero from "../../../../public/assets/header1.png";
import HomeFeatures from "./HomeFeatures";

export default function Header() {
    return (
        /* ============== header ==============*/
        <section
            className={`container _header flex flex-col   bg-bottom bg-cover lg:flex-row lg:justify-between  pt-24 items-center md:pt-36 h-[100vh] `}
        >
            <div className="space-y-7">
                <h1 className="font-bold max-w-72 md:max-w-xl md:text-6xl md:leading-tight">
                    Transformasi Kesehatan Melalui Diagnosis Cerdas AI
                </h1>
                <HomeFeatures />
                <p className="md:text-lg md:max-w-xl">
                    Menuju Kesehatan Terbaik Diagnosis Penyakit Lebih Canggih
                    dengan Bantuan AI untuk Keputusan yang Penuh Wawasan.
                </p>
                <Link
                    href="/chats"
                    as="button"
                    className="bg-black text-white px-6 py-3 flex flex-row items-center justify-center border-black border rounded-full transition-all hover:bg-black hover:text-white font-semibold"
                >
                    Coba MedisymDetect{" "}
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
            </div>
            <img
                loading="lazy"
                src={headerHero}
                className="w-[38rem] h-auto hidden lg:block  absolute right-0 -mt-64 "
                alt=""
            />
        </section>
    );
}
