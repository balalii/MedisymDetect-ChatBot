import React, { useState } from "react";
import ResultDiagnoseMessage, { ResultDiagnoseMessageWIthImage } from "./CostomMessage/ResultDiagnoseMessage";
import { useDiagnoseContext } from "@/Pages/Chat/Provider/DiagnoseContextProvider";
import MapMessage from "./CostomMessage/MapMessage";
import UserTesting from "@/MechineLearning/UserTesting";
import capitalizeString from "@/Components/capitalizeString";
// import { Inertia } from "@inertiajs/react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const { setCekDiagnose, nameUser, setNameUser } = useDiagnoseContext();

    // =========== Fist message
    const handleNameUser = (messages) => {
        const botMessage = createChatBotMessage(
            `Baik ${capitalizeString(
                messages
            )}, Sekarang kita bisa mulai mencari informasi medis yang anda butuhkan.`
        );

        //set name
        setNameUser(capitalizeString(messages));

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleHello = () => {
        const botMessage = createChatBotMessage("Hello. Nice to meet you.");

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleTerimakasih = () => {
        const botMessage = createChatBotMessage(`Sama-sama ! Jika Anda memiliki pertanyaan atau membutuhkan bantuan lebih lanjut, jangan ragu untuk kembal`);

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // =========== Widget Options
    const handleOptions = (message) => {
        if (
            nameUser != null &&
            message != "terimaksih" &&
            message != "Terimaksih" &&
            message != "Makasih" &&
            message != "makasih" &&
            message != "Thanks" &&
            message != "thanks" &&
            message != "suon"
        ) {
            const botMessage = createChatBotMessage(
                `Maaf ${nameUser}, saat ini Saya belum dilengkapi dengan kemampuan pemrosesan bahasa alami (NLP), yang berarti Saya belum bisa memahami pernyataan dengan cara yang sangat alami. Namun, jangan khawatir, Saya siap membantu Anda dalam dua topik di bawah ini:`,
                {
                    widget: "overview",
                }
            );

            return setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage],
            }));
        }

        const botMessage = createChatBotMessage(
            `Coba dua fitur utama yang baru tersedia saat ini. `,
            {
                widget: "overview",
            }
        );

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // ============ Cek Diagnose
    const handleDiagnose = () => {
        const botMessage = createChatBotMessage(
            `Tentu ${nameUser}, Mohon jelaskan dengan Rinci Gejala kulit yang Anda alami. Semakin spesifik informasinya, semakin baik Saya dapat membantu Anda!`
        );
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
        setCekDiagnose(true);

        return botMessage;
    };

    const diagnoseResult = (message) => {
        const botMessage = createChatBotMessage(
            <ResultDiagnoseMessage message={message} />
        );
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
        setCekDiagnose(false);

        return botMessage;
    };

    const diagnoseResultWithImage = (message) => {
        const botMessage = createChatBotMessage(
            <ResultDiagnoseMessageWIthImage message={message} />,
            {
                widget: "overview",
            }
        );
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
        setCekDiagnose(false);

        return botMessage;
    };

    // =========== Cek Hospital
    const handleHospital = () => {
        const botMessage = createChatBotMessage(<MapMessage />, {
            widget: "overview",
        });
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
        setCekDiagnose(false);

        return botMessage;
    };

    // =========== Cek userTesting
    const handleUserTesting = () => {
        const botMessage = createChatBotMessage(<UserTesting />, {
            widget: "overview",
        });
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
        setCekDiagnose(false);

        return botMessage;
    };

    // Put the handleHello and handleDog function in the actions object to pass to the MessageParser
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleTerimakasih,
                        handleOptions,
                        handleNameUser,
                        handleHello,
                        handleDiagnose,
                        diagnoseResult,
                        diagnoseResultWithImage,
                        handleHospital,
                        handleUserTesting,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;
