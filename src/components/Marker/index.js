import React from 'react';
import PropTypes from 'prop-types';
import { Marker as RNMarker, Callout } from 'react-native-maps';
import { useTheme } from '@shopify/restyle';
import Svg, { Polygon } from 'react-native-svg';
import utils from 'utils';
import Images from 'assets/Images';
import Box from '../Box';
import Center from '../Center';
import Text from '../Text';

function Marker({ coordinate, name, onPress, content, transfered }) {
    const theme = useTheme();
    return (
        <RNMarker
            coordinate={coordinate || { longitude: 107.5898941, latitude: 16.4578541 }}
            icon={transfered ? Images.ic_dest_blue : Images.ic_dest_red}
            onPress={onPress}
        >
            <Callout tooltip>
                <Box>
                    <Center
                        {...utils.Styles.padding('s6', 's14', 's6', 's14')}
                        backgroundColor="primary"
                        borderRadius={5}
                    >
                        <Text variant="18-500" color="background">
                            {name}
                        </Text>
                        <Text variant="12-300" color="background">
                            {content}
                        </Text>
                    </Center>
                    <Center>
                        <Svg height="12" width="12">
                            <Polygon
                                points="0,0 12,0 6,6 0,0"
                                fill={theme.colors.primary}
                                stroke={theme.colors.primary}
                                strokeWidth="0"
                            />
                        </Svg>
                    </Center>
                </Box>
            </Callout>
        </RNMarker>
    );
}
Marker.propTypes = {
    coordinate: PropTypes.any,
    name: PropTypes.string,
    content: PropTypes.string,
    onPress: PropTypes.func,
    transfered: PropTypes.bool
};
Marker.defaultProps = {
    coordinate: null,
    name: '',
    content: '',
    onPress: () => {},
    transfered: false
};
export default Marker;
