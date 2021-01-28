import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import Images from 'assets/Images';
import Box from '../Box';
import Image from '../Image';
import Text from '../Text';
import Touchable from '../Touchable';

function BackIcon({ title, onPress }) {
    const navigation = useNavigation();
    return (
        <Touchable onPress={onPress || navigation.goBack}>
            <Box flexDirection="row" alignItems="center">
                <Image source={Images.back_icon} />
                {title && (
                    <Text color="backText" variant="16-300">
                        {title}
                    </Text>
                )}
            </Box>
        </Touchable>
    );
}

BackIcon.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func
};

BackIcon.defaultProps = {
    title: 'Back',
    onPress: null
};

export default BackIcon;
