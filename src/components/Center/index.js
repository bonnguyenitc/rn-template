import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';

function Center({ horizontal, vertical, children, ...props }) {
    return (
        <Box
            alignItems={
                (horizontal && !vertical) || (!horizontal && !vertical) ? 'center' : 'flex-start'
            }
            justifyContent={
                (vertical && !horizontal) || (!horizontal && !vertical) ? 'center' : 'flex-start'
            }
            {...props}
        >
            {children}
        </Box>
    );
}

Center.propTypes = {
    horizontal: PropTypes.bool,
    vertical: PropTypes.bool,
    children: PropTypes.node
};

Center.defaultProps = {
    horizontal: false,
    vertical: false,
    children: null
};

export default Center;
