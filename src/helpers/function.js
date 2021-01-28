/* eslint-disable eqeqeq */
/* eslint-disable no-bitwise */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable array-callback-return */
import Axios from 'axios';
import { strings } from 'language';
import { Linking } from 'react-native';
import { iOS } from 'constant/platform';
import env from 'react-native-config';
/**
 *
 * @param {*} condition: Any
 * @param {*} funcTrue: Function
 * @param {*} funcFalse: Function
 */
// eslint-disable-next-line import/prefer-default-export
export const checkAndRun = (condition, funcTrue, funcFalse) => {
    if (condition) {
        return funcTrue && funcTrue();
    }
    return funcFalse && funcFalse();
};

export const delayWithTime = (time) => {
    return new Promise((rs) => {
        setTimeout(() => {
            rs();
        }, time);
    });
};

export const getErrMessage = (error) => {
    return strings(`error.${error?.statusText}`, { defaultValue: strings('error.default') });
};

export const callNumber = (number) => {
    return Linking.openURL(`tel:${number}`);
};

export const formatPhoneNumber = (phoneNumberString) => {
    const cleaned = `${phoneNumberString}`.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2,3})(\d{4})(\d{4})$/);
    if (match) {
        return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return null;
};

export const convertRemarks = (remarks) => {
    try {
        const string =
            remarks && typeof remarks === 'string'
                ? JSON.stringify(remarks)
                      ?.replace(/\\\\n/g, '\n')
                      ?.replace(/\\/g, '')
                      ?.replace(/"/g, '')
                : '';
        return string;
    } catch (error) {
        return '';
    }
};

export const getLocationFromAddress = async (address) => {
    const location = await Axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&result_type=geometry&key=${env.API_MAP_KEY}`
    );
    if (location?.data?.status === 'OK') {
        return location?.data.results?.[0]?.geometry?.location;
    }
    return null;
};

export function getRegionForCoordinates(points) {
    // points should be an array of { latitude: X, longitude: Y }
    let minX;
    let maxX;
    let minY;
    let maxY;

    // init first point
    ((point) => {
        minX = point?.latitude;
        maxX = point?.latitude;
        minY = point?.longitude;
        maxY = point?.longitude;
    })(points[0]);

    // calculate rect
    points.map((point) => {
        minX = Math.min(minX, point?.latitude);
        maxX = Math.max(maxX, point?.latitude);
        minY = Math.min(minY, point?.longitude);
        maxY = Math.max(maxY, point?.longitude);
    });

    const midX = (minX + maxX) / 2;
    const midY = (minY + maxY) / 2;
    // const deltaX = maxX - minX;
    // const deltaY = maxY - minY;

    // console.log('deltaX', deltaX);
    // console.log('deltaY', deltaY);

    return {
        latitude: midX,
        longitude: midY,
        latitudeDelta: 0.4,
        longitudeDelta: 0.4
    };
}

export function decode(t) {
    const points = [];
    for (const step of t) {
        const encoded = step.polyline.points;
        let index = 0;
        const len = encoded.length;
        let lat = 0;
        let lng = 0;
        while (index < len) {
            let b;
            let shift = 0;
            let result = 0;
            do {
                b = encoded.charAt(index++).charCodeAt(0) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);

            const dlat = (result & 1) != 0 ? ~(result >> 1) : result >> 1;
            lat += dlat;
            shift = 0;
            result = 0;
            do {
                b = encoded.charAt(index++).charCodeAt(0) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            const dlng = (result & 1) != 0 ? ~(result >> 1) : result >> 1;
            lng += dlng;

            points.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
        }
    }
    return points;
}

export const getPointsBetweenTwoPoints = async (origin, destination) => {
    const originStr = `${origin.latitude},${origin.longitude}`;
    const destinationStr = `${destination.latitude},${destination.longitude}`;
    const location = await Axios.get(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${originStr}&destination=${destinationStr}&key=${env.API_MAP_KEY}`
    );
    if (location?.data?.status === 'OK') {
        return location?.data?.routes?.[0]?.legs.reduce((carry, curr) => {
            return [...carry, ...decode(curr.steps)];
        }, []);
        // return decode(location?.data?.routes?.overview_polyline);
    }
    return null;
};

export const openSetting = () => {
    iOS
        ? Linking.openURL('app-settings:')
        : require('react-native-android-open-settings').appDetailsSettings();
};

export const openSettingLocation = () => {
    iOS
        ? Linking.openURL('app-settings:')
        : require('react-native-android-open-settings').locationSourceSettings();
};
