<script>
    import { Link } from "svelte-routing";
    import { basketStore } from '../store/basket.js'
    import Modal from './UI/Modal.svelte';

    let showModal = false;
    let email;
    let password;

    const handleSubmit = () => {
        alert(`Email: ${email}; Password: ${password}`)
    }
</script>

<div class="header">
    <div>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
    </div>
    <div>
        <Link to='/basket'>Basket {$basketStore.length || ''}</Link>
        <button on:click={() => (showModal = true)}>Log in</button>
    </div>
</div>

<Modal bind:showModal>
    <h2>Log in</h2>
    <form on:submit|preventDefault={handleSubmit}>
        <input placeholder="Email" bind:value={email}>
        <input placeholder="Password" bind:value={password}>
        <button type="submit">Submit</button>
    </form>
</Modal>

<style>
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    form {
        display: flex;
        flex-direction: column;
    }

    input {
        margin-bottom: 12px;
    }

    button {
        margin-left: 12px;
    }
</style>
