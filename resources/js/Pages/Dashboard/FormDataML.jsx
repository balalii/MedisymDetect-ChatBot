import { router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";
import Ckeditor from "./Ckeditor";
import RenderHTML from "@/Components/RenderHTML";

export default function FormDataML(props) {
    const [disease, setDisease] = useState("");
    const [desc, setDesc] = useState("");
    const [symptom, setSymptom] = useState("");
    const [treatment, setTreatment] = useState("");
    const [image, setImage] = useState(null);
    const [editorText, setEditorText] = useState(""); // State untuk teks di Ckeditor

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            disease,
            desc,
            symptom,
            treatment,
            image,
            editorText, // Menggunakan state editorText
        };
        router.post("/diagnoses", data, {
            forceFormData: true,
        });
        // kosongkan data
        setDisease("");
        setDesc("");
        setSymptom("");
        setTreatment("");
        setImage(null);

        // tampilkan notifikasi
    };

    return (
        <section className="mt-6 w-[90%] md:w-[50rem] mx-auto transition-all">
            <form
                onSubmit={handleSubmit}
                className="p-3 md:p-8 bg-secondary rounded-xl mx-auto space-y-4"
            >
                <div>
                    <label
                        htmlFor="disease"
                        className="block font-medium text-white text-lg mb-3 mt-6"
                    >
                        Nama Penyakit
                    </label>

                    <input
                        value={disease}
                        required
                        onChange={(e) => setDisease(e.target.value)}
                        type="text"
                        id="disease"
                        placeholder="Nama Penyakit"
                        className="mt-2 py-3 w-full rounded-lg border-gray bg-secondary shadow-sm text-base"
                    />
                </div>

                <div>
                    <label
                        htmlFor="desc"
                        className="block font-medium text-white text-lg mb-3 mt-6"
                    >
                        Deskripsi penyakit
                    </label>

                    {/* <textarea
                        rows={10}
                        value={desc}
                        required
                        onChange={(e) => setDesc(e.target.value)}
                        type="text"
                        id="desc"
                        placeholder="Deskripsi penyakit"
                        className="mt-2 w-full rounded-lg border-gray bg-secondary shadow-sm text-base"
                    ></textarea> */}

                    <Ckeditor onEditorChange={setDesc} editorText={desc} />
                </div>
                <div>
                    <label
                        htmlFor="symptom"
                        className="font-medium text-white text-lg mb-3 mt-6 flex flex-col"
                    >
                        Gejala penyakit
                        <span className="text-sm text-white/60 font-normal">
                            Berikan tanda titik (.) untuk setiap list.
                        </span>
                    </label>

                    <textarea
                        rows={10}
                        value={symptom}
                        required
                        onChange={(e) => setSymptom(e.target.value)}
                        type="text"
                        id="symptom"
                        placeholder="Gejala penyakit"
                        className="mt-2 w-full rounded-lg border-gray bg-secondary shadow-sm text-base"
                    ></textarea>
                </div>
                <div>
                    <label
                        htmlFor="treatment"
                        className="block font-medium text-white text-lg mb-3 mt-6"
                    >
                        Pengobatan/perawatan
                    </label>

                    {/* <textarea
                        rows={10}
                        value={treatment}
                        required
                        onChange={(e) => setTreatment(e.target.value)}
                        type="text"
                        id="treatment"
                        placeholder=" Pengobatan/perawatan"
                        className="mt-2 w-full rounded-lg border-gray bg-secondary shadow-sm text-base"
                    ></textarea> */}

                    <Ckeditor
                        onEditorChange={setTreatment}
                        editorText={treatment}
                    />
                </div>
                <fieldset className="w-full space-y-1 text-gray">
                    <label
                        htmlFor="files"
                        className="block font-medium text-white text-lg mb-3 mt-6"
                    >
                        Gambar Penyakit
                    </label>
                    <div className="flex items-center w-fit">
                        <input
                            type="file"
                            required
                            onChange={(e) => setImage(e.target.files[0])}
                            name="files"
                            id="files"
                            className="px-8 w-full py-7 md:py-12 border-2 border-dashed rounded-lg border-gray text-white bg-secondary"
                        />
                    </div>
                </fieldset>

                <button
                    className="text-base bg-primary text-black font-bold flex-1 rounded-md py-2  items-center justify-center flex flex-row px-14 !mt-12"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </section>
    );
}
