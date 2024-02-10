import { get } from "svelte/store";
import { toastStore } from "$lib/toast/toastStore";
import type Toast from "$lib/components/Toast/Toast.svelte";
import type { ToastData } from "$lib/types";



export function dismissToast(id: number | undefined) {
    if (id == undefined) return;
    let readToastStore = get(toastStore);
    const idx = readToastStore.findIndex(t => t.id == id);
    readToastStore[idx].visible = false;
    toastStore.set(readToastStore);
}