<script>
    const handleSubmit = async () => {
    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password}),
        });
        if (!response.ok) {
            throw new Error('Login failed');
        }
        const data = await respose.JSON();
        localStorage.setItem('authToken', data.token);
        goto('/');
    }
    catch (err){
        error = err.message;
    }
    };
    let username = "";
    let email = "";
    let password = "";
</script>

<main>
    <div class="flex items-center">
        <img src="/images/library.jpg" alt="" class="max-h-screen max-w-prose" />
        <div class="p-10 flex flex-col items-center space-y-2">
        <h1 class="font-bold text-2xl tracking-wide mb-5">
            Login to BookStellar
        </h1>
        <a href="/">
            <div
            class="py-[0.6rem] px-[2.3rem] my-2 bg-black text-white max-w-max rounded-3xl flex items-center space-x-2 hover:bg-slate-600 hover:text-black"
            >
            <img src="/images/google.png" alt="" class="h-5 w-5" />
            <h3>Continue with Google</h3>
            </div>
        </a>
        <div class="flex items-center text-gray-400 text-sm py-5 max-w-max">
            <hr class="w-[4rem] bg-gray-400 h-[2px]" />
            <p class="px-1">or login with email</p>
            <hr class="w-[4rem] bg-gray-400 h-[2px]" />
        </div>

        <div class="w-[100%]">
            <form
            on:submit|preventDefault={handleSubmit}
            class="flex flex-col space-y-2 "
            >
            <label for="email" class="text-sm font-semibold tracking-wide text-md"
                >Username or Email</label
            >
            <input
                id="email"
                type="text"
                name="email"
                class="bg-gray-300 rounded-lg max-w-full py-2"
                bind:value={email}
                required
            />
            <a href="/" class="text-sm text-gray-400 text-right">Forgot?</a>
            <label for="passowrd" class="text-sm font-semibold tracking-wide text-md"
                >Password</label
            >
            <input
                type="password"
                id="password"
                class="bg-gray-300 rounded-lg max-w-full py-2"
                bind:value={password}
                required
            />
            <button
                class="py-[0.6rem] px-[2.3rem] bg-black text-white max-w-full rounded-3xl text-center hover:bg-slate-600 hover:text-black"
                type="submit">Login</button
            >
            </form>
            <p class="text-center text-gray-400 text-xs mt-8">
            Don't have an account? <a href="/signup" class="underline">Sign up</a>
            </p>
        </div>
        </div>
    </div>
</main>
