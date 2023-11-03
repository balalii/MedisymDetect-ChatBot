import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from "@inertiajs/react";
import FormDataML from "./Dashboard/FormDataML";
import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import CardDiseasesList from "./Dashboard/CardDiseasesList";
import Notif from "./Dashboard/Notif";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Dashboard(props) {

    const [isNotif, setIsNotif] = useState(true);

    useEffect(() => {
        if (props.flash.success) {
            setIsNotif(true);
            setTimeout(() => {
                setIsNotif(false); // Menghilangkan notifikasi dalam 2 detik
            }, 2000);
        }
    }, [props.flash]);

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-white leading-tight">
                    {import.meta.env.VITE_APP_NAME}
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-bgColor text-white overflow-hidden shadow-sm sm:rounded-lg  mx-auto">
                        <Tab.Group>
                            <div className="w-[90%] lg:w-[60%] mx-auto">
                                <Tab.List
                                    className={`flex space-x-1 rounded-xl border border-gray bg-gray/20 p-2 mb-12 `}
                                >
                                    <Tab
                                        className={({ selected }) =>
                                            classNames(
                                                "w-full  rounded-lg py-2.5 text-sm font-semibold leading-5 text-black",
                                                "ring-primary ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2",
                                                selected
                                                    ? "bg-primary shadow "
                                                    : "text-primary hover:bg-secondary "
                                            )
                                        }
                                    >
                                        List penyakit
                                    </Tab>
                                    <Tab
                                        className={({ selected }) =>
                                            classNames(
                                                "w-full  rounded-lg py-2.5 text-sm font-semibold leading-5 text-black",
                                                "ring-primary ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2",
                                                selected
                                                    ? "bg-primary shadow "
                                                    : "text-primary hover:bg-secondary "
                                            )
                                        }
                                    >
                                        Tambah data
                                    </Tab>
                                </Tab.List>
                                {props.flash.success && isNotif && (
                                    <Notif
                                        value={props.flash.success}
                                        onClick={() => setIsNotif(false)}
                                    />
                                )}
                            </div>

                            <Tab.Panels>
                                {/* ============================ list data  ====================*/}

                                <Tab.Panel>
                                    {props.diseasesDataDB.data.length === 0 ? (
                                        <p className="text-center">
                                            Opss data belum tersedia !
                                        </p>
                                    ) : (
                                        <CardDiseasesList {...props} />
                                    )}
                                </Tab.Panel>
                                {/* ============================ add data Form ====================*/}
                                <Tab.Panel>
                                    <FormDataML {...props} />
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
