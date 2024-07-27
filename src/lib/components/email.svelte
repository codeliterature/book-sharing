<script>
    import {createEventDispatcher} from 'svelte';
    let result;
    let continueEmail;
    const dispatch = createEventDispatcher();
const requestOtp = async () => {    
    try {
        const response = await fetch('http://localhost:5000/api/v1/auth/request-otp', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email}),
        });
        if (!response.ok) {
            throw new Error('Login failed');
        }
        let data = await response.json()
        result = data.message;
        continueEmail = true;
        dispatch('value', {result, email, continueEmail});
    }
    catch (err){
        console.log("error", err);  
        error = err.message;
    }
};
    let email;
</script>

<div class="w-[100%]">
    <form on:submit|preventDefault={requestOtp} class="flex flex-col space-y-3">
        <label for="email" class="text-sm font-semibold tracking-wide text-md"
                >Enter Your Email</label
            >
            <input
                id="email"
                type="text"
                name="email"
                class="bg-gray-300 rounded-lg py-2"
                bind:value={email}
                required
            />
            <button type="submit" class="py-[0.6rem] px-[2.3rem] bg-black text-white max-w-full rounded-3xl text-center hover:bg-slate-600 hover:text-black">Request OTP</button>
    </form>
</div>