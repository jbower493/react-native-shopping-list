import * as SecureStore from 'expo-secure-store'

enum SecureStoreKeys {
    AUTH_TOKEN = 'auth_token',
}

interface SecureStoreT {
    keys: {
        authToken: SecureStoreKeys.AUTH_TOKEN;
    },
    save: (key: string, value: string) => Promise<void>;
    delete: (key: string) => Promise<void>;
    get: (key: string) => Promise<string | null>;
}

const secureStore: SecureStoreT = {
    keys: {
        authToken: SecureStoreKeys.AUTH_TOKEN,
    },

    async save(key, value) {
        await SecureStore.setItemAsync(key, value)
    },

    async delete(key) {
        await SecureStore.deleteItemAsync(key)
    },

    async get(key) {
        const value = await SecureStore.getItemAsync(key)

        return value || null
    },
}

export default secureStore
