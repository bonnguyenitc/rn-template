import React from 'react';
import { Modal as RNModal, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Box from '../Box';
import Touchable from '../Touchable';

function Modal({ children, onRequestClose, ...props }) {
    return (
        <RNModal
            transparent
            animated
            animationType="fade"
            onRequestClose={onRequestClose}
            {...props}
        >
            <Box flex={1} backgroundColor="backDrop" justifyContent="center" alignItems="center">
                <Touchable
                    {...StyleSheet.absoluteFillObject}
                    activeOpacity={1}
                    onPress={onRequestClose}
                />
                {children}
            </Box>
        </RNModal>
    );
}
Modal.propTypes = {
    children: PropTypes.node,
    onRequestClose: PropTypes.func
};
Modal.defaultProps = {
    children: null,
    onRequestClose: () => {}
};
export default Modal;
