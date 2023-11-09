import { Link } from "@inertiajs/react";
import CardAside from "./CardAside";

export default function Aside(params) {
    return (
        <div className="flex flex-col justify-between lg:h-full md:w-[21rem] md:h-[95%]">
            <div className="space-y-6">
                <section className="space-y-3">
                    <div className="text-white w-full flex flex-row justify-between">
                        <h2 className="text-lg font-bold">Keterbatasan</h2>
                    </div>
                    <div className="flex flex-row space-x-4 ">
                        <CardAside
                            collor={"bg-[#F8EBB4]"}
                            desc={
                                "Kemampuan dalam menDiagnosis masalah kesehatan masih terbatas."
                            }
                            svg={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                    />
                                </svg>
                            }
                        />{" "}
                        <CardAside
                            collor={"bg-[#F8EBB4]"}
                            desc={
                                "Tidak menggantikan konsultasi medis langsung dengan dokter."
                            }
                            svg={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                    />
                                </svg>
                            }
                        />
                    </div>
                </section>
                <section className="space-y-3">
                    <div className="text-white w-full flex flex-row justify-between">
                        <h2 className="text-lg font-bold">Kemampuan</h2>
                    </div>
                    <div className="flex flex-row space-x-4 ">
                        <CardAside
                            collor={"bg-[#ffffff]"}
                            desc={
                                "Dibekali Mechine Learning untuk Pemantauan Gejala Awal penyakit untuk Tindakan Selanjutnya"
                            }
                            svg={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.8}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                </svg>
                            }
                        />
                        <CardAside
                            collor={"bg-[#ffffff]"}
                            desc={
                                "Akses mudah ke informasi medis yang berguna untuk memahami gejala dan penyakit."
                            }
                            svg={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.8}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                </svg>
                            }
                        />
                    </div>
                </section>
            </div>

            <div className="bg-blue text-white space-y-5 text-center p-7  rounded-xl w-full py-5 hidden md:block ">
                <h3 className="font-bold text-xl">
                    MLmedisym{" "}
                    <span className="bg-primary px-3 py-1 text-black rounded-lg ml-1">
                        BETA
                    </span>
                </h3>
                <p className="text-sm font-light ">
                    We hope this application helps you stay healthy {":)"}
                </p>
                <Link
                    as="button"
                    href="/dev"
                    className="bg-white/10 p-3 px-12 rounded-lg border text-sm border-white/25 hover:bg-white/95 hover:text-black transition-all"
                >
                    Team Developers
                </Link>
            </div>
        </div>
    );
}
