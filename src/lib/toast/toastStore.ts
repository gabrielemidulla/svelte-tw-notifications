import { writable } from "svelte/store";
import type Toast from "$lib/components/Toast/Toast.svelte";
export const toastStore = writable<Toast[]>([]);