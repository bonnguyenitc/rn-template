import React from 'react';
import { Pressable } from 'react-native';
import { useTheme, createBox } from '@shopify/restyle';
import PropTypes from 'prop-types';
import utils from 'utils';
import Image from '../Image';
import Row from '../Row';
import Text from '../Text';

const PressableRestyle = createBox(Pressable);

function ButtonWitdIcon({ icon, title, variantText, onPress, ...props }) {
    const theme = useTheme();
    return (
        <PressableRestyle onPress={onPress} {...props}>
            {({ pressed }) => {
                const style = {
                    tintColor: pressed ? theme.colors.background : theme.colors.primary
                };
                return (
                    <Row
                        paddingHorizontal="s34"
                        paddingRight="s75"
                        paddingVertical="s18"
                        backgroundColor={pressed ? 'primary' : 'background'}
                        borderRadius={5}
                        justifyContent="center"
                        {...utils.Styles.boxShadow()}
                    >
                        <Image
                            source={icon}
                            marginRight="s34"
                            width={35}
                            height={35}
                            resizeMode="contain"
                            style={style}
                        />
                        <Text color={pressed ? 'background' : 'primary'} variant={variantText}>
                            {title}
                        </Text>
                    </Row>
                );
            }}
        </PressableRestyle>
    );
}

ButtonWitdIcon.propTypes = {
    icon: PropTypes.node,
    title: PropTypes.string,
    variantText: PropTypes.string,
    onPress: PropTypes.func
};

ButtonWitdIcon.defaultProps = {
    icon: '',
    title: 'ButtonIcon',
    variantText: '',
    onPress: () => {}
};

export default ButtonWitdIcon;
