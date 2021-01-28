/**
 * Management app info
 */
import { types } from 'mobx-state-tree';
import RNBootSplash from 'react-native-bootsplash';

export const INIT = {
    isShowedSplash: false,
    loading: false
};

const AppStore = types
    .model({
        isShowedSplash: types.boolean,
        loading: types.boolean
    })
    .actions((self) => {
        const showedSplash = () => {
            self.isShowedSplash = true;
        };
        const setLoading = (value) => {
            self.loading = value;
        };
        /**
         * init: check login when launch app
         */
        const init = () => {
            showedSplash();
            RNBootSplash.hide({ fade: true });
        };
        return {
            init,
            setLoading
        };
    });

export default AppStore.create(INIT);
