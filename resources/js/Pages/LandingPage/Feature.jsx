import MYAOS from "@/utils/AOS";
import { useEffect } from "react";

const DATA_FEATURE = [
    {
        name: "Diagnosa",
        desc: "Media awal diagnosa penyakit kulit yang efisien dan cepat.",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 -mt-4 text-primary"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
            </svg>
        ),
        inprogres: false,
    },
    {
        name: "Cari Lokasi",
        desc: "Temukan Lokasi Layanan Kesehatan Terdekat.",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-10 h-10 -mt-3 text-primary"
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
        ),
        inprogres: false,
    },
    {
        inprogres: true,
        name: "Detection",
        desc: "Deteksi Penyakit menggunakan gambar.",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 -mt-4 text-primary"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
            </svg>
        ),
    },
];

export default function Feature() {
    useEffect(() => {
        MYAOS();
    }, []);
    return (
        <section className="container " id="featurs">
            <div className="lg:px-14">
                <div className="px-4 py-10 md:py-16 mx-auto max-w-7xl sm:px-6 lg:px-2">
                    <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid  sm:gap-x-6 sm:gap-y-10 md:grid-cols-3 lg:gap-x-4">
                        {DATA_FEATURE.map((data, idx) => (
                            <div
                                key={idx}
                                className="flex"
                                data-aos="fade-up"
                                data-aos-delay={`${200 * idx}`}
                            >
                                {data.svg}
                                <div className="ml-3">
                                    <dt className="text-xl md:text-2xl font-medium">
                                        {data.name}{" "}
                                        {data.inprogres && (
                                            <span className="bg-gray/40 tracking-wider font-light relative -top-3 text-xs rounded-md text-white px-2 py-1 left-2">
                                                Future
                                            </span>
                                        )}
                                    </dt>
                                    <dd className="mt-2 text-gray-300 text">
                                        {data.desc}
                                    </dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
