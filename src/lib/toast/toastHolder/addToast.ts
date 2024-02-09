import { ToastPosition, ToastType } from "$lib/types";
import Toast from "$lib/components/Toast/Toast.svelte";
import { toastStore } from "$lib/toast/toastStore";
import { get } from "svelte/store";


export function addToast(content: string, type: ToastType = ToastType.Plain, position: ToastPosition = ToastPosition.Top, duration: number = -1) {
    const toastHolder: HTMLElement | null = document.getElementById("toastHolder");
    if (!toastHolder) return;

    let newToastStore = get(toastStore);

    const newToast: Toast = new Toast({
        props: {
            content: content,
            type: type,
            position: position,
            id: newToastStore.length,
            duration: duration
        },

        target: toastHolder
    });

    newToastStore = [...newToastStore, newToast];
    toastStore.set(newToastStore);
    return newToast;
}