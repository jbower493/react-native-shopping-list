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

type Token = {
    token: string;
}

interface LoginPayload {
    username: string;
    password: string;
}

export interface AuthContextValue {
    getUser: () => void;
    auth_get_user_status: Statuses;
    auth_get_user_data: User | null;
    login: (payload: LoginPayload) => void;
    auth_login_status: Statuses;
    auth_login_data: Token | null;
}

export const AuthContext = createContext<AuthContextValue>({
    getUser: () => {},
    auth_get_user_status: Statuses.None,
    auth_get_user_data: null,
    login: () => {},
    auth_login_status: Statuses.None,
    auth_login_data: null,
})

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [getUserStatus, setGetUserStatus] = useState<Statuses>(Statuses.None)
    const [getUserData, setGetUserData] = useState<User | null>(null)

    const [loginStatus, setLoginStatus] = useState<Statuses>(Statuses.None)
    const [loginData, setLoginData] = useState<Token | null>(null)

    const getUser = (token?: string) => {
        setGetUserStatus(Statuses.Loading)
        axios.get('/api/auth/get-user', {
            headers: {
                Authorization: `Bearer ${token || ''}`,
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

    const login = (payload: LoginPayload) => {
        setLoginStatus(Statuses.Loading)
        axios({
            method: 'post',
            url: '/api/auth/login',
            data: payload,
        })
            .then(response => {
                setLoginStatus(Statuses.Success)
                setLoginData({ token: response.data.token })

                // Re-fetch user after successful login
                getUser(response.data.token)
            })
            .catch(() => {
                setLoginStatus(Statuses.Error)
            })
    }

    const authContextValue = useMemo<AuthContextValue>(() => ({
        getUser,
        auth_get_user_status: getUserStatus,
        auth_get_user_data: getUserData,
        login,
        auth_login_status: loginStatus,
        auth_login_data: loginData,
    }), [getUserStatus, getUserData, loginStatus, loginData])

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
