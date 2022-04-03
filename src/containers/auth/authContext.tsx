import React, {
    useState,
    createContext,
    ReactNode,
    useMemo,
} from 'react'

interface AuthContextProviderProps {
    children: ReactNode
}

export interface AuthContextValue {
    loggedIn: Boolean,
    login: () => void
}

export const AuthContext = createContext<AuthContextValue>({
    loggedIn: false,
    login: () => {},
})

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [loggedIn, setLoggedIn] = useState<Boolean>(false)

    const login = (): void => {
        setLoggedIn(true)
    }

    const authContextValue = useMemo<AuthContextValue>(() => ({
        loggedIn,
        login,
    }), [loggedIn])

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
