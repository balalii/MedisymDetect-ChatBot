const DATA_FEATURE = [
    {
        name: "Diagnosa",
        desc: "Menyederhanakan Pengoperasian Chatbot dengan Pilihan Fitur yang Lebih Mudah",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-16 h-16 -mt-5 text-primary"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
            </svg>
        ),
    },
    {
        name: "Cari Lokasi",
        desc: "Menyederhanakan Pengoperasian Chatbot dengan Pilihan Fitur yang Lebih Mudah",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-16 h-16 -mt-5 text-primary"
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
    },
    {
        name: "Konsultasi",
        desc: "Menyederhanakan Pengoperasian Chatbot dengan Pilihan Fitur yang Lebih Mudah",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-16 h-16 -mt-5 text-primary"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                />
            </svg>
        ),
    },
];

export default function Feature() {
    return (
        <section className="container " id="featurs">
            <div className="lg:px-36">
                <div className="px-4 py-10 md:py-16 mx-auto max-w-7xl sm:px-6 lg:px-2">
                    {/* <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold sm:text-4xl">
                            All the features you want
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Pellentesque viverra, leo id euismod laoreet, nunc
                            risus molestie orci, vel faucibus quam justo id
                            mauris.
                        </p>
                    </div> */}
                    <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid  sm:gap-x-6 sm:gap-y-10 md:grid-cols-3 lg:gap-x-4">
                        {DATA_FEATURE.map((data, idx) => (
                            <div key={idx} className="flex">
                                {data.svg}
                                <div className="ml-3">
                                    <dt className="text-2xl font-medium">
                                        {data.name}
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
