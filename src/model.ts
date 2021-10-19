export const Reset: string = '\x1b[0m';

export type EffectKey = {
    bright: string;
    dim: string;
    italic: string;
    underscore: string;
    blink: string;
}

export type ColorKey = {
    black: string;
    red: string;
    green: string;
    yellow: string;
    blue: string;
    magenta: string;
    cyan: string;
    white: string;
}

type ContrastValue = 'white' | 'black'

type Effects<T> = {
    [key in keyof T]: string;
}

type Colors<T, K> = {
    [key in keyof T]: K;
}

export type ColorOptions = {
    font?: keyof ColorKey;
    background?: keyof ColorKey;
    effects?: Array<keyof EffectKey>;
}

export type FontOptions = {
    bold?: boolean;
    italic?: boolean;
    mono?: boolean;
    link?: string;
}

export const effects: Effects<EffectKey> = {
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    italic: '\x1b[3m',
    underscore: '\x1b[4m',
    blink: '\x1b[5m',
};

export const fontColors: Colors<ColorKey, string> = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
};
export const backgroundColors: Colors<ColorKey, string> = {
    black: '\x1b[40m',
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
    white: '\x1b[47m',
};
export const contrast: Colors<ColorKey, ContrastValue> = {
    black: 'white',
    red: 'black',
    green: 'black',
    yellow: 'black',
    blue: 'black',
    magenta: 'black',
    cyan: 'black',
    white: 'black',
};
