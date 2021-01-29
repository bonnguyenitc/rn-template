import { useContext, createContext } from 'react';
import { autorun } from 'mobx';
// eslint-disable-next-line import/no-extraneous-dependencies
import appStore from './app-store';

const initialState = {
    appStore
};

autorun(() => {
    appStore.setLoading(false);
});

export const rootStore = initialState;

const RootStoreContext = createContext(null);

export const { Provider } = RootStoreContext;

export function useStores() {
    const store = useContext(RootStoreContext);
    if (store === null) {
        throw new Error('Store cannot be null, please add a context provider');
    }
    return store;
}
