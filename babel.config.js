module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            '@babel/plugin-proposal-decorators',
            {
                legacy: true
            }
        ],
        [
            'module-resolver',
            {
                root: ['./src/**']
            }
        ],
        '@babel/plugin-proposal-optional-chaining'
    ],
    env: {
        production: {
            plugins: ['transform-remove-console']
        }
    }
};
