<script lang="ts">
	import { cartOpen } from "$lib/stores/cartOpen";
    import { cartItems } from "$lib/stores/cartItems";
    import {fly} from 'svelte/transition';
	import CartItem from "./CartItem.svelte";
	import Backdrop from "./Backdrop.svelte";
	import { focusTrap } from "$lib/actions/focusTrap";

    function close() {
        $cartOpen = false;
    }
</script>

{#if $cartOpen}
    
    <Backdrop />

    <div use:focusTrap={{onDeactivate: close}} transition:fly={{ x: "100%" }} class="fixed right-0 top-0 w-[350px] bg-white border-l h-full">
        <div class="flex justify-between bg-black text-white p-4 uppercase font-bold">  
            Cart
            <button class="uppercase" on:click={close}><iconify-icon icon="maki:cross" class="text-20"></iconify-icon></button>
        </div>

        <div class="cart-items p-4 gap-2 grid">
            {#each Object.values($cartItems) as item}
                 <CartItem {...item}/>
            {/each}
        </div>
    </div>
    
{/if}