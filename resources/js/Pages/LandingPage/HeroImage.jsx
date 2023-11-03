import promImage from "../../../../public/assets/prom.png";
import heroL from "../../../../public/assets/l-section.png";
import heroR from "../../../../public/assets/r-section.png";
import MYAOS from "@/utils/AOS";
import { useEffect } from "react";
// import headerHero from "../../../../public/assets/header.png";

export default function HeroImage() {
    useEffect(() => {
        MYAOS();
    }, []);
    return (
        <section className="container space-y-5 lg:space-y-9">
            <div className="lg:max-w-3xl space-y-4">
                <h2 className="font-semibold lg:text-4xl">Chatbot Model</h2>
                <p className="md:text-lg">
                    Fitur chatbot model kami memanfaatkan kecerdasan buatan (AI)
                    untuk memberikan pengalaman berkomunikasi yang canggih dan
                    efisien. Anda dapat berinteraksi dengan chatbot kami untuk
                    mendapatkan informasi, jawaban, dan bantuan dalam waktu
                    nyata.
                </p>
            </div>
            <div className="_heroImage bg-cover bg-left-bottom bg-black rounded-xl lg:rounded-3xl flex flex-col items-center justify-center px-4 py-5 lg:py-14">
                <div className="lg:w-[60rem]  flex flex-col items-center justify-center ">
                    <div
                        className="_promp w-[14.5rem] md:w-[23rem] lg:w-[45rem]"
                        data-aos="zoom-in"
                    >
                        <img
                loading="lazy" src={promImage} alt="" />
                    </div>
                    <div className="flex flex-col -mt-3 w-[15rem] md:-mt-8 lg:-mt-20 md:w-[26rem]  lg:w-[60rem] ">
                        <img
                loading="lazy"
                            data-aos="fade-right"
                            src={heroR}
                            alt=""
                            className="w-56 md:w-[22rem] lg:w-[50rem] mr-auto"
                        />
                        <div
                            className="_heroL"
                            data-aos="fade-left"
                            data-aos-offset="300"
                        >
                            <img
                loading="lazy"
                                src={heroL}
                                alt=""
                                className="w-40 md:w-[20rem] lg:w-[40rem] ml-auto -mt-16 md:-mt-32 lg:-mt-80 !max-w-full "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
