import LiItem from "@/Components/Card/LiItem";
import { Dialog, Transition } from "@headlessui/react";
import { Link, router } from "@inertiajs/react";
import { Fragment, useState } from "react";
import Ckeditor from "./Ckeditor";
import RenderHTML from "@/Components/RenderHTML";

export default function CardDiseasesUpdateDelete(dataDiseases) {
    let [isOpenView, setIsOpenView] = useState(false);
    let [isOpenUpdate, setIsOpenUpdate] = useState(false);

    // view ================
    function closeModalView() {
        setIsOpenView(false);
    }

    function openModalView() {
        setIsOpenView(true);
    }

    // update ==============
    function closeModalUpdate() {
        setIsOpenUpdate(false);
    }

    function openModalUpdate() {
        setIsOpenUpdate(true);
    }

    // form Update
    const [id, setID] = useState(dataDiseases.id);
    const [disease, setDisease] = useState(dataDiseases.disease);
    const [desc, setDesc] = useState(dataDiseases.desc);
    const [symptom, setSymptom] = useState(dataDiseases.symptom);
    const [treatment, setTreatment] = useState(dataDiseases.treatment);
    const [image, setImage] = useState(dataDiseases.image);

    const handleSubmitUpdate = (e) => {
        e.preventDefault();
        const data = {
            id,
            disease,
            desc,
            symptom,
            treatment,
            image,
        };
        router.post("/diagnoses/update", data, {
            forceFormData: true,
        });

        return closeModalUpdate();
    };

    // delete =============
    let [isOpenDelete, setIsOpenDelete] = useState(false);
    function closeModalDelete() {
        setIsOpenDelete(false);
    }

    function openModalDelete() {
        setIsOpenDelete(true);
    }

    return (
        <>
            <Card
                onClickView={openModalView}
                onClickUpdate={openModalUpdate}
                onClickDelete={openModalDelete}
                disease={dataDiseases.disease}
                image={dataDiseases.image}
                probability={dataDiseases.probability}
            />

            {/* ============= View modal ============= */}
            <Transition appear show={isOpenView} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={closeModalView}
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
                        <div className="fixed inset-0 bg-black bg-opacity-80" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
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
                                <Dialog.Panel className="!w-full md:!w-[83%] lg:!w-[63%]  transform overflow-hidden rounded-2xl bg-secondary text-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="flex flex-row justify-between items-center">
                                        <div className="flex-1 flex flex-row items-center ">
                                            <svg
                                                onClick={closeModalView}
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
                                                className="flex-1 ml-5 md:pl-0 max-w-[70%] line-clamp-1 text-lg md:text-2xl font-medium leading-6 text-gray-900 "
                                            >
                                                {dataDiseases.disease}
                                            </Dialog.Title>
                                        </div>
                                    </div>
                                    <div className="mt-7 space-y-7 text-sm md:text-base">
                                        <img
                loading="lazy"
                                            className="rounded-xl  mt-2 w-full aspect-[4/2.3] md:aspect-[4/1.7] object-cover"
                                            src={`storage/images/diseases/${dataDiseases.image}`}
                                            alt=""
                                        />
                                        <RenderHTML
                                            htmlContent={dataDiseases.desc}
                                        />

                                        <div className="space-y-3 hidden">
                                            <h2 className="font-semibold">
                                                Gejala
                                            </h2>
                                            <ul className="list-disc list-outside ml-6">
                                                <LiItem
                                                    data={dataDiseases.symptom}
                                                />
                                            </ul>
                                        </div>
                                        <div className="space-y-3">
                                            {/* <h2 className="font-semibold">
                                                Pengobatan
                                            </h2> */}
                                            <RenderHTML
                                                htmlContent={
                                                    dataDiseases.treatment
                                                }
                                            />
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* ============= Update modal ============= */}
            <Transition appear show={isOpenUpdate} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={closeModalUpdate}
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
                        <div className="fixed inset-0 bg-black bg-opacity-80" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
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
                                <Dialog.Panel className="!w-full md:!w-[63%]  transform overflow-hidden rounded-2xl bg-secondary text-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="flex flex-row justify-between items-center mb-10">
                                        <div className="flex-1 flex flex-row items-center ">
                                            <svg
                                                onClick={closeModalUpdate}
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
                                                className="flex-1 ml-5 md:pl-0 max-w-[70%] line-clamp-1 text-lg md:text-2xl font-medium leading-6 text-gray-900 "
                                            >
                                                Update Data "
                                                {dataDiseases.disease}"
                                            </Dialog.Title>
                                        </div>
                                    </div>
                                    <form
                                        onSubmit={handleSubmitUpdate}
                                        className="p-0 md:p-4 bg-secondary rounded-xl mx-auto space-y-4"
                                    >
                                        <div>
                                            <label
                                                htmlFor="desiases"
                                                className="block font-medium text-white text-lg mb-3 mt-6 "
                                            >
                                                Nama Penyakit
                                            </label>

                                            <input
                                                value={disease}
                                                required
                                                onChange={(e) =>
                                                    setDisease(e.target.value)
                                                }
                                                type="text"
                                                id="disease"
                                                placeholder="Nama Penyakit"
                                                className="mt-2 py-3 w-full rounded-lg border-gray bg-secondary  shadow-sm text-base"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="desc"
                                                className="block font-medium text-white text-lg mb-3 mt-6 "
                                            >
                                                Deskripsi penyakit
                                            </label>
                                            <Ckeditor
                                                onEditorChange={setDesc}
                                                editorText={desc}
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="symptom"
                                                className=" font-medium text-white text-lg mb-3 mt-6 flex flex-col "
                                            >
                                                Gejela penyakit
                                                <span className="text-sm text-white/60 font-normal">
                                                    Berikan tanda titik {"(.)"}{" "}
                                                    untuk setiap list.
                                                </span>
                                            </label>

                                            <textarea
                                                rows={10}
                                                value={symptom}
                                                required
                                                onChange={(e) =>
                                                    setSymptom(e.target.value)
                                                }
                                                type="text"
                                                id="symptom"
                                                placeholder="Gejala penyakit"
                                                className="mt-2 w-full rounded-lg border-gray bg-secondary  shadow-sm text-base"
                                            ></textarea>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="treatment"
                                                className="block font-medium text-white text-lg mb-3 mt-6 "
                                            >
                                                Pengobatan/perawatan
                                            </label>
                                            <Ckeditor
                                                onEditorChange={setTreatment}
                                                editorText={treatment}
                                            />
                                        </div>
                                        <fieldset className="w-full space-y-1 text-gray">
                                            <label
                                                htmlFor="file"
                                                className="block font-medium text-white text-lg mb-3 mt-6 "
                                            >
                                                Gambar Penyakit
                                            </label>
                                            <div className="flex items-center w-fit">
                                                <input
                                                    type="file"
                                                    // value={image}
                                                    onChange={(e) =>
                                                        setImage(
                                                            e.target.files[0]
                                                        )
                                                    }
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
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* ============= delete modal ============= */}
            <Transition appear show={isOpenDelete} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={closeModalDelete}
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
                        <div className="fixed inset-0 bg-black bg-opacity-80" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
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
                                <Dialog.Panel className="!w-full md:!w-[69%] lg:!w-[39%]  transform overflow-hidden rounded-2xl bg-secondary text-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="flex flex-row justify-between items-center">
                                        <div className="flex-1 flex flex-row items-center justify-between ">
                                            <Dialog.Title
                                                as="h3"
                                                className="flex-1 ml-3 md:pl-0 max-w-[70%] line-clamp-1 text-lg md:text-2xl font-medium leading-6 text-gray-900 "
                                            >
                                                Hapus data "
                                                {dataDiseases.disease}"
                                            </Dialog.Title>
                                            <svg
                                                onClick={closeModalDelete}
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
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="px-3 flex flex-col space-y-5 items-start mt-4">
                                        <p className="text-lg">
                                            Anda yakin ingin menghapus data ini
                                            ?
                                        </p>
                                        <Link
                                            className="bg-red px-12 py-2.5 text-white rounded-lg no-underline"
                                            data={{
                                                id: dataDiseases.id,
                                                image: dataDiseases.image,
                                            }}
                                            method="post"
                                            onClick={closeModalDelete}
                                            href={route("delete.diagnoses")}
                                        >
                                            Delele
                                        </Link>
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

