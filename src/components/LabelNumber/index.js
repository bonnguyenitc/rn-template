import React from 'react';
import PropTypes from 'prop-types';
import Center from '../Center';
import Text from '../Text';

function LabelNumber({ number, ...props }) {
    return (
        <Center width={50} height={50} backgroundColor="blueBlur" borderRadius={25} {...props}>
            <Text variant="15-500" color="primary">
                {`${number}`}
            </Text>
        </Center>
    );
}
LabelNumber.propTypes = {
    number: PropTypes.number
};
LabelNumber.defaultProps = {
    number: 0
};
export default LabelNumber;
