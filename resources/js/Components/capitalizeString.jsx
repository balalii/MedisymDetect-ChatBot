export default function capitalizeString(str) {
    // Memisahkan string menjadi array kata-kata
    const words = str.split(" ");

    // Mengkapitalisasi huruf pertama dari setiap kata
    const capitalizedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Menggabungkan kata-kata yang telah dikapitalisasi menjadi satu string
    return capitalizedWords.join(" ");
}
