<script lang="ts">
	import ProductImage from "./ProductImage.svelte";
    import ProductSwatch from "./ProductSwatch.svelte";
    import { addToCart } from "$lib/stores/cartItems";

    export let title: string;
    export let variants: any;

    let selectedVariantIndex = 0;
    let selectedVariant;

    const handleSwatchClick = (index) => {
        selectedVariantIndex = index;
    }

    const handleAddToCartClick = () => {
        addToCart(title , selectedVariant)
    }

    $: selectedVariant = variants[selectedVariantIndex];

</script>

<div class="border p-4 grid gap-2">
    <ProductImage bgColor={variants[selectedVariantIndex].hex}/>
    <p class="font-bold text-20">{title}</p>
    <div class="flex gap-2">
        {#each variants as variant, index}
            <ProductSwatch color={variant.hex} selected={index === selectedVariantIndex} on:click={() => handleSwatchClick(index)}/>
        {/each}
    </div>
    <p>${variants[selectedVariantIndex].price}</p>
    <div class="">
        <button class="bg-black p-2 uppercase font-bold text-white" on:click={handleAddToCartClick}>Add to Cart</button>
    </div>
</div>