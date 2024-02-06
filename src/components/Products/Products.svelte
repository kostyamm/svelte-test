<script>
    import ProductsItem from './ProductsItem.svelte'
    export let products;
</script>

<div class="products">
    {#each products as { id, image, title, content, category }, i (id)}
        <ProductsItem productId={id} image={image} title={title} content={content} category={category} />
    {:else}
        <p>loading...</p>
    {/each}
</div>

<style>
    .products {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 24px;
    }
</style>