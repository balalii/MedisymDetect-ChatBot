export default function HomeFeatures() {
    return (
        <div className="flex flex-col space-y-5  ">
            <div className="flex flex-row ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 mr-3 mt-1"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                </svg>

                <div>
                    <h6 className="font-bold"> AI Mechine Learning</h6>
                    <p> Dibekali dengan Algoritma AI.</p>
                </div>
            </div>
            <div className="flex flex-col space-x-0 md:flex-row justify-start md:space-x-10 space-y-5 md:space-y-0  ">
                <div className="flex flex-row ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 mr-3 mt-1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                    </svg>

                    <div>
                        <h6 className="font-bold"> Diagnosis Penyakit</h6>
                        <p>Diagnosis penyakit menggunakan Algoritma.</p>
                    </div>
                </div>
                <div className="flex flex-row ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 mr-3 mt-1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                    </svg>

                    <div>
                        <h6 className="font-bold">Antarmuka Intuitif</h6>
                        <p> Desain antarmuka yang mudah dipahami.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
