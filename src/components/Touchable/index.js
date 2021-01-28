import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createBox } from '@shopify/restyle';
import PropTypes from 'prop-types';

const TouchableRS = createBox(TouchableOpacity);

const Touchable = ({ children, ...props }) => {
    return (
        <TouchableRS activeOpacity={0.6} {...props}>
            {children}
        </TouchableRS>
    );
};

Touchable.propTypes = {
    children: PropTypes.node
};

Touchable.defaultProps = {
    children: null
};

export default Touchable;
