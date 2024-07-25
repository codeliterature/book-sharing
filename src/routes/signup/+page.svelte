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
        <img src="/images/library.jpg" alt="" class="h-[100vh] max-w-prose" />
        <div class="p-10 max-h-full flex flex-col items-center">
        <h1 class="font-bold text-2xl tracking-wide mb-5">
            Sign up to BookStellar
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
            <hr class="w-[6rem] bg-gray-400 h-[2px]" />
            <p class="px-1">OR</p>
            <hr class="w-[6rem] bg-gray-400 h-[2px]" />
        </div>
        <a href="/">
        <div class="max-w-max border border-black py-[0.55rem] px-[3.5rem] rounded-3xl hover:bg-slate-600 hover:border-slate-600 hover:text-black">
            <p>Continue with email</p>
        </div>
    </a>
        <div class="">
            <p class="text-center text-gray-400 text-xs mt-5">
                By creating an account you agree with out <a href="/" class="underline">Terms of Service</a>, <a href="/login" class="underline">Privacy Policy</a>
                </p>
            <p class="text-center text-gray-400 text-xs mt-5">
            Already have an account? <a href="/login" class="underline">Log in</a>
            </p>
        </div>
        </div>
    </div>
</main>