<script>
    let token = localStorage.getItem('authToken');

    if (!token) {
        // Redirect to login if not authenticated
        window.location.href = '/login';
    }

    // Fetch user data or other dashboard logic here
</script>

<main>
    <h1>Welcome to your Dashboard</h1>
    <p>You are successfully logged in!</p>
</main>
