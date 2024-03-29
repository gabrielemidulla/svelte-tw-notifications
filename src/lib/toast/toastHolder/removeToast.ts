import { get } from "svelte/store";
import { toastStore } from "$lib/toast/toastStore";
import type Toast from "$lib/components/Toast/Toast.svelte";
import type { ToastData } from "$lib/types";



export function removeToast(id: number) {
    let readToastStore = get(toastStore);
    let i = 0;

    readToastStore.forEach((toast: ToastData) => {
        if (toast.id == id) {
            readToastStore.splice(i, 1);
        }
        i++;
    });

    toastStore.set(readToastStore);
}