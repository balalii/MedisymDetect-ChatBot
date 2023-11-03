export default function Pagination(props) {
    return (
        <div className="flex justify-center space-x-3 text-white mt-10">
            {!!props.diseasesDataDB.links.prev && (
                <a href={props.diseasesDataDB.links.prev}>
                    <button
                        title="previous"
                        type="button"
                        className="inline-flex items-center justify-center w-10 h-10 py-0 border rounded-md shadow-md bg-secondary border-secondary"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4"
                        >
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                </a>
            )}

            {props.diseasesDataDB.meta.links
                .filter(
                    (link) =>
                        link.label !== "&laquo; Previous" &&
                        link.label !== "Next &raquo;"
                )
                .map((data, idx) => (
                    <a key={idx} href={data.url}>
                        <button
                            type="button"
                            title={data.label}
                            className={`inline-flex items-center justify-center w-10 h-10 text-base font-semibold border rounded shadow-md bg-secondary ${
                                data.active
                                    ? "border-primary text-primary"
                                    : "border-secondary"
                            }`}
                        >
                            {data.label}
                        </button>
                    </a>
                ))}

            {!!props.diseasesDataDB.links.next && (
                <a href={props.diseasesDataDB.links.next}>
                    <button
                        title="next"
                        type="button"
                        className="inline-flex items-center justify-center w-10 h-10 py-0 border rounded-md shadow-md bg-secondary border-secondary"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4"
                        >
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </a>
            )}
        </div>
    );
}
