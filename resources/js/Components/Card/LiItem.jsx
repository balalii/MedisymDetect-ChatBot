export default function LiItem({ data }) {
    return data
        .split(".")
        .map((item, index, array) => (
            <li key={index}>
                {index === array.length - 1 ? item.trim() : item.trim() + "."}
            </li>
        ))
        .filter(
            (item, index, array) =>
                index !== array.length - 1 &&
                item.key !== (array.length - 1).toString()
        ); // Menghapus <li> dari item terakhir
}
