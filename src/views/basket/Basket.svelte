<script>
    import Products from '../../components/Products/Products.svelte'
    import { basketStore } from '../../store/basket.js'
</script>

<h1>Basket</h1>

<Products products={$basketStore}/>