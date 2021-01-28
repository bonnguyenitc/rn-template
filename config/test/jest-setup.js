/* eslint-disable no-undef */
jest.mock('react-native-location', () => ({
    __esModule: true,
    default: {
        requestPermission: jest.fn(() => Promise.resolve(true)),
        getLatestLocation: jest.fn(() => Promise.resolve()),
        configure: jest.fn(() => Promise.resolve())
    }
}));

jest.mock('react-native-device-info', () => ({
    identify: () => null,
    reset: () => null,
    setup: () => null
}));
