import Options from "./Options";

const GeneralOptions = (props) => {
    const options = [
        {
            name: "Cek Diagnosis Kulit",
            desc: "Mengidentifikasi masalah kulit dan memberikan informasi yang relevan.",
            handler: props.actionProvider.handleDiagnose,
            id: 1,
        },
        {
            name: "Rumah Sakit Terdekat",
            desc: "Menemukan fasilitas medis terdekat. Anda dapat memilih opsi ini. Bagaimana Saya bisa membantu Anda?",
            handler: props.actionProvider.handleHospital,
            id: 2,
        },
    ];
    return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
