<script>
	import ProductCard from "$lib/components/ProductCard.svelte";
    
    export let data;
</script>

<main class="grid gap-6 md:grid-cols-12">
    <div class="filters border font-bold text-20 p-4 md:col-span-3">Filters</div>
    <div class="main-content border p-4 md:col-span-9">
        <h1 class="font-bold text-20 uppercase">Products</h1>
        <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {#each data.products as product}
                 <ProductCard {...product}/>
            {/each}
        </div>
     </div>
</main>
