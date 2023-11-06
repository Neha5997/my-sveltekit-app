<script>
	import { onMount } from 'svelte';
    import {fade} from 'svelte/transition';

    onMount(() => {
        document.body.style.overflowY = 'hidden';

        return () => {
            document.body.style.overflowY = '';
        }
    });
</script>

<div transition:fade={{ duration:200 }} class="bg-black h-full w-full top-0 right-0 fixed opacity-80"></div>