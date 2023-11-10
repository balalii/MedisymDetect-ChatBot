import MYAOS from "@/utils/AOS";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";

export default function CallToAction() {
    useEffect(() => {
        MYAOS();
    }, []);
    return (
        <section className="container">
            <div className="mt-10">
                {/* card 1 */}
                <div className="bg-primary text-white  rounded-xl md:rounded-3xl md:flex md:flex-col text-left md:text-center items-center ">
                    <div className="p-10 lg:p-12 space-y-3 flex items-start flex-col lg:space-y-5 md:my-auto">
                        <h4
                            className="font-medium capitalize text-xl lg:text-3xl mx-auto"
                            data-aos="fade-up"
                        >
                            Tangani Kulit Anda dengan Cepat dan Tepat!
                        </h4>
                        <p
                            className="text-base lg:text-lg md:max-w-md lg:max-w-3xl"
                            data-aos="fade-up"
                        >
                            Temukan jawaban atas gejala yang Anda alami melalui
                            interaksi dengan chatbot. Dapatkan saran awal
                            tentang kemungkinan penyakit yang berkaitan dengan
                            gejala Anda.
                        </p>
                        <Link
                            data-aos="fade-up"
                            href="/chats"
                            as="button"
                            className="w-full !mt-8 md:w-fit bg-white text-sm text-[var(--primary-color)] px-9 py-4 flex flex-row items-center justify-center  rounded-full transition-all  font-medium mx-auto"
                        >
                            Coba Sekarang{" "}
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
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
