import React from 'react';
import { Text as RNText } from 'react-native';
import PropTypes from 'prop-types';
import { rhn } from 'utils/style';
import Box from '../Box';
import Row from '../Row';
import Text from '../Text';
import Input from '../Input';
import Center from '../Center';
import Image from '../Image';

function InputLabel({
    label,
    icon,
    variantLabel,
    variantInput,
    secureTextEntry,
    onChangeText,
    styleInput,
    defaultValue,
    hideLeftIcon,
    ...props
}) {
    return (
        <Box {...props}>
            {label && <Text variant={variantLabel}>{label}</Text>}
            <Row
                borderWidth={1}
                borderColor="borderInput"
                borderRadius={5}
                height={rhn(44)}
                marginTop="s5"
                width="100%"
                backgroundColor="backgroundInput"
            >
                {!hideLeftIcon && (
                    <Center
                        borderRightColor="borderInput"
                        borderRightWidth={rhn(1)}
                        paddingHorizontal="s14"
                        height={rhn(44) - 2}
                    >
                        <Image
                            source={icon}
                            resizeMode="contain"
                            height={rhn(16)}
                            width={rhn(16)}
                        />
                    </Center>
                )}
                <Box flex={1} justifyContent="center">
                    <Input
                        variant={variantInput}
                        width="100%"
                        height={44}
                        paddingHorizontal="s8"
                        secureTextEntry={secureTextEntry}
                        onChangeText={onChangeText}
                        style={styleInput}
                        maxLength={100}
                        autoCapitalize="none"
                        defaultValue={defaultValue}
                    />
                </Box>
            </Row>
        </Box>
    );
}

InputLabel.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.node,
    variantLabel: PropTypes.string,
    variantInput: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    onChangeText: PropTypes.func,
    styleInput: RNText.propTypes.style,
    defaultValue: PropTypes.string,
    hideLeftIcon: PropTypes.bool
};

InputLabel.defaultProps = {
    label: 'Button',
    icon: null,
    variantLabel: '',
    variantInput: '',
    secureTextEntry: false,
    onChangeText: () => {},
    styleInput: null,
    defaultValue: '',
    hideLeftIcon: false
};

export default InputLabel;
