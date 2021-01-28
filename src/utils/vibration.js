import { Vibration } from 'react-native';
import helpers from 'helpers';

export const vibration2s = async () => {
    Vibration.vibrate();
    await helpers.Function.delayWithTime(500);
    Vibration.cancel();
    await helpers.Function.delayWithTime(300);
    Vibration.vibrate();
    await helpers.Function.delayWithTime(500);
    Vibration.cancel();
};

export const vibration1s = async () => {
    Vibration.vibrate();
    await helpers.Function.delayWithTime(500);
    Vibration.cancel();
};
