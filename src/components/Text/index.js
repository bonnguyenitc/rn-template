import React from 'react';
import { createText } from '@shopify/restyle';
import PropTypes from 'prop-types';

const TextRS = createText();

function Text({ children, ...props }) {
    return (
        <TextRS ellipsizeMode="tail" {...props}>
            {children}
        </TextRS>
    );
}

Text.propTypes = {
    children: PropTypes.string
};

Text.defaultProps = {
    children: ''
};

export default Text;
