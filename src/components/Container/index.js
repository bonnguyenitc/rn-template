import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';

function Container({ children, ...props }) {
    return (
        <Box flex={1} backgroundColor="background" {...props}>
            {children}
        </Box>
    );
}
Container.propTypes = {
    children: PropTypes.node
};
Container.defaultProps = {
    children: null
};
export default Container;
