import React from 'react';
import { FlatList as FlatListRN } from 'react-native';
import PropTypes from 'prop-types';
import Shimmer from 'react-native-shimmer';
import utils from 'utils';
import Box from '../Box';
import Center from '../Center';
import Row from '../Row';

function FlatList({ loading, ...props }) {
    const flatList = { paddingTop: 15 };
    if (loading) {
        return (
            <Shimmer>
                <FlatListRN
                    data={Array(20)}
                    keyExtractor={(item, index) => `${item}${index}`}
                    contentContainerStyle={flatList}
                    renderItem={() => (
                        <Box
                            width={utils.Styles.rwn(340)}
                            paddingVertical="s10"
                            alignSelf="center"
                            marginBottom="s15"
                            backgroundColor="background"
                            borderRadius={4}
                        >
                            <Center flex={1} overflow="visible">
                                <Row
                                    marginBottom="s5"
                                    width={utils.Styles.rwn(315)}
                                    alignItems="center"
                                    borderRadius={5}
                                    height={20}
                                    backgroundColor="backText"
                                />
                                <Row
                                    marginBottom="s5"
                                    width={utils.Styles.rwn(315)}
                                    borderRadius={4}
                                    alignItems="center"
                                    height={20}
                                    backgroundColor="backText"
                                />
                                <Row
                                    marginBottom="s5"
                                    borderRadius={4}
                                    width={utils.Styles.rwn(315)}
                                    alignItems="center"
                                    height={20}
                                    backgroundColor="backText"
                                />
                                <Row
                                    marginBottom="s5"
                                    borderRadius={4}
                                    width={utils.Styles.rwn(315)}
                                    alignItems="center"
                                    height={20}
                                    backgroundColor="backText"
                                />
                            </Center>
                        </Box>
                    )}
                />
            </Shimmer>
        );
    }
    return <FlatListRN {...props} />;
}
FlatList.propTypes = {
    loading: PropTypes.bool
};
FlatList.defaultProps = {
    loading: false
};
export default FlatList;
