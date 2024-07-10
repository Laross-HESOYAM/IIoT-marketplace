import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [blackBack, setBlackBack] = useState(false);
    const [cont, setCont] = useState()


    return (
        <AuthContext.Provider value={{ cont, setCont, blackBack, setBlackBack }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;