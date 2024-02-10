export enum ToastPosition {
    Top = "top",
    TopLeft = "top_left",
    TopRight = "top_right",
};

export enum ToastType {
    Plain = "plain",
    Success = "success",
    Warning = "warning",
    Error = "error"
}

export interface ToastData {
    content: string,
    id?: number,
    duration?: number,
    type?: ToastType,
    position?: ToastPosition,
    delay?: number,
    visible?: boolean,
    dismissable?: boolean
}

