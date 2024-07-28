<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    onMount(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');

        if (token) {
            localStorage.setItem('authToken', token);
            goto('/dashboard');
        } else {
            goto('/login');
        }
    });
</script>

<main>
    <p>Loading...</p>
</main>
