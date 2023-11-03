import ModalCard from "./ModalCard";

export default function Cards(resulMLDiagnose) {
    return (
        <>
            <section className="flex flex-row flex-wrap w-full justify-start !mt-8">
                {resulMLDiagnose.probabilitas.map((data, idx) => (
                    <ModalCard
                        key={idx}
                        listProbability={resulMLDiagnose.probabilitas}
                        {...data}
                    />
                ))}
            </section>
        </>
    );
}