<script>
    import { cartOpen } from "$lib/stores/cartOpen";
    import { cartCount } from "$lib/stores/cartCount";
	import { getContext } from "svelte";

    const title = getContext('site.title');
</script>


<header class="border p-4 flex justify-between items-center">
    <a href="/" class="logo text-30 text-blue uppercase font-bold">{title}</a>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="flex gap-4 font-bold text-orange page-links">
        <a href="/my-account">My Account</a>
        <a href="/products">Products</a>
        <a href="/fetch/1">Blog</a>
    </div>
    <button class="cart relative" on:click={() => $cartOpen = true}>
        <iconify-icon icon="mdi:cart-outline" class="text-30"></iconify-icon>
        {#if $cartCount}
            <div class="cart-count absolute -top-3 -right-1 text-[13px] bg-blue rounded-full w-[20px] h-[20px]">{$cartCount}</div>
        {/if}
    </button>
</header>

<style lang="scss">
    .page-links{
        a {
            &:hover {
                @apply underline;
            }
        }
    }
</style>