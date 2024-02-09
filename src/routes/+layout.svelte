<script>
	import Toast from '$lib/components/Toast/Toast.svelte';
	import ToastHolder from '$lib/components/Toast/ToastHolder.svelte';
	import { ToastPosition, ToastType } from '$lib/types';
	import { onMount } from 'svelte';
	import '../app.css';
	import { addToast } from '$lib/toast/toastHolder/addToast';
	import { editToast } from '$lib/toast/toastHolder/editToast';

	onMount(() => {
		addToast('Toast 1', ToastType.Success);
		addToast('Toast 2', ToastType.Error);
	});
</script>

<ToastHolder></ToastHolder>
<slot />
