import ApiCaller from './api-caller';

export const postLogin = (data) => {
    return ApiCaller.post('/login', data, true);
};

export const initPassword = (data) => {
    return ApiCaller.post('/init-password', data, true);
};
