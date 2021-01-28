import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';

function Row({ children, ...props }) {
    return (
        <Box flexDirection="row" {...props}>
            {children}
        </Box>
    );
}

Row.propTypes = {
    children: PropTypes.node
};

Row.defaultProps = {
    children: null
};

export default Row;
