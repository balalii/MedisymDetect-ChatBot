// in config.js
import { createChatBotMessage } from "react-chatbot-kit";
import Overview from "./widgets/Overview";
import CoBotAvatar from "./CoBotAvtar";

const botName = import.meta.env.VITE_APP_NAME;

const ConfigChat = {
    initialMessages: [
        createChatBotMessage(
            `Hai! Saya adalah ${botName}, asisten yang siap membantu Anda.`
        ),
        createChatBotMessage(
            `Untuk memberikan layanan yang lebih baik, mungkin Saya bisa tahu nama Anda terlebih dahulu?`
        ),
    ],
    botName: botName,
    customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
    widgets: [
        {
            widgetName: "overview",
            widgetFunc: (props) => <Overview {...props} />,
            mapStateToProps: ["messages"],
        },
    ],
};

export default ConfigChat;
