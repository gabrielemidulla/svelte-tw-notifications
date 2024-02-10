import type { ToastData } from "$lib/types";
import Toast from "$lib/components/Toast/Toast.svelte";
import { toastStore } from "$lib/toast/toastStore";
import { get } from "svelte/store";


export async function addToast(data: ToastData) {
    data.visible = false;
    let newToastStore = get(toastStore);
    newToastStore = [...newToastStore, data];
    const delay = Math.max(1, newToastStore.filter(t => !t.visible).length) * 250;

    toastStore.set(newToastStore);

    if (data.delay == undefined) data.delay = delay;
    if (data.delay != undefined)
        await new Promise((r) => setTimeout(r, data.delay));
    data.visible = true;


    if (data.id == undefined) data.id = newToastStore.length;
    newToastStore[newToastStore.length - 1] = data;
    toastStore.set(newToastStore);

    return data;
}