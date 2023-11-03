import { Link } from "@inertiajs/react";
import cardImage from "../../../../public/assets/card-image.png";

export default function Feature() {
    return (
        <section className="container" id="featurs">
            <div className="text-center space-y-3  ">
                <h2 className="font-semibold text-2xl  md:text-3xl  lg:text-5xl lg:leading-snug   md:max-w-sm lg:max-w-xl md:mx-auto capitalize">
                    Inovasi Fitur untuk Efisiensi Kesehatan
                </h2>
                <p className="text-base md:text-lg lg:text-lg">
                    Meningkatkan Efisiensi Pelayanan Kesehatan Melalui Fitur AI
                    Inovatif
                </p>
            </div>

            {/* card */}

            <div className="mt-10">
                {/* card 1 */}
                <div className="bg-primary  rounded-xl md:rounded-3xl md:flex md:flex-row  ">
                    <div className="p-7 lg:p-12 space-y-3 flex items-start flex-col lg:space-y-5 md:my-auto">
                        <div className="bg-black rounded-xl p-3 lg:p-3.5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 text-white lg:w-7 lg:h-7"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </div>
                        <h4 className="font-bold capitalize text-xl lg:text-3xl">
                            Diagnose Penyakit
                        </h4>
                        <p className="text-base lg:text-lg md:max-w-md lg:max-w-none">
                            Temukan jawaban atas gejala yang Anda alami melalui
                            interaksi dengan chatbot AI. Dapatkan saran awal
                            tentang kemungkinan penyakit yang berkaitan dengan
                            gejala Anda.
                        </p>
                        <Link
                            href="/chats"
                            as="button"
                            className="w-full md:w-fit bg-black text-white px-6 py-3 flex flex-row items-center justify-center border-black border rounded-full transition-all  font-semibold"
                        >
                            Mulai Sekarang{" "}
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
                        src={cardImage}
                        alt=""
                        className="hidden lg:block w-[50%]"
                    />
                </div>

                {/* card 2 */}
                <div className="flex flex-col space-y-6 mt-6 md:flex md:flex-row md:space-y-0 md:space-x-7 md:mt-7  lg:space-x-10 lg:mt-10">
                    <div className="bg-gray/5 p-7 lg:p-12 rounded-xl lg:rounded-3xl space-y-3 flex items-start flex-col lg:space-y-5 flex-1 ">
                        <div className="bg-primary rounded-xl p-3 lg:p-3.5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 lg:w-7 lg:h-7"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                />
                            </svg>
                        </div>
                        <h4 className="font-bold capitalize text-xl lg:text-3xl">
                            Fasilitas Kesehatan terdekat
                        </h4>
                        <p className="text-base lg:text-lg">
                            Solusi pintar yang dirancang untuk membantu Anda
                            menemukan fasilitas kesehatan dengan cepat dan mudah
                            di sekitar Anda.
                        </p>
                    </div>
                    <div className="bg-gray/5 p-7 lg:p-12 rounded-xl lg:rounded-3xl space-y-3 flex items-start flex-col lg:space-y-5 flex-1 ">
                        <div className="bg-primary rounded-xl p-3 lg:p-3.5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 lg:w-7 lg:h-7"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                                />
                            </svg>
                        </div>
                        <h4 className="font-bold capitalize text-xl lg:text-3xl">
                            Menemukan Solusi untuk Penyakit
                        </h4>
                        <p className="text-base lg:text-lg">
                            Dirancang untuk memberikan informasi mendalam
                            tentang penyakit-penyakit tertentu, termasuk gejala,
                            Diagnosis, pengobatan yang mungkin diperlukan, dan
                            tindakan pencegahan yang dapat diambil.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
