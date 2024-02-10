<svelte:options accessors />

<script lang="ts">
	import { getToastSelfAlignment } from '$lib/toast/toast/getToastSelfAlignment';
	import { removeToast } from '$lib/toast/toastHolder/removeToast';
	import { ToastPosition, ToastType } from '$lib/types';
	import { createEventDispatcher, onMount, type EventDispatcher } from 'svelte';
	import ToastIcon from './ToastIcon.svelte';
	import { fade, fly, scale, slide } from 'svelte/transition';
	import { flip, type AnimationConfig } from 'svelte/animate';

	export let position: ToastPosition = ToastPosition.Top;
	export let content: string = '';
	export let type: ToastType = ToastType.Plain;
	export let duration: number = -1;
	export let visible: boolean = true;
	export let dismissable: boolean = true;
	const dispatcher: EventDispatcher<any> = createEventDispatcher();

	onMount(() => {
		if (duration > 0) {
			setTimeout(() => dispatcher('dismiss'), duration);
		}
	});
</script>

{#if visible}
	<div
		id="toast"
		class="{getToastSelfAlignment(
			position
		)} flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
		role="alert"
		out:scale
		in:scale
	>
		<ToastIcon {type} />
		<div class="text-sm font-normal ms-3">{content}</div>
		{#if dismissable}
			<button
				type="button"
				class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
				data-dismiss-target="#toast-warning"
				style="pointer-events:all;"
				aria-label="Close"
				on:click={() => dispatcher('dismiss')}
			>
				<span class="sr-only">Close</span>
				<svg
					class="w-3 h-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
					/>
				</svg>
			</button>
		{/if}
	</div>
{/if}
