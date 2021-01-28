import React from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import Box from '../../Box';
import Text from '../../Text';
import Center from '../../Center';
import Row from '../../Row';
import Button from '../../Button';

function ModalConfirm({ title, titleConfirm, titleReject, onPressConfirm, onPressReject }) {
    return (
        <Center
            width={utils.Styles.rwn(340)}
            // height={utils.Styles.rhn(140)}
            paddingVertical="s15"
            backgroundColor="background"
            borderRadius={10}
        >
            <Box paddingHorizontal="s15">
                <Text variant="20-700" color="text" numberOfLines={99} textAlign="center">
                    {title}
                </Text>
            </Box>
            <Row
                marginTop="s20"
                paddingHorizontal="s21"
                width="100%"
                justifyContent="space-between"
            >
                <Button
                    label={titleReject}
                    variantText="16-500"
                    labelColor="text"
                    backgroundColor="bgButtonNo"
                    borderRadius={10}
                    width={utils.Styles.rwn(140)}
                    paddingVertical="s11"
                    onPress={onPressReject}
                />
                <Button
                    label={titleConfirm}
                    variantText="16-500"
                    labelColor="background"
                    backgroundColor="primary"
                    borderRadius={10}
                    width={utils.Styles.rwn(140)}
                    paddingVertical="s11"
                    onPress={onPressConfirm}
                />
            </Row>
        </Center>
    );
}
ModalConfirm.propTypes = {
    title: PropTypes.string,
    titleConfirm: PropTypes.string,
    titleReject: PropTypes.string,
    onPressConfirm: PropTypes.func,
    onPressReject: PropTypes.func
};
ModalConfirm.defaultProps = {
    title: 'title',
    titleConfirm: 'titleConfirm',
    titleReject: 'titleReject',
    onPressConfirm: () => {},
    onPressReject: () => {}
};
export default ModalConfirm;
