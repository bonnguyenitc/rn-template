import axios from 'axios';
import qs from 'querystring';
import env from 'react-native-config';
import utils from 'utils';
import helpers from 'helpers';
import { strings } from 'language';
import NetInfo from '@react-native-community/netinfo';

const METHOD_GET = 'get';
const METHOD_POST = 'post';
const METHOD_PUT = 'put';
const METHOD_DELETE = 'delete';

const instance = axios.create({
    baseURL: `${env.API_HOST}/api/v1`,
    timeout: 10000,
    validateStatus: (status) => status === 200
});

async function requestAPI(
    method,
    url,
    _headers = {},
    _dataBody,
    isJSON = false,
    isShowError = true
) {
    const token = await utils.ASStore.getToken();
    const headers = { ..._headers, Authorization: token ? `Bearer ${token}` : null };

    let dataBody = _dataBody;

    if (isJSON) {
        headers['Content-Type'] = 'application/json';
    }

    if (isJSON && (method === METHOD_POST || method === METHOD_PUT)) {
        headers['Content-Type'] = 'application/json';
    } else if (method === METHOD_POST || method === METHOD_PUT) {
        headers['Content-Type'] = 'application/x-www-form-urlencoded';
        dataBody = qs.stringify(dataBody);
    }

    const config = {
        url,
        headers,
        method,
        validateStatus: () => true
    };

    if (method === METHOD_GET) {
        config.params = dataBody;
    } else {
        config.data = dataBody;
    }

    try {
        const net = await NetInfo.fetch();
        if (!net?.isConnected) {
            throw new Error('network');
        }
        const response = await instance(config);
        if (response.status === 200) {
            if (response.data.data === null) return true;
            return response.data.data;
        }
        throw response.data;
    } catch (error) {
        console.error(error.message);
        console.error('Start call:---------');
        console.log(url);
        console.log('Body: ');
        console.log('token: ', token);
        console.log(JSON.stringify(dataBody));
        console.log('Error:');
        console.log(JSON.stringify(error));
        console.error('End------------\n');

        isShowError &&
            alert(
                error.message === 'network'
                    ? strings('error.network')
                    : helpers.Function.getErrMessage(error)
            );
        return isShowError
            ? null
            : {
                  error,
                  isError: true
              };
    }
}

const ApiCaller = {
    get(url, dataBody, isJSON = false, headers = {}, isShowError) {
        return requestAPI(METHOD_GET, url, headers, dataBody, isJSON, isShowError);
    },

    post(url, dataBody, isJSON = false, headers = {}, isShowError) {
        return requestAPI(METHOD_POST, url, headers, dataBody, isJSON, isShowError);
    },

    put(url, dataBody, isJSON = false, headers = {}, isShowError) {
        return requestAPI(METHOD_PUT, url, headers, dataBody, isJSON, isShowError);
    },

    delete(url, dataBody, isJSON = false, headers = {}, isShowError) {
        return requestAPI(METHOD_DELETE, url, headers, dataBody, isJSON, isShowError);
    }
};

export default ApiCaller;
