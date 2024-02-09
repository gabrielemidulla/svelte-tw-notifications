import { ToastPosition } from "$lib/types";


export function getToastSelfAlignment(position: ToastPosition) {
    switch (position) {
        case ToastPosition.Top:
            return "";
        case ToastPosition.TopLeft:
            return "self-start";
        case ToastPosition.TopRight:
            return "self-end";
        default:
            return "";
    }
}