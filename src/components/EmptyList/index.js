import React from 'react';
import utils from 'utils';
import Images from 'assets/Images';
import { strings } from 'language';
import Center from '../Center';
import Image from '../Image';
import Text from '../Text';
import Box from '../Box';

function EmptyList() {
    return (
        <Center horizontal width={utils.Styles.WINDOW_WIDTH} height={utils.Styles.HEIGHT_WIDTH}>
            <Box marginTop="s139">
                <Image source={Images.no_data} width={190} height={171} resizeMode="contain" />
                <Text variant="18-500" color="textEmpty" marginTop="s13">
                    {strings('title.empty_list')}
                </Text>
            </Box>
        </Center>
    );
}
EmptyList.propTypes = {};
EmptyList.defaultProps = {};
export default EmptyList;
