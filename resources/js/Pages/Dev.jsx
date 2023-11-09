import { Head } from "@inertiajs/react";
import Developers from "./Dev/Developers";
import Footer from "./LandingPage/Footer";
import Navbar from "./LandingPage/Navbar";

export default function Dev() {
    return (
        <>
            <Head>
                <title>Developers - </title>
                <meta
                    name="description"
                    content="Team Behind The Creation Of MLmedisym"
                />
            </Head>
            <div className="bg-white ">
                <Navbar />
                <Developers />
                <Footer />
            </div>
        </>
    );
}
