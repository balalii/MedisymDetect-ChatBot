// in MessageParser.jsx
import { useDiagnoseContext } from "@/Pages/Chat/Provider/DiagnoseContextProvider";
import React, { useState } from "react";

const MessageParser = ({ children, actions }) => {
    const { cekDiagnose, nameUser, setNameUser } = useDiagnoseContext();

    const parse = (message) => {
        if (nameUser === null) {
            actions.handleNameUser(message);
            return actions.handleOptions(message);
        }

        if (message.includes("terimaksih" ) || message.includes('Terimaksih') || message.includes('Makasih') || message.includes('makasih') || message.includes('Thanks') || message.includes('thanks') || message.includes('suon')) {
            return actions.handleTerimakasih();
        }

        if (message.includes("hello")) {
            return actions.handleHello();
        }

        if (message.includes("Diagnosis")) {
            return actions.handleDiagnose();
        }

        if (cekDiagnose) {
             actions.diagnoseResult(message);
             return actions.diagnoseResultWithImage(message);
        }
        if (message.includes("cek dong bang")) {
            return actions.handleUserTesting();
        }
        actions.handleOptions();
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;
