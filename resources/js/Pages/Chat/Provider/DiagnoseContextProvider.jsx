import React, { createContext, useContext, useState } from "react";

const DiagnoseContext = createContext();

export const DiagnoseContextProvider = ({ children }) => {
    const [nameUser, setNameUser] = useState(null);
    const [userTesting, setUserTesting] = useState(null);
    const [diseaseData, setDiseaseData] = useState(null);
    const [cekDiagnose, setCekDiagnose] = useState(false);

    return (
        <DiagnoseContext.Provider
            value={{
                nameUser,
                setNameUser,
                userTesting,
                setUserTesting,
                diseaseData,
                setDiseaseData,
                cekDiagnose,
                setCekDiagnose,
            }}
        >
            {children}
        </DiagnoseContext.Provider>
    );
};

export const useDiagnoseContext = () => useContext(DiagnoseContext);
