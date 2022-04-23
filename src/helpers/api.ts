import axios, { AxiosRequestConfig } from 'axios'
import secureStore from 'src/helpers/secureStore'

const authorizedAxios = (config: AxiosRequestConfig) => secureStore.get(secureStore.keys.authToken)
    .then(token => axios({
        ...config,
        headers: {
            Authorization: `Bearer ${token || ''}`,
        },
    }))

export default authorizedAxios
