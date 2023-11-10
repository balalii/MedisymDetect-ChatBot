import Header from "./LandingPage/Header";
import CallToAction from "./LandingPage/CallToAction";
import HeroImage from "./LandingPage/HeroImage";
import Feature from "./LandingPage/Feature";
import Footer from "./LandingPage/Footer";
import Navbar from "./LandingPage/Navbar";
import { Head } from "@inertiajs/react";
// import { useEffect } from "react";
// import { useThemeStore } from "@/Store/ThemeStore";

export default function LandingPage() {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content={`Welcome to ${import.meta.env.VITE_APP_NAME}`}
                />
            </Head>
            <div className="bg-[#F9F9F9] ">
                <Navbar />
                <Header />
                <HeroImage />
                <Feature />
                <CallToAction />
                <Footer />
            </div>
        </>
    );
}
