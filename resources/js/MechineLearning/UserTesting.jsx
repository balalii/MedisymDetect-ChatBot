import { useDiagnoseContext } from "@/Pages/Chat/Provider/DiagnoseContextProvider";
import { Link } from "@inertiajs/react";

export default function UserTesting() {
    const { userTesting } = useDiagnoseContext();

    // Function to format the date string
    const formatDateString = (dateString) => {
        const dateObject = new Date(dateString);
        const year = dateObject.getFullYear();
        const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Month is zero-based
        const day = String(dateObject.getDate()).padStart(2, "0");
        const hours = String(dateObject.getHours()).padStart(2, "0");
        const minutes = String(dateObject.getMinutes()).padStart(2, "0");
        const seconds = String(dateObject.getSeconds()).padStart(2, "0");
        return `${hours}:${minutes}:${seconds} | ${day}-${month}-${year} `;
    };

    return (
        <>
            <p>Nih bang catatan User testing :</p>
            <section className="flex flex-col justify-between items-start flex-wrap mt-5">
                {userTesting.map((data, idx) => (
                    <ul className="mb-5" key={idx}>
                        <li>
                            Name :{" "}
                            <span className="text-primary">
                                {" "}
                                {data.name_user}
                            </span>
                        </li>
                        <li>
                            Probabilitas Penyakit :{" "}
                            <span className="text-primary">{data.symptom}</span>
                        </li>
                        <li>
                            Presentase Probabilitas :{" "}
                            <span className="text-primary">
                                {data.probability}%
                            </span>
                        </li>
                        <li>
                            Gejala :{" "}
                            <span className="text-primary">{data.disease}</span>
                        </li>
                        <li>
                            Time :{" "}
                            <span className="text-white/40">
                                {formatDateString(data.updated_at)}
                            </span>
                        </li>
                    </ul>
                ))}
                <Link
                    onClick={() => alert("Data berhasil dihapus !")}
                    className="border border-red px-12 py-2.5 text-red rounded-lg"
                    method="post"
                    href={route("delete.chats")}
                >
                    Delele All Data
                </Link>
            </section>
        </>
    );
}
