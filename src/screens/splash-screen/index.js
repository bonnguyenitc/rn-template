import React from 'react';
import { observer } from 'mobx-react-lite';
import Container from 'components/Container';
import { useStores } from 'stores';

function SplashScreen() {
    const { appStore } = useStores();
    React.useEffect(() => {
        appStore.init();
    }, []);

    return <Container />;
}

export default observer(SplashScreen);
