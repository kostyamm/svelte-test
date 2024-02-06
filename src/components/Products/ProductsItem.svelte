<script>
    import { productsStore } from '../../store/products.js'
    import { basketStore } from '../../store/basket.js'

    export let productId;
    export let image;
    export let title;
    export let content;
    export let category;

    const cutText = (text) => text.length > 120 ? text.slice(0, 120) + '...' : text

    const getProductById = (productId) => $productsStore.find(({ id }) => productId === id)

    let hasInBasket;

    basketStore.subscribe((products) => {
        hasInBasket = products.some(({ id }) => id === productId)
    })

    const removeFromBasket = () => {
        basketStore.removeProductById(productId)
    }

    const addToBasket = () => {
        const hasInBasket = $basketStore.some(({ id }) => id === productId)

        if (hasInBasket) {
            return
        }

        basketStore.addProduct(getProductById(productId))
    }
</script>

<div class="product-item">
    <img src={image} alt={title} />
    <div class="product-item__info">
        <p class="product-item__info__title">{title}</p>
        <p class="product-item__info__category">Category: {category}</p>
        <p class="product-item__info__content">{cutText(content)}</p>
    </div>
    {#if hasInBasket}
        <button on:click={removeFromBasket}>Remove</button>
    {:else}
        <button on:click={addToBasket}>Add</button>
    {/if}
</div>

<style>
    .product-item {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 12px;
        padding-bottom: 24px;
    }

    .product-item:not(:last-child) {
        border-bottom: 1px solid rgba(128, 128, 128, 0.5);
    }

    .product-item__info {
        flex: 1;
    }

    .product-item__info__title {
        margin: 0;
        font-size: 16px;
        font-weight: bold;
    }

    .product-item__info__category {
        font-size: 12px;
        margin: 4px 0 12px 0;
        border-bottom: 1px solid rgba(128, 128, 128, 0.5);
    }

    .product-item__info__content {
        margin: 0;
        font-size: 14px;
    }

    .product-item img {
        height: 80px;
        object-fit: contain;
        margin: 0;
    }
</style>
