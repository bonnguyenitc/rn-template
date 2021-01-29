import React from 'react';
import PropTypes from 'prop-types';
import { strings } from 'i18n';
import Images from 'assets/Images';
import utils from 'utils';
import Row from '../Row';
import Image from '../Image';
import Input from '../Input';
import Touchable from '../Touchable';

function Search({ onSearch, search, onClear, ...props }) {
    return (
        <Row
            width={utils.Styles.rwn(342)}
            height={39}
            alignItems="center"
            paddingHorizontal="s13"
            borderRadius={5}
            {...utils.Styles.boxShadow()}
            {...props}
        >
            <Image source={Images.icon_search} resizeMode="contain" />
            <Input
                flex={1}
                color="text"
                maxLength={255}
                value={search}
                placeholder={strings('title.search')}
                onChangeText={onSearch}
                autoCapitalize="none"
            />
            {!!search && (
                <Touchable onPress={onClear}>
                    <Image source={Images.icon_close} resizeMode="contain" />
                </Touchable>
            )}
        </Row>
    );
}
Search.propTypes = {
    onSearch: PropTypes.func,
    onClear: PropTypes.func,
    search: PropTypes.string
};
Search.defaultProps = {
    onSearch: () => {},
    onClear: () => {},
    search: ''
};
export default Search;
