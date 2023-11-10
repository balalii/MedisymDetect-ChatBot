import MYAOS from "@/utils/AOS";
import { useEffect } from "react";

export default function HeroImage() {
    useEffect(() => {
        MYAOS();
    }, []);
    return (
        <section
            className="container flex flex-col-reverse lg:flex-row w-full justify-between lg:items-center "
            data-aos="fade-up"
        >
            <img
                src="/assets/hero.png"
                className="w-[60rem] h-auto mx-auto"
                alt=""
            />
        </section>
    );
}
