import React, { createContext, useState } from 'react';

export const RegistrationContext = createContext({
    userInputData: {
        email: '',
        password: '',
        confirmPassword: '',
        displayName: ''
    },
    setUserInputData: () => { },
    errorPasswordMessage: '',
    setErrorPasswordMessage: () => {}
});

const RegistrationProvider = ({ children }) => {
    const [errorPasswordMessage, setErrorPasswordMessage] = useState("");
    const [userInputData, setUserInputData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        displayName: ''
    })
   
    return <RegistrationContext.Provider value={{
        errorPasswordMessage, setUserInputData, setErrorPasswordMessage, userInputData
    }}>{children}</RegistrationContext.Provider>
}

export default RegistrationProvider;