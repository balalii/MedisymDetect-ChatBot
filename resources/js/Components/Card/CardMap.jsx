import { useState } from "react";

export default function CardMap({ hospital }) {
    const [seeDetail, setSeeDetail] = useState(false);
    const handleClickOpen = () => {
        return setSeeDetail(true);
    };
    const handleClickClose = () => {
        return setSeeDetail(false);
    };

    return (
        <>
            <div
                className="border-2 text-[var(--white-or-black)] border-[var(--border-card)] bg-[var(--backround-card)]  group rounded-lg md:rounded-lg p-3 md:p-2 !w-full md:!w-[45.4%] lg:!w-[30%] mb-4 md:mb-7 md:mr-3 cursor-pointer"
                onClick={seeDetail ? null : handleClickOpen}
            >
                <div
                    className={`flex flex-row justify-between items-center text-xs md:text-base  ${
                        seeDetail
                            ? "opacity-100 mb-4"
                            : " opacity-0 max-h-0 overflow-hidden"
                    }`}
                >
                    <h2 className=" text-sm md:text-xs flex-1 line-clamp-1 pr-1">
                        {hospital.name}
                    </h2>
                    <svg
                        onClick={handleClickClose}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`w-5 md:w-5 h-5 md:h-5 `}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <img
                    loading="lazy"
                    className="rounded-md bg-[var(--gray)] md:rounded-lg w-full aspect-[4/2.5] object-cover"
                    src={hospital.image}
                    alt=""
                />
                <div className="space-y-2 mt-4">
                    <div
                        className={`flex flex-row items-center justify-between `}
                    >
                        <h3 className=" text-sm md:text-xs flex-1 line-clamp-1 pr-2 ">
                            {seeDetail ? "5km - RS." : hospital.name}
                        </h3>
                        <span className="flex flex-row items-center font-bold justify-between text-[#0067FE]  text-sm md:text-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#0067FE"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className={`w-4 md:w-4 h-4 md:h-4 mr-1`}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                            </svg>
                            {hospital.rating}
                        </span>
                    </div>
                    <div>
                        <p
                            className={`text-xs md:text-xs ${
                                !seeDetail &&
                                "line-clamp-2 text-[var(--white-or-black)]"
                            }`}
                        >
                            {hospital.location.address}
                        </p>
                    </div>
                    <div
                        className={`transition-all duration-300 text-sm md:text-xs  ${
                            seeDetail
                                ? "opacity-100 space-y-2"
                                : "opacity-0 max-h-0 overflow-hidden"
                        }`}
                    >
                        <div className="flex flex-row items-center justify-between ">
                            <span>Jam</span>
                            <span>{hospital.open}</span>
                        </div>
                        <div className="flex flex-row items-center justify-between ">
                            <span>Telp</span>
                            <span>{hospital.tel}</span>
                        </div>
                        <div className="flex flex-row  justify-between space-x-3 !mt-5">
                            <a
                                target="_blank"
                                href={hospital.location.linkAddress}
                                className="text-xs no-underline md:text-xs bg-[var(--primary-color)] text-white font-bold flex-1 rounded-md md:rounded-lg py-2  items-center justify-center flex flex-row"
                            >
                                <button>Lokasi</button>
                            </a>
                            <a
                                target="_blank"
                                href={hospital.location.linkAddress}
                                className="bg-[var(--white)] text-black border border-[var(--primary-color)] font-bold  rounded-md md:rounded-lg py-2 px-2 text-base items-center justify-center flex flex-row"
                            >
                                <button>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#0067FE"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 text-[var(--primary-color)]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                        />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
