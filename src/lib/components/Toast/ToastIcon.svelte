<script lang="ts">
	import { getToastIconColor } from '$lib/toast/toastIcon/getToastIconColor';
	import { getToastIconPath } from '$lib/toast/toastIcon/getToastIconPath';
	import type { ToastType } from '$lib/types';

	export let type: ToastType;
</script>

<div
	class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg {getToastIconColor(
		type
	)}"
>
	<svg
		class="w-5 h-5"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
		viewBox="0 0 20 20"
	>
		<path d={getToastIconPath(type)} />
	</svg>
	<span class="sr-only">Check icon</span>
</div>
