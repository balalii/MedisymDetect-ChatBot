import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { useEffect } from "react";
import { useDiagnoseContext } from "@/Pages/Chat/Provider/DiagnoseContextProvider";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import ConfigChat from "./ConfigChat";
import "../../../css/Chat.css";

export default function Chat(props) {
    // console.log(props.diseasesDataDB);
    const { setUserTesting } = useDiagnoseContext();
    const { setDiseaseData } = useDiagnoseContext();
    useEffect(() => {
        if (props.diseasesDataDB) {
            setUserTesting(props.userTestingDB);
            setDiseaseData(props.diseasesDataDB);
        }
    }, []);
    return (
        <Chatbot
            config={ConfigChat}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            disableScrollToBottom={true}
        />
    );
}
