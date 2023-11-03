import NavMobileListMenu from "@/Components/NavMobileListMenu";
import Icon from "@/Components/Icon/Icon";
import Header from "./LandingPage/Header";
import CallToAction from "./LandingPage/CallToAction";
import HeroImage from "./LandingPage/HeroImage";
import Feature from "./LandingPage/Feature";
import Footer from "./LandingPage/Footer";
import Navbar from "./LandingPage/Navbar";
import { Head } from "@inertiajs/react";

export default function LandingPage() {
    return (
        <>
            <Head>
                <meta name="description" content="Welcome to MedisymDetect" />
            </Head>
            <div className="bg-white ">
                <Navbar />
                <Header />
                <CallToAction />
                <HeroImage />
                <Feature />
                <Footer />
            </div>
        </>
    );
}
