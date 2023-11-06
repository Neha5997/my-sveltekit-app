<script>
	import { setContext } from 'svelte';
	import '../app.scss';
	import 'iconify-icon';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Cart from '$lib/components/Cart.svelte';

	setContext('site.title', 'Logitech');

	let ltr = true;
	const handleToggle = () => {
		ltr = !ltr ;
	}

</script>

<div class="">
	<div class="mx-auto max-w-screen-lg px-6 py-12">
		<div class="col-start-2">
			<!-- Here you can place your Navigation -->
		</div>
		<div>
			<button class="border text-white bg-black p-2 mb-4" on:click={handleToggle}>Toggle layout</button>

			<div class="grid gap-6" dir={ltr ? 'ltr' : 'rtl'}>
				<Header />
				<slot />
				<Footer />
			</div>
			
			<Cart />
			
		</div>
	</div>
</div>
