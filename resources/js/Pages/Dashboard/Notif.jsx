export default function Notif({ value, onClick }) {
    return (
        <div className="capitalize flex flex-row pl-4 py-2 gap-2 items-center border rounded-lg shadow overflow-hidden bg-secondary border-green mb-8">
            <span className="flex-shrink-0 inline-flex mx-2 item-center justify-center leadi rounded-full text-primary ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 fill"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </span>
            <div className="flex-1 p-2">
                <p className="text-sm text-white">{value}</p>
            </div>
            <button
                type="button"
                className="ml-6 p-2 text-white/75"
                onClick={onClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </button>
        </div>
    );
}
