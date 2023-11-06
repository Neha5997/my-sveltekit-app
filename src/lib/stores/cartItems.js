import { readonly, writable } from "svelte/store";
import { persisted } from 'svelte-persisted-store';

const items = persisted('cart.items' , {});

export function addToCart( title , variant) {
    const productData = {title: title , ...variant};
   
    items.update((state) => {
        const productSku = variant.sku;
        state[productSku] = productData;
        console.log(state);
        return state;
    });
}

export function removeFromCart( sku ) {
    items.update((state) => {
        delete state[sku];
        return state;
    });
}

export const cartItems = readonly(items);