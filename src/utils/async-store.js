import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
    TOKEN: '@Token'
};

const set = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
        return true;
    } catch (e) {
        return false;
    }
};

const get = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        return null;
    }
};

const remove = async (key) => {
    return AsyncStorage.removeItem(key);
};

export const saveToken = (token) => set(KEYS.TOKEN, token);
export const getToken = () => get(KEYS.TOKEN);
export const removeToken = () => remove(KEYS.TOKEN);
