import CardDiseasesUpdateDelete from "./CardDiseasesUpdateDelete";
import Pagination from "./Pagination";

export default function CardDiseasesList(props) {
    return (
        <section className="flex flex-col items-center justify-center !mt-6">
            <div className="flex flex-row justify-center flex-wrap md:w-[95%] lg:w-[80%] space-y-4 md:space-y-0 items-start">
                {props.diseasesDataDB.data.map((data, idx) => (
                    <CardDiseasesUpdateDelete key={idx} {...data} />
                ))}
            </div>
            {/* pagination */}
            <Pagination {...props} />
        </section>
    );
}
