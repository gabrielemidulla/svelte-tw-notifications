import { get } from "svelte/store";
import { toastStore } from "$lib/toast/toastStore";
import type Toast from "$lib/components/Toast/Toast.svelte";


export function removeToast(id: number) {
    let readToastStore = get(toastStore);
    let i = 0;

    readToastStore.forEach((toast: Toast) => {
        if (toast.id == id) {
            readToastStore[i].$destroy();
            readToastStore.splice(i, i);
        }
        i++;
    });

    toastStore.set(readToastStore);
}