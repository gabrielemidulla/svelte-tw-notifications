import { writable } from "svelte/store";
import type { ToastData } from "$lib/types";
export const toastStore = writable<ToastData[]>([]);