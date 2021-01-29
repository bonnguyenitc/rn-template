import React from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import { strings } from 'i18n';
import Center from '../../Center';
import Modal from '../../Modal';
import Text from '../../Text';
import Button from '../../Button';
import Box from '../../Box';

function ModalSuggestPermissionLocation({ visible, title, onPress }) {
    return (
        <Modal visible={visible}>
            <Center
                width={utils.Styles.rwn(340)}
                padding="s15"
                backgroundColor="background"
                borderRadius={10}
            >
                <Box>
                    <Text variant="20-700" color="text" textAlign="center">
                        {title}
                    </Text>
                </Box>
                <Center marginTop="s21" paddingHorizontal="s21" width="100%">
                    <Button
                        label={strings('title.yes')}
                        variantText="20-500"
                        labelColor="text"
                        backgroundColor="bgButtonNo"
                        borderRadius={10}
                        width={utils.Styles.rwn(140)}
                        paddingVertical="s11"
                        onPress={onPress}
                    />
                </Center>
            </Center>
        </Modal>
    );
}
ModalSuggestPermissionLocation.propTypes = {
    visible: PropTypes.bool,
    title: PropTypes.string,
    onPress: PropTypes.func
};
ModalSuggestPermissionLocation.defaultProps = {
    visible: false,
    title: '',
    onPress: () => {}
};
export default ModalSuggestPermissionLocation;
