import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import LiItem from "./LiItem";
import RenderHTML from "../RenderHTML";
import CardMap from "./CardMap";
import _HOSPITAL from "@/utils/_HOSPITAL";
import { useThemeStore } from "@/Store/ThemeStore";

export default function ModalCard(resulMLDiagnose) {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }
    const theme = useThemeStore((state) => state.theme);

    // console.log(resulMLDiagnose);
    return (
        <>
            <Card
                onClick={openModal}
                disease={resulMLDiagnose.disease}
                probability={resulMLDiagnose.probability}
                image={resulMLDiagnose.image}
            />

            <Transition appear show={isOpen} as={Fragment} data-theme={theme}>
                <Dialog
                    as="div"
                    className="relative  z-10"
                    onClose={closeModal}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-[var(--background-color)] bg-opacity-100" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto ">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="!w-full md:!w-[85%] lg:!w-[63%]  transform overflow-hidden rounded-2xl bg-[var(--background-color)] text-black p-6 text-left align-middle transition-all">
                                    <div className="flex flex-row justify-between items-center text-[var(--white-or-black)]">
                                        <div className="flex-1 flex flex-row items-center  ">
                                            <svg
                                                onClick={closeModal}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 cursor-pointer"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                                />
                                            </svg>

                                            <Dialog.Title
                                                as="h3"
                                                className="flex-1 ml-5 md:pl-0 max-w-[70%] text-[var(--white-or-black)] line-clamp-1 text-lg md:text-2xl font-semibold leading-6 text-gray-900 "
                                            >
                                                {resulMLDiagnose.disease}
                                            </Dialog.Title>
                                        </div>

                                        <div className="text-white bg-primary rounded-full p-1 md:p-2 font-bold text-sm md:text-base">
                                            {resulMLDiagnose.probability}%
                                        </div>
                                    </div>
                                    <div className="mt-7 space-y-7 text-base md:text-base">
                                        <img
                                            loading="lazy"
                                            className="rounded-xl bg-[var(--gray)] mt-2 w-full aspect-[4/2.3] md:aspect-[4/1.7] object-cover"
                                            src={`storage/images/diseases/${resulMLDiagnose.image}`}
                                            alt=""
                                        />
                                        <RenderHTML
                                            htmlContent={resulMLDiagnose.desc}
                                        />

                                        <div className="space-y-3 hidden">
                                            <h3 className="font-semibold">
                                                Gejala
                                            </h3>
                                            <ul className="list-disc list-outside ml-6">
                                                <LiItem
                                                    data={
                                                        resulMLDiagnose.symptom
                                                    }
                                                />
                                            </ul>
                                        </div>
                                        <div className="space-y-3">
                                            {/* <h3 className="font-semibold">
                                                Pengobatan
                                            </h3> */}
                                            <RenderHTML
                                                htmlContent={
                                                    resulMLDiagnose.treatment
                                                }
                                            />
                                        </div>

                                        <div className="space-y-10">
                                            <div>
                                                <div className="mb-8  mt-16">
                                                    <h3 className="font-semibold md:text-2xl text-[var(--white-or-black)]">
                                                        Probabilitas Diagnosis
                                                    </h3>
                                                    <p className="text-[var(--white-or-black)] ">
                                                        Diagnosis yang relevan
                                                        dengan gejala anda
                                                    </p>
                                                </div>
                                                <div className="flex flex-col md:flex-row flex-wrap lg:justify-around">
                                                    {resulMLDiagnose.listProbability
                                                        .slice(0, 3)
                                                        .map((data, idx) => (
                                                            <ModalCard
                                                                key={idx}
                                                                listProbability={
                                                                    resulMLDiagnose.listProbability
                                                                }
                                                                {...data}
                                                            />
                                                        ))}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="mb-8">
                                                    <h3 className="font-semibold md:text-2xl text-[var(--white-or-black)]">
                                                        Pilihan Rumah Sakit dan
                                                        Klinik Terdekat
                                                    </h3>
                                                    <p className="text-[var(--white-or-black)] ">
                                                        3 Rumah Sakit/Klinik
                                                        Ditemukan
                                                    </p>
                                                </div>
                                                <div className="flex flex-row lg:justify-around  items-start flex-wrap mt-7 ">
                                                    {_HOSPITAL
                                                        .slice(0, 3)
                                                        .map((data, idx) => (
                                                            <CardMap
                                                                key={idx}
                                                                hospital={data}
                                                            />
                                                        ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export function Card({ onClick, disease, probability, image }) {
    return (
        <div
            className="bg-[var(--backround-card)] border-2 border-[var(--gray)] group rounded-lg lg:rounded-lg p-3 md:p-3 !w-full md:!w-[37%] lg:!w-[30%] mb-4 md:mb-6 md:mr-6 cursor-pointer"
            onClick={onClick}
        >
            <div className="flex flex-row justify-between items-center text-base md:text-base ">
                <h2 className="flex-1 line-clamp-1 !text-sm text-[var(--white-or-black)]">
                    {disease}
                </h2>
                <p className="text-primary pl-3 text-sm font-bold">
                    {probability}%
                </p>
            </div>
            <img
                loading="lazy"
                className="rounded-lg bg-[var(--gray)] md:rounded-md mt-2 aspect-[4/2.8] w-full object-cover"
                src={`storage/images/diseases/${image}`}
                alt=""
            />
        </div>
    );
}
