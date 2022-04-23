import React, {
    useState,
    createContext,
    ReactNode,
    useMemo,
} from 'react'
import axios from 'axios'

export enum Statuses {
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
    logout: () => void;
    auth_logout_status: Statuses;
}

export const AuthContext = createContext<AuthContextValue>({
    getUser: () => {},
    auth_get_user_status: Statuses.None,
    auth_get_user_data: null,
    login: () => {},
    auth_login_status: Statuses.None,
    auth_login_data: null,
    logout: () => {},
    auth_logout_status: Statuses.None,
})

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [getUserStatus, setGetUserStatus] = useState<Statuses>(Statuses.None)
    const [getUserData, setGetUserData] = useState<User | null>(null)

    const [loginStatus, setLoginStatus] = useState<Statuses>(Statuses.None)
    const [loginData, setLoginData] = useState<Token | null>(null)

    const [logoutStatus, setLogoutStatus] = useState<Statuses>(Statuses.None)

    const getUser = (token?: string) => {
        setGetUserStatus(Statuses.Loading)
        axios({
            method: 'get',
            url: '/api/auth/get-user',
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

    const logout = () => {
        setLogoutStatus(Statuses.Loading)
        axios({
            method: 'get',
            url: '/api/auth/logout',
            headers: {
                Authorization: `Bearer ${'732d1557-e977-472f-9a9a-aa0b3ec982b5'}`,
            },
        })
            .then(() => {
                setLogoutStatus(Statuses.Success)
                setGetUserData(null)
            })
            .catch(() => {
                setLogoutStatus(Statuses.Error)
            })
    }

    const authContextValue = useMemo<AuthContextValue>(() => ({
        getUser,
        auth_get_user_status: getUserStatus,
        auth_get_user_data: getUserData,
        login,
        auth_login_status: loginStatus,
        auth_login_data: loginData,
        logout,
        auth_logout_status: logoutStatus,
    }), [getUserStatus, getUserData, loginStatus, loginData, logoutStatus])

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
