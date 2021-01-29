import { Dimensions, PixelRatio } from 'react-native';
import { iOS } from 'constant/platform';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const HEIGHT_WIDTH = iOS
    ? Dimensions.get('window').height
    : require('react-native-extra-dimensions-android').getRealWindowHeight();
// Change by design
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scaleSize = (size) => (WINDOW_WIDTH / guidelineBaseWidth) * size;
/**
 * get Real Percent Width
 * @param {*} size: Number
 */
export const rwp = (size) => `${(size / guidelineBaseWidth) * 100}%`;
/**
 * get Real Percent Height
 * @param {*} size: Number
 */
export const rhp = (size) => `${(size / guidelineBaseHeight) * 100}%`;
/**
 * get Real Number Width
 * @param {*} size: Number
 */
export const rwn = (size) => (size / guidelineBaseWidth) * WINDOW_WIDTH;
/**
 * get Real Number Height
 * @param {*} size: Number
 */
export const rhn = (size) => (size / guidelineBaseHeight) * HEIGHT_WIDTH;

export const scaleFont = (size) => (iOS ? rwn(size) : size * PixelRatio.getFontScale());

function dimensions(top, right = top, bottom = top, left = right, property) {
    const styles = {};

    styles[`${property}Top`] = top;
    styles[`${property}Right`] = right;
    styles[`${property}Bottom`] = bottom;
    styles[`${property}Left`] = left;

    return styles;
}

export function margin(top, right, bottom, left) {
    return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top, right, bottom, left) {
    return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(color, offset = { height: 2, width: 2 }, radius = 2, opacity = 0.2) {
    return {
        shadowColor: color,
        shadowOffset: offset,
        shadowOpacity: opacity,
        shadowRadius: radius,
        elevation: radius
    };
}
