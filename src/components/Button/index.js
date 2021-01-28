import React from 'react';
import { TouchableOpacity, Pressable } from 'react-native';
import { useRestyle, spacing, border, backgroundColor, layout, shadow } from '@shopify/restyle';
import PropTypes from 'prop-types';
import Text from '../Text';
import Box from '../Box';

const Button = ({
    onPress,
    label,
    variantText,
    labelColor,
    isPressable,
    bgUnPress,
    disabled,
    ...rest
}) => {
    const props = useRestyle([spacing, border, backgroundColor, layout, shadow], rest);

    if (isPressable) {
        return (
            <Pressable onPress={onPress} disabled={disabled}>
                {({ pressed }) => {
                    return (
                        <Box
                            alignItems="center"
                            justifyContent="center"
                            backgroundColor={pressed ? 'primary' : bgUnPress || 'bgButtonNo'}
                            borderRadius={5}
                            {...props}
                        >
                            <Text
                                variant={variantText}
                                textAlign="center"
                                color={pressed ? 'background' : 'text'}
                            >
                                {label}
                            </Text>
                        </Box>
                    );
                }}
            </Pressable>
        );
    }
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6} disabled={disabled}>
            <Box alignItems="center" justifyContent="center" {...props}>
                <Text variant={variantText} color={labelColor} textAlign="center">
                    {label}
                </Text>
            </Box>
        </TouchableOpacity>
    );
};

Button.propTypes = {
    onPress: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    variantText: PropTypes.string.isRequired,
    labelColor: PropTypes.string.isRequired,
    isPressable: PropTypes.bool,
    disabled: PropTypes.bool,
    bgUnPress: PropTypes.string
};

Button.defaultProps = {
    isPressable: false,
    disabled: false,
    bgUnPress: 'bgButtonNo'
};

export default Button;
