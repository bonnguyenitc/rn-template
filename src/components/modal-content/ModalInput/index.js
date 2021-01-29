import React from 'react';
import { Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import utils from 'utils';
import { strings } from 'i18n';
import Box from '../../Box';
import Center from '../../Center';
import Text from '../../Text';
import Input from '../../Input';
import Row from '../../Row';
import Button from '../../Button';
import Modal from '../../Modal';
import Touchable from '../../Touchable';

function ModalInput({ visible, title, onPressCancel, onPressConfirm, init }) {
    const [text, setText] = React.useState('');
    const [err, setErr] = React.useState(false);
    // React.useEffect(() => {
    //     setErr(!text?.trim());
    // }, [text?.trim()]);

    React.useEffect(() => {
        setText(init || '');
    }, [init]);

    React.useEffect(() => {
        setErr(false);
    }, [visible]);

    return (
        <Modal visible={visible}>
            <Touchable
                flex={1}
                justifyContent="center"
                onPress={Keyboard.dismiss}
                activeOpacity={1}
            >
                <Box
                    width={utils.Styles.rwn(340)}
                    // height={utils.Styles.rhn(223)}
                    backgroundColor="background"
                    justifyContent="center"
                    borderRadius={10}
                >
                    <Center paddingHorizontal="s21" width="100%" marginTop="s18" horizontal>
                        <Text variant="20-700" color="text" textAlign="center">
                            {title}
                        </Text>
                    </Center>
                    <Box
                        width={utils.Styles.rwn(300)}
                        height={85}
                        borderRadius={5}
                        borderWidth={1}
                        borderColor="borderInput"
                        alignSelf="center"
                        marginTop="s12"
                        marginBottom="s8"
                    >
                        <Input
                            autoCapitalize="none"
                            width="100%"
                            height="100%"
                            defaultValue={init}
                            variant="text"
                            maxLength={1000}
                            padding="s8"
                            textAlignVertical="top"
                            multiline
                            onChangeText={(txt) => setText(txt)}
                        />
                    </Box>
                    {err && (
                        <Box paddingHorizontal="s21" paddingVertical="s8">
                            <Text variant="14-400" color="failure" textAlign="left">
                                {strings('error.REQUIRE_INPUT')}
                            </Text>
                        </Box>
                    )}
                    <Row paddingHorizontal="s21" width="100%" justifyContent="space-between">
                        <Button
                            label={strings('title.cancel')}
                            variantText="15-500"
                            labelColor="text"
                            backgroundColor="bgButtonNo"
                            borderRadius={10}
                            width={utils.Styles.rwn(140)}
                            paddingVertical="s11"
                            marginBottom="s14"
                            onPress={onPressCancel}
                        />
                        <Button
                            label="OK"
                            variantText="15-500"
                            labelColor="background"
                            backgroundColor="primary"
                            borderRadius={10}
                            width={utils.Styles.rwn(140)}
                            paddingVertical="s11"
                            onPress={() => {
                                if (!text?.trim()) return setErr(true);
                                onPressConfirm(text);
                                setText('');
                            }}
                        />
                    </Row>
                </Box>
            </Touchable>
        </Modal>
    );
}
ModalInput.propTypes = {
    visible: PropTypes.bool,
    title: PropTypes.string,
    onPressCancel: PropTypes.func,
    onPressConfirm: PropTypes.func,
    init: PropTypes.string
};
ModalInput.defaultProps = {
    visible: false,
    title: 'title',
    onPressCancel: () => {},
    onPressConfirm: () => {},
    init: ''
};
export default ModalInput;
