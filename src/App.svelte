<script>
    import { Router, Route } from "svelte-routing";
    import TheHeader from './components/TheHeader.svelte'
    import Home from './views/Home.svelte'
    import Products from './views/products/Products.svelte'
    import Product from './views/product/Product.svelte'
    import Basket from './views/basket/Basket.svelte'
    import NotFound from './views/NotFound.svelte'

    export let url = ''
</script>

<Router {url}>
    <TheHeader />

    <Route path="/" component={Home} />
    <Route path="/products/" component={Products} />
    <Route path="/products/:id" component={Product} />
    <Route path="/basket" component={Basket} />
    <Route path="*" component={NotFound} />
</Router>
