import { ToastType } from "$lib/types";


export function getToastIconColor(type: ToastType): string {
    // text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200
    let textWeight = '500';
    let textWeightDark = '200';
    let bgWeight = '100';
    let bgWeightDark = '700';

    switch (type) {
        case ToastType.Success:
            return makeClassList("green", textWeight, textWeightDark, bgWeight, bgWeightDark);
        case ToastType.Error:
            return makeClassList("red", textWeight, textWeightDark, bgWeight, bgWeightDark);
        case ToastType.Warning:
            return makeClassList("orange", textWeight, textWeightDark, bgWeight, bgWeightDark);
        case ToastType.Plain:
            return makeClassList("gray", textWeight, textWeightDark, bgWeight, bgWeightDark);
    }
}

function makeClassList(
    color: string,
    textWeight: string,
    textWeightDark: string,
    bgWeight: string,
    bgWeightDark: string
): string {
    return `text-${color}-${textWeight} bg-${color}-${textWeight} dark:bg-${color}-${bgWeightDark} dark:text-${color}-${textWeightDark}`;
}