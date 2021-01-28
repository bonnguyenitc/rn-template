import React from 'react';
import PropTypes from 'prop-types';
import { strings } from 'language';
import utils from 'utils';
import Row from '../Row';
import Touchable from '../Touchable';
import Text from '../Text';
import Center from '../Center';

function SegmentButton({ onPressFirst, onPressSecond, title1, title2 }) {
    const [indexActive, setIndexActive] = React.useState(0);

    const handleOnPress = (index) => {
        setIndexActive(index);
        if (index === 1) {
            onPressSecond && onPressSecond();
        } else {
            setIndexActive(0);
            onPressFirst && onPressFirst();
        }
    };

    const renderButton = (title, isLeft, active, index) => {
        return (
            <Touchable onPress={() => handleOnPress(index)} flex={1}>
                <Center
                    backgroundColor={active ? 'primary' : 'background'}
                    borderTopLeftRadius={isLeft ? 5 : 0}
                    borderBottomLeftRadius={isLeft ? 5 : 0}
                    borderTopRightRadius={!isLeft ? 5 : 0}
                    borderBottomRightRadius={!isLeft ? 5 : 0}
                    height={utils.Styles.rhn(50)}
                    flex={1}
                >
                    <Text variant="15-500" color={active ? 'background' : 'title'}>
                        {title}
                    </Text>
                </Center>
            </Touchable>
        );
    };
    return (
        <Row width={utils.Styles.rwn(333)}>
            {renderButton(title1 || strings('title.all'), true, indexActive === 0, 0)}
            {renderButton(title2 || strings('title.moving'), false, indexActive === 1, 1)}
        </Row>
    );
}
SegmentButton.propTypes = {
    onPressFirst: PropTypes.func,
    onPressSecond: PropTypes.func,
    title1: PropTypes.string,
    title2: PropTypes.string
};
SegmentButton.defaultProps = {
    onPressFirst: () => {},
    onPressSecond: () => {},
    title1: '',
    title2: ''
};
export default SegmentButton;
