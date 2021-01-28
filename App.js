import React from 'react';
import { enableScreens } from 'react-native-screens';
import { RootSiblingParent } from 'react-native-root-siblings';
import Root from 'routes';
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
            <RootSiblingParent>
                <Root />
            </RootSiblingParent>
        </Provider>
    );
};

export default App;
