import { writable } from 'svelte/store';

function createProductsStore() {
    const { subscribe, set } = writable([]);

    return {
        subscribe,
        fetchProducts: async () => {
            const res = await fetch('https://jsonplaceholder.org/posts');
            const products = await res.json()
            set(products);
        },
    };
}

export const productsStore = createProductsStore();
