import React from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import { observer } from 'mobx-react-lite';
import Box from '../../Box';
import Text from '../../Text';
import Center from '../../Center';
import Button from '../../Button';

function ModalError({ title, titleConfirm, onPressConfirm }) {
    const onConfirm = async () => {
        onPressConfirm();
    };

    return (
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
                    label={titleConfirm}
                    variantText="20-500"
                    labelColor="text"
                    backgroundColor="bgButtonNo"
                    borderRadius={10}
                    width={utils.Styles.rwn(140)}
                    paddingVertical="s11"
                    onPress={onConfirm}
                />
            </Center>
        </Center>
    );
}
ModalError.propTypes = {
    title: PropTypes.string,
    titleConfirm: PropTypes.string,
    onPressConfirm: PropTypes.func
};
ModalError.defaultProps = {
    title: 'title',
    titleConfirm: 'titleConfirm',
    onPressConfirm: () => {}
};
export default observer(ModalError);
