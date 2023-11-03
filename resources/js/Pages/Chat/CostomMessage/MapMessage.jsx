import CardMap from "@/Components/Card/CardMap";
import _HOSPITAL from "@/utils/_HOSPITAL";

const MapMessage = () => {
    return (
        <>
            <p>
                Berikut beberapa lokasi Rumah Sakit atau Klinik terdekat dengan
                anda:
            </p>
            <section className="flex flex-row justify-start  items-start flex-wrap mt-7">
                {_HOSPITAL.map((data, idx) => (
                    <CardMap key={idx} hospital={data} />
                ))}
            </section>
            <p>
                Saya selalu di sini untuk membantu Anda. Untuk melanjutkan, Anda
                dapat memilih salah satu dari dua fitur berikut ini sesuai
                kebutuhan Anda:
            </p>
        </>
    );
};

export default MapMessage;
