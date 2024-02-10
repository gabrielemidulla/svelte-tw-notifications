<script lang="ts">
	import { dismissToast } from '$lib/toast/toastHolder/dismissToast';
	import { toastStore } from '$lib/toast/toastStore';
	import { flip } from 'svelte/animate';
	import Toast from './Toast.svelte';
	import { scale } from 'svelte/transition';
	import { ToastPosition } from '$lib/types';

	export let alignment: ToastPosition = ToastPosition.Top;
</script>

<div
	class="fixed flex flex-col items-center w-screen h-screen gap-2 p-5 pointer-events-none"
	id="toastHolder"
>
	{#each $toastStore as toast}
		<Toast
			{...toast}
			position={!toast.position ? alignment : toast.position}
			on:dismiss={() => dismissToast(toast.id)}
		/>
	{/each}
</div>
