<script>
    import { onMount } from 'svelte'
    import { productsStore } from '../../store/products.js'
    import Products from '../../components/Products/Products.svelte'

    onMount(async () => {
        await productsStore.fetchProducts()
    });
</script>

<h1>Products</h1>

<Products products={$productsStore}/>