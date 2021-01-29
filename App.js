import React from 'react';
import { enableScreens } from 'react-native-screens';
import Root from 'navigation';
import { Provider, rootStore } from 'stores';

enableScreens();
// import utils from './src/utils';

const App = () => {
    // useEffect(() => {
    //     utils.Firebase.Notification.checkPermission();
    //     utils.Firebase.Notification.init();
    //     utils.Firebase.Notification.registerListener();
    //     return () => {
    //         utils.Firebase.Notification.removeListener();
    //     };
    // }, []);

    return (
        <Provider value={rootStore}>
            <Root />
        </Provider>
    );
};

export default App;
