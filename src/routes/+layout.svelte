<script>
	import '../styles/tailwind-output.css';

	import ToastHolder from '$lib/components/Toast/ToastHolder.svelte';
	import { ToastPosition, ToastType } from '$lib/types';
	import { onMount } from 'svelte';
	import { addToast } from '$lib/toast/toastHolder/addToast';
	import ToastIcon from '$lib/components/Toast/ToastIcon.svelte';

	onMount(async () => {
		await addToast({
			content: 'Logged in succesfully!',
			type: ToastType.Success,
			duration: 3000,
			dismissable: true
		});
	});
</script>

<ToastHolder alignment={ToastPosition.Top}></ToastHolder>

<slot />
