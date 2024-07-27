<script>
    import { onMount } from 'svelte';
    // import { navigate } from 'svelte-routing';

    onMount(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');

        if (token) {
            localStorage.setItem('authToken', token);
            // navigate('/dashboard');
        } else {
            // navigate('/login');
        }
    });
</script>

<main>
    <p>Loading...</p>
</main>
