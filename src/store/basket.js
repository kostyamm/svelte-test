import { writable } from 'svelte/store';

function createBasketStore() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        addProduct: (product) => update((products) => {
            return [...products, product]
        }),
        removeProductById: (productId) => update((products) => {
            return products.filter(({id}) => id !== productId)
        }),
    };
}

export const basketStore = createBasketStore();
