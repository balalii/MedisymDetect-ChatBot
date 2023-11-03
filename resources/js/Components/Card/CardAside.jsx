export default function CardAside({ desc, svg, collor }) {
    return (
        <div className="bg-secondary text-white w-[9rem] md:w-full rounded-2xl p-4">
            <div
                className={`${collor} text-black w-fit rounded-full p-1.5 mb-5`}
            >
                {svg}
            </div>
            <p className="text-sm text-clip">{desc}</p>
        </div>
    );
}
