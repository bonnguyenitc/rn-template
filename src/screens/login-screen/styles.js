import { StyleSheet } from 'react-native';
import utils from 'utils';

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    logo: {
        height: utils.Styles.rhn(80),
        marginTop: utils.Styles.rh(33),
        width: 176
    },
    logoImage: {
        alignSelf: 'center',
        bottom: utils.Styles.rh(63),
        position: 'absolute'
    }
});

export default styles;
