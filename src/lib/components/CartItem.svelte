<script>
	import ProductImage from "./ProductImage.svelte";
    import { removeFromCart } from "$lib/stores/cartItems";
    export let hex;
    export let title;
    export let name;
    export let price;
    export let sku;
</script>

<div class="flex gap-2 justify-between">

    <div class="w-[125px]">
        <ProductImage bgColor={hex} />
    </div>

    <div class="flex-grow">
        <div class="font-bold">{title}</div>
        <div>{name}</div>
        <div>${price}</div>
    </div>

    <div class="delete-btn">
        <button on:click={() => removeFromCart(sku)}><iconify-icon icon="ph:trash-bold" class="text-20"></iconify-icon></button>
    </div>

</div>