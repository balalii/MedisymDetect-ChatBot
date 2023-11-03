export default function Hallo({ data }) {
    // console.log(data);
    return (
        <>
            <h1 className="bg-gray-400">{data.gejala} </h1>
            <ul>
                {data.probabilitas.map((data, i) => (
                    <li key={i}>
                        {data.namaPenyakit} {data.presentase}%
                    </li>
                ))}
                <li className="bg-emerald-200">
                    Probabilitas penyakit : {data.highest.namaPenyakit}{" "}
                    {data.highest.presentase}%
                </li>
            </ul>
        </>
    );
}
