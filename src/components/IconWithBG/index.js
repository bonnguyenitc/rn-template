import React from 'react';
import PropTypes from 'prop-types';
import Center from '../Center';
import Image from '../Image';

function IconWithBg({ image, ...props }) {
    return (
        <Center
            width={22}
            height={22}
            backgroundColor="blueBlur"
            marginRight="s14"
            borderRadius={11}
            {...props}
        >
            <Image source={image} resizeMode="contain" width={10} height={10} />
        </Center>
    );
}
IconWithBg.propTypes = {
    image: PropTypes.node
};
IconWithBg.defaultProps = {
    image: null
};
export default IconWithBg;
