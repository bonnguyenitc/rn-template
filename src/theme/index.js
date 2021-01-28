import { createTheme } from '@shopify/restyle';
import * as Styles from '../utils/style';

const palette = {
    green: '#0ECD9D',
    red: '#FD503C',
    black: '#0B0B0B',
    white: '#FFFFFF',
    blue: '#3670FF',
    gray: '#D5DDE0',
    grey: '#F7F8F9',
    grey1: '#4D4D66',
    grey2: '#9092A6',
    grey3: '#4D5264',
    white3: '#F2F6FF',
    white4: '#CBCCCD',
    white5: '#ebeff5;',
    blackBlur: 'rgba(0, 0, 0, 0.42)',
    blue2: '#E1EBFF',
    blue3: '#F7F9FF'
};

const fontFamily = 'NotoSansJP-Regular';

const scaleFont = (size) => Styles.scaleFont(size);

export const theme = createTheme({
    colors: {
        background: palette.white,
        background1: palette.white5,
        foreground: palette.black,
        primary: palette.blue,
        success: palette.green,
        danger: palette.red,
        failure: palette.red,
        borderInput: palette.gray,
        backgroundInput: palette.grey,
        inactiveIconTab: palette.grey1,
        title: palette.grey1,
        backText: palette.grey2,
        text: palette.grey3,
        backDrop: palette.blackBlur,
        bgButtonNo: palette.white3,
        blueBlur: palette.blue2,
        blueBlur1: palette.blue3,
        textEmpty: palette.white4
    },
    spacing: {
        s5: 5,
        s6: 6,
        s8: 8,
        s8rs: Styles.rhn(8),
        s9: 9,
        s11: 11,
        s11rs: Styles.rhn(11),
        s10: 10,
        s12: 12,
        s12d6: 12.6,
        s13: 13,
        s14: 14,
        s15: 15,
        s17: 17,
        s18: 18,
        s20: 20,
        s21: 21,
        s22: 22,
        s22rs: Styles.rhn(22),
        s23: 23,
        s28: 28,
        s28rs: Styles.rhn(28),
        s34: 34,
        s37: 37,
        s53: 53,
        s60: 60,
        s67: 67,
        s67rs: Styles.rhn(67),
        s69: 69,
        s70: 70,
        s75: 75,
        s80: 80,
        s90: 90,
        s139: 139
    },
    textVariants: {
        '14-500': {
            fontSize: scaleFont(14),
            fontWeight: '500',
            lineHeight: scaleFont(24),
            fontFamily
        },
        '14-400': {
            fontSize: scaleFont(14),
            fontWeight: '400',
            lineHeight: scaleFont(24),
            fontFamily
        },
        '14-bold': {
            fontSize: scaleFont(14),
            fontWeight: 'bold',
            lineHeight: scaleFont(20.27),
            fontFamily
        },
        '18-500': {
            fontSize: scaleFont(18),
            fontWeight: '500',
            lineHeight: scaleFont(26.06),
            fontFamily
        },
        '18-400': {
            fontSize: scaleFont(18),
            fontWeight: '400',
            lineHeight: scaleFont(26.06),
            fontFamily
        },
        '16-300': {
            fontSize: scaleFont(16),
            fontFamily,
            fontWeight: '300',
            lineHeight: scaleFont(22)
        },
        '16-400': {
            fontSize: scaleFont(16),
            fontFamily,
            fontWeight: '400',
            lineHeight: scaleFont(22)
        },
        '16-700': {
            fontSize: scaleFont(16),
            fontFamily,
            fontWeight: '700',
            lineHeight: scaleFont(22)
        },
        '22-500': {
            fontSize: scaleFont(22),
            fontFamily,
            fontWeight: '500'
            // lineHeight: scaleFont(22)
        },
        '15-500': {
            fontSize: scaleFont(15),
            fontFamily,
            fontWeight: '500',
            lineHeight: scaleFont(20.4)
        },
        '15-300': {
            fontSize: scaleFont(15),
            fontFamily,
            fontWeight: '500',
            lineHeight: scaleFont(20.4)
        },
        '15-400': {
            fontSize: scaleFont(15),
            fontFamily,
            fontWeight: '400',
            lineHeight: scaleFont(20.4)
        },
        '12-500': {
            fontSize: scaleFont(12),
            fontFamily,
            fontWeight: '500',
            lineHeight: scaleFont(16.32)
        },
        '12-300': {
            fontSize: scaleFont(12),
            fontFamily,
            fontWeight: '300',
            lineHeight: scaleFont(16.32)
        },
        '12-400': {
            fontSize: scaleFont(12),
            fontFamily,
            fontWeight: '400',
            lineHeight: scaleFont(16.32)
        },
        '20-500': {
            fontSize: scaleFont(20),
            fontFamily,
            fontWeight: '500',
            lineHeight: scaleFont(27.2)
        },
        '20-700': {
            fontSize: scaleFont(20),
            fontFamily,
            fontWeight: '700',
            lineHeight: scaleFont(27.2)
        },
        '18-700': {
            fontSize: scaleFont(18),
            fontFamily,
            fontWeight: '700',
            lineHeight: scaleFont(24.48)
        },
        '16-500': {
            fontSize: scaleFont(16),
            fontFamily,
            fontWeight: '500',
            lineHeight: scaleFont(22)
        }
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
        largeTablet: 1024
    }
});

export const darkTheme = createTheme({
    ...theme,
    colors: {
        ...theme.colors,
        background: palette.black,
        foreground: palette.white
    }
});
