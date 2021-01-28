import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@shopify/restyle';
import * as Progress from 'react-native-progress';
import Center from '../../Center';
import Modal from '../../Modal';

function ModalWaiting({ visible }) {
    const theme = useTheme();
    return (
        <Modal visible={visible}>
            <Center flex={1}>
                <Progress.CircleSnail
                    size={40}
                    color={[theme.colors.primary, theme.colors.failure, theme.colors.foreground]}
                    indeterminate
                />
            </Center>
        </Modal>
    );
}
ModalWaiting.propTypes = {
    visible: PropTypes.bool
};
ModalWaiting.defaultProps = {
    visible: false
};
export default ModalWaiting;