export function Card({
    onClickView,
    onClickUpdate,
    onClickDelete,
    disease,
    image,
}) {
    return (
        <div className="border-2 border-gray group rounded-xl md:rounded-xl p-3 md:p-4  w-[80%] md:!w-[30%] md:mb-8 md:mx-3 cursor-pointer">
            <div
                className="flex flex-row justify-between items-center text-sm md:text-base "
                onClick={onClickView}
            >
                <h2 className="flex-1 line-clamp-1 text-xl">{disease}</h2>
            </div>
            <img
                loading="lazy"
                onClick={onClickView}
                className="rounded-lg md:rounded-lg mt-2 aspect-[4/2.3] w-full object-cover"
                src={`storage/images/diseases/${image}`}
                alt=""
            />
            <div className="flex flex-row  justify-between space-x-3 !mt-5 items-center">
                <button
                    onClick={onClickUpdate}
                    className=" text-sm md:text-xs lg:text-sm bg-primary text-black font-bold flex-1 rounded-md py-2  items-center justify-center flex flex-row"
                >
                    Update Data
                </button>
                <button
                    onClick={onClickDelete}
                    className="bg-gray text-white/80 font-bold flex-1 rounded-md py-2  text-sm md:text-xs lg:text-sm items-center justify-center flex flex-row"
                >
                    Delete Data
                </button>
            </div>
        </div>
    );
}
