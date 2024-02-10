import { get } from "svelte/store";
import { toastStore } from "$lib/toast/toastStore";
import type Toast from "$lib/components/Toast/Toast.svelte";
import type { ToastData } from "$lib/types";


export function editToast(id: number, content: string) {
    let readToastStore = get(toastStore);
    let i = 0;

    readToastStore.forEach((toast: ToastData) => {
        if (toast.id == id) {
            toast.content = content;
            readToastStore.splice(i, i);
        }
        i++;
    });

    toastStore.set(readToastStore);
}