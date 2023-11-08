import Cards from "@/Components/Card/Cards";
import MLDiagnose from "@/MechineLearning/MLDiagnose";
import React, { useEffect } from "react";
import { useDiagnoseContext } from "../Provider/DiagnoseContextProvider";
import { router } from "@inertiajs/react";

const ResultDiagnoseMessage = ({ message }) => {
    const resulMLDiagnose = MLDiagnose(message);
    const { nameUser } = useDiagnoseContext();

    useEffect(() => {
        // send data
        if (!!resulMLDiagnose) {
            const data = {
                name_user: nameUser,
                symptom: resulMLDiagnose.highest.disease,
                disease: message,
                probability: resulMLDiagnose.highest.probability,
            };
            router.post("/add-chats", data);
        }
    }, []);

    // console.log(resulMLDiagnose);
    return (
        <>
            <div className="space-y-4">
                {!!resulMLDiagnose ? (
                    <>
                        <p>
                            <span className="font-semibold">
                                Gejala Penyakit :
                            </span>{" "}
                            "{message}" ,
                        </p>
                        <p>
                            <span className="font-semibold">
                                Probabilitas Penyakit :
                            </span>{" "}
                            <b className="text-[var(--primary-color)]">
                                {resulMLDiagnose.highest.disease}
                            </b>{" "}
                            , Tingkat Probabilitas :{" "}
                            <b className="text-[var(--primary-color)]">
                                {resulMLDiagnose.highest.probability}%
                            </b>
                            .
                        </p>
                    </>
                ) : (
                    <>
                        <p>
                            Maaf {nameUser} Saya berusaha membantu sebaik
                            mungkin, namun Saya tidak bisa memahami apa yang
                            anda maksud atas gejala yang diberikan.
                        </p>
                    </>
                )}
            </div>
        </>
    );
};
export const ResultDiagnoseMessageWIthImage = ({ message }) => {
    const resulMLDiagnose = MLDiagnose(message);
    // const { nameUser } = useDiagnoseContext();

    // useEffect(() => {
    //     // send data
    //     if (!!resulMLDiagnose) {
    //         const data = {
    //             name_user: nameUser,
    //             symptom: resulMLDiagnose.highest.disease,
    //             disease: message,
    //             probability: resulMLDiagnose.highest.probability,
    //         };
    //         router.post("/add-chats", data);
    //     }
    // }, []);

    // console.log(resulMLDiagnose);
    return (
        <>
            <div className="space-y-4">
                {!!resulMLDiagnose ? (
                    <>
                        <p>
                            Harap diingat bahwa gejala kulit seperti ini bisa
                            memiliki berbagai penyebab, mulai dari masalah
                            ringan hingga masalah medis yang lebih serius.
                            Beberapa kemungkinan probabilitas penyakit kulit
                            lainnya termasuk:
                        </p>
                        <Cards {...resulMLDiagnose} />
                        <p>
                            Namun, hasil Diagnosis ini mungkin belum tentu
                            akurat, dan Saya merekomendasikan agar Anda
                            menggunakan ini sebagai referensi awal saja. Jika
                            Anda benar-benar mengalami gejala yang dijelaskan di
                            atas, sangat disarankan untuk berkonsultasi dengan
                            seorang dokter kulit untuk pemeriksaan lebih lanjut
                            dan Diagnosis yang akurat.
                        </p>

                        <p>
                            Saya selalu di sini untuk membantu Anda. Untuk
                            melanjutkan, Anda dapat memilih salah satu dari dua
                            fitur berikut ini sesuai kebutuhan Anda:
                        </p>
                    </>
                ) : (
                    <p>Silakan pilih kembali antara dua fitur di bawah ini.</p>
                )}
            </div>
        </>
    );
};

export default ResultDiagnoseMessage
