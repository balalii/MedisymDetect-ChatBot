import { DiagnoseContextProvider } from "@/Pages/Chat/Provider/DiagnoseContextProvider";
import Chat from "./Chat";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function Chats(props) {
    return (
        <>
            <Head>
                <title>Chats - </title>
                <meta
                    name="description"
                    content="Fitur chatbot model kami memanfaatkan kecerdasan buatan (AI) untuk memberikan pengalaman berkomunikasi yang canggih dan efisien. Anda dapat berinteraksi dengan chatbot kami untuk mendapatkan informasi, jawaban, dan bantuan dalam waktu nyata."
                />
            </Head>
            <DiagnoseContextProvider>
                <Layout>
                    <Chat {...props} />
                </Layout>
            </DiagnoseContextProvider>
        </>
    );
}
