import MYAOS from "@/utils/AOS";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";

export default function CallToAction() {
    useEffect(() => {
        MYAOS();
    }, []);
    return (
        <section className="container flex flex-col-reverse lg:flex-row w-full justify-between lg:items-center ">
            <div className="max-w-md">
                <h3 className="font-semibold lg:text-3xl">
                    Kami Menyediakan Solusi Kesehatan yang :
                </h3>
                <div className="flex flex-row w-full  mt-4 items-center flex-wrap space-y-3 ">
        
                    <div
                        as="button"
                        className="bg-transparent px-6 py-3 flex flex-row items-center justify-center bg-gray/10 text-gray/70 rounded-full mt-2 mr-2 text-sm md:text-base"
                    >
                        Moderen
                    </div>

                    <div
                        as="button"
                        className="bg-transparent px-6 py-3 flex flex-row items-center justify-center bg-gray/10 text-gray/70 rounded-full mt-2 mr-2 text-sm md:text-base"
                    >
                        Cepat
                    </div>
                    <div
                        as="button"
                        className="bg-transparent px-6 py-3 flex flex-row items-center justify-center bg-gray/10 text-gray/70 rounded-full mt-2 mr-2 text-sm md:text-base"
                    >
                        Mudah digunakan
                    </div>
                    <div
                        as="button"
                        className="bg-transparent px-6 py-3 flex flex-row items-center justify-center bg-gray/10 text-gray/70 rounded-full mt-2 mr-2 text-sm md:text-base"
                    >
                        Cerdas
                    </div>
                    <div
                        as="button"
                        className="bg-transparent px-6 py-3 flex flex-row items-center justify-center bg-gray/10 text-gray/70 rounded-full mt-2 mr-2 text-sm md:text-base"
                    >
                        Inovatif
                    </div>
                </div>
            </div>
            <h2 className="mb-6 font-semibold leading-snug md:max-w-xl lg:max-w-[36rem] lg:text-3xl lg:leading-snug flex-1">
                Kami Berkomitmen Untuk Membantu Anda Memeriksa Diagnosis Penyakit
                dengan{" "}
                <span className="text-gray/70" data-aos="fade-up">
                    Mudah Diakses di Mana Saja Melalui Teknologi AI.
                </span>
            </h2>
        </section>
    );
}
