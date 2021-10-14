import { backgroundColors, effects, fontColors, Reset } from './model';
function addColor(text: string, color: string, isBackground = false) {
    if (isBackground) {
        return text + backgroundColors[color];
    }
    return text + fontColors[color];
}
function getEffects(effectList: string[]) {
    return effectList.map((effect: string) => effects[effect]).join('');
}

export type ColorOptions = {
    font?: string;
    background?: string;
    effects?: string[];
}
export function color(text: string, options: ColorOptions) {
    const preparedText = text.replace(/ё/g, 'е');
    let result = '';
    if (options) {
        if (options.font) {
            result = addColor(result, options.font);
        }
        if (options.background) {
            result = addColor(result, options.background, true);
        }
        if (options.effects) {
            result += getEffects(options.effects);
        }
        result += preparedText;
        result += Reset;
        return result;
    }
    return preparedText;
}
