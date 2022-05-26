import React, {
    useState,
    createContext,
    ReactNode,
    useMemo,
} from 'react'
import authorizedAxios from 'src/helpers/api'
import { Statuses } from 'src/containers/auth/authContext'

interface ListsContextProviderProps {
    children: ReactNode
}

export type List = {
    name: string;
}

export interface ListsContextValue {
    getLists: () => void;
    lists_get_lists_status: Statuses;
    lists_get_lists_data: List[] | null;
}

export const ListsContext = createContext<ListsContextValue>({
    getLists: () => { },
    lists_get_lists_status: Statuses.None,
    lists_get_lists_data: null,
})

const ListsContextProvider = ({ children }: ListsContextProviderProps) => {
    const [getListsStatus, setGetListsStatus] = useState<Statuses>(Statuses.None)
    const [getListsData, setGetListsData] = useState<List[] | null>(null)

    const getLists = () => {
        setGetListsStatus(Statuses.Loading)

        authorizedAxios({
            method: 'get',
            url: '/api/list',
        })
            .then(response => {
                setGetListsStatus(Statuses.Success)
                setGetListsData(response.data.lists)
            })
            .catch(() => {
                setGetListsStatus(Statuses.Error)
            })
    }

    const listsContextValue = useMemo<ListsContextValue>(() => ({
        getLists,
        lists_get_lists_status: getListsStatus,
        lists_get_lists_data: getListsData,
    }), [getListsStatus, getListsData])

    return (
        <ListsContext.Provider value={listsContextValue}>
            {children}
        </ListsContext.Provider>
    )
}

export default ListsContextProvider
