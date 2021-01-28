import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from 'theme';
import { Provider, rootStore } from 'stores';
import * as Dialog from '../../helpers/dialog-manager';
import Center from '../Center';

function DialogContainer({ children, isNoClickBackdrop }) {
    return (
        <Provider value={rootStore}>
            <ThemeProvider theme={theme}>
                <TouchableWithoutFeedback
                    onPress={() => !isNoClickBackdrop && Dialog.hideCurrentModal()}
                >
                    <Center flex={1} {...StyleSheet.absoluteFillObject} backgroundColor="backDrop">
                        {children}
                    </Center>
                </TouchableWithoutFeedback>
            </ThemeProvider>
        </Provider>
    );
}
DialogContainer.propTypes = {
    children: PropTypes.node,
    isNoClickBackdrop: PropTypes.bool
};
DialogContainer.defaultProps = {
    children: null,
    isNoClickBackdrop: false
};

export default DialogContainer;
