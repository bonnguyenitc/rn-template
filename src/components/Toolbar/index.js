import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import { boxShadow } from 'utils/style';
import Images from 'assets/Images';
import { useStores } from 'stores';
import Box from '../Box';
import Center from '../Center';
import BackIcon from '../BackIcon';
import Text from '../Text';
import Image from '../Image';
import Touchable from '../Touchable';

function Toolbar({ title, titleBack, onPressBack, onPressIcon, noShadow }) {
    const { userStore } = useStores();
    const insets = useSafeAreaInsets();
    const style = { paddingTop: insets.top };
    const shadow = noShadow ? {} : boxShadow();
    const onPress = onPressIcon || (() => userStore.showQrcode());
    return (
        <Box
            height={50 + insets.top}
            backgroundColor="background"
            style={style}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            paddingHorizontal="s18"
            {...shadow}
        >
            <Center flex={0.25} vertical>
                <BackIcon title={titleBack} onPress={onPressBack} />
            </Center>
            <Center flex={0.5}>
                <Text variant="16-700" color="title">
                    {title}
                </Text>
            </Center>
            <Center flex={0.25} vertical alignItems="flex-end">
                {onPress && (
                    <Touchable onPress={onPress}>
                        <Image source={Images.scan_qr} width={21} height={21} />
                    </Touchable>
                )}
            </Center>
        </Box>
    );
}

Toolbar.propTypes = {
    title: PropTypes.string,
    titleBack: PropTypes.string,
    onPress: PropTypes.func,
    onPressBack: PropTypes.func,
    onPressIcon: PropTypes.func,
    noShadow: PropTypes.bool
};

Toolbar.defaultProps = {
    title: '',
    titleBack: 'titleBack',
    onPress: null,
    onPressBack: null,
    onPressIcon: null,
    noShadow: false
};

export default Toolbar;
