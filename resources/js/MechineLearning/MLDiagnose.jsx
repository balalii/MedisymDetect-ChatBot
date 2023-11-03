import { useDiagnoseContext } from "@/Pages/Chat/Provider/DiagnoseContextProvider";

export default function MLDiagnose(input) {
    const { diseaseData } = useDiagnoseContext();

    if (!diseaseData) {
        return null; // Menangani kasus ketika data belum tersedia
    }
    // console.log(diseaseData);
    // const datass = [
    //     {
    //         text: "Kulit merah dan gatal, terutama di area lipatan kulit.",
    //         class: "Dermatitis Atopik",
    //     },
    //     {
    //         text: "Timbul bintil-bintil merah yang gatal dan bersisik di kulit.",
    //         class: "Psoriasis",
    //     },
    //     {
    //         text: "Luka terbuka dan berair pada kulit, terutama setelah kontak dengan zat tertentu.",
    //         class: "Dermatitis Kontak",
    //     },
    //     {
    //         text: "Bercak merah dengan sisik putih di tengahnya yang terasa gatal.",
    //         class: "Lichen Planus",
    //     },
    //     {
    //         text: "Timbul benjolan kecil di bawah kulit, biasanya tidak gatal atau sakit.",
    //         class: "Kista Epidermal",
    //     },
    //     {
    //         text: "Kulit bersisik, kering, dan seringkali terasa gatal.",
    //         class: "Eksim",
    //     },
    //     {
    //         text: "Timbul lepuh kecil yang berair dan gatal di sekitar mulut atau wajah.",
    //         class: "Herpes Simpleks",
    //     },
    //     {
    //         text: "Timbul bercak merah yang melepuh dan terasa nyeri, biasanya di area sekitar mulut.",
    //         class: "Herpes Zoster",
    //     },
    //     {
    //         text: "Kulit merah, bengkak, dan sangat gatal setelah kontak dengan alergen tertentu.",
    //         class: "Urtikaria",
    //     },
    // ];

    // Input gejala dari pengguna
    const userInput = input;

    // Menghitung total data
    const totalData = diseaseData.length;

    // Menghitung jumlah kelas yang ada
    const classes = [...new Set(diseaseData.map((item) => item.disease))];
    const totalClasses = classes.length;

    // Menghitung probabilitas masing-masing kelas
    const classProbabilities = {};
    classes.forEach((classValue) => {
        const classCount = diseaseData.filter(
            (item) => item.disease === classValue
        ).length;
        const classProbability = classCount / totalData;
        classProbabilities[classValue] = classProbability;
    });

    // Menghitung probabilitas masing-masing kelas berdasarkan kata input pengguna
    const probabilityResults = {};

    // Faktor smoothing (Laplace smoothing)
    const smoothingFactor = 1;

    classes.forEach((classValue) => {
        const classOccurrences = diseaseData.filter(
            (item) => item.disease === classValue
        );
        const classOccurrenceCount = classOccurrences.length;
        const classOccurrenceProbability = classOccurrenceCount / totalData;

        let wordOccurrencesInClass = 0;
        const inputWords = userInput.split(" ");

        inputWords.forEach((inputWord) => {
            let wordFound = false;
            classOccurrences.forEach((occurrence) => {
                if (
                    occurrence.symptom
                        .toLowerCase()
                        .includes(inputWord.toLowerCase())
                ) {
                    wordFound = true;
                }
            });
            if (wordFound) {
                wordOccurrencesInClass++;
            }
        });

        const naiveBayesProbability =
            (((wordOccurrencesInClass + smoothingFactor) /
                (classOccurrenceCount + smoothingFactor * inputWords.length)) *
                classProbabilities[classValue]) /
            classOccurrenceProbability;

        probabilityResults[classValue] = naiveBayesProbability;
    });

    // Menampilkan empat data dengan probabilitas tertinggi
    const sortedProbabilityResults = Object.keys(probabilityResults)
        .sort((a, b) => probabilityResults[b] - probabilityResults[a])
        .slice(0, 6);

    const datas = {
        symptomInput: userInput,
        probabilitas: [],
        highest: {
            id: null,
            image: null,
            disease: null,
            desc: null,
            symptom: null,
            treatment: null,
            probability: null,
        },
    };

    if (
        sortedProbabilityResults.every(
            (val) =>
                probabilityResults[val] ===
                probabilityResults[sortedProbabilityResults[0]]
        )
    ) {
        console.warn("Data gejala tidak akurat");
        // return datas;
    } else {
        sortedProbabilityResults.forEach((classValue) => {
            const probability = probabilityResults[classValue];
            const matchingDisease = diseaseData.find(
                (item) => item.disease === classValue
            );
            datas.probabilitas.push({
                id: matchingDisease.id, // Use the ID from diseaseData
                image: matchingDisease.image, // Use the IMAGE from diseaseData
                disease: classValue,
                desc: matchingDisease.desc, // Use the DESC from diseaseData
                treatment: matchingDisease.treatment, // Use the TREATMENT from diseaseData
                symptom: matchingDisease.symptom, // Use the SYMTOM from diseaseData
                probability:
                    probability === 1 ? "100" : (probability * 100).toFixed(2),
            });
        });

        const highestDisease = probabilityResults[sortedProbabilityResults[0]];
        const highestDiseaseMatch = diseaseData.find(
            (item) => item.disease === sortedProbabilityResults[0]
        );
        datas.highest.id = highestDiseaseMatch.id; // Use the ID from diseaseData
        datas.highest.image = highestDiseaseMatch.image; // Use the IMAGE from diseaseData
        datas.highest.disease = sortedProbabilityResults[0];
        datas.highest.desc = highestDiseaseMatch.desc; // Use the DESC from diseaseData
        datas.highest.treatment = highestDiseaseMatch.treatment; // Use the TREATMENT from diseaseData
        datas.highest.symptom = highestDiseaseMatch.symptom; // Use the SYMTOM from diseaseData
        datas.highest.probability =
            highestDisease === 1 ? "100" : (highestDisease * 100).toFixed(2);

        // console.log(datas);
        return datas;
    }
}
