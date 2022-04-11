import React, {
    useState,
    createContext,
    ReactNode,
    useMemo,
} from 'react'
import axios from 'axios'

enum Statuses {
    None = 'none',
    Loading = 'loading',
    Success = 'success',
    Error = 'error',
}

interface AuthContextProviderProps {
    children: ReactNode
}

type User = {
    username: string;
}

export interface AuthContextValue {
    getUser: () => void;
    auth_get_user_status: Statuses;
    auth_get_user_data: User | null
}

export const AuthContext = createContext<AuthContextValue>({
    getUser: () => {},
    auth_get_user_status: Statuses.None,
    auth_get_user_data: null,
})

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [getUserStatus, setGetUserStatus] = useState<Statuses>(Statuses.None)
    const [getUserData, setGetUserData] = useState<User | null>(null)

    const getUser = () => {
        setGetUserStatus(Statuses.Loading)
        axios.get('/api/auth/get-user', {
            headers: {
                Authorization: `Bearer ${'152e6745-00e6-4f08-a43d-1678110377e0'}`,
            },
        })
            .then(response => {
                setGetUserStatus(Statuses.Success)
                setGetUserData(response.data.user)
            })
            .catch(() => {
                setGetUserStatus(Statuses.Error)
            })
    }

    const authContextValue = useMemo<AuthContextValue>(() => ({
        getUser,
        auth_get_user_status: getUserStatus,
        auth_get_user_data: getUserData,
    }), [getUserStatus, getUserData])

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
