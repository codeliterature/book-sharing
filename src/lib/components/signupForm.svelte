<script>
export let email;
let username = "";
let password = "";
let confirmPassword = "";
let dob = "";
let gender = "";
let otp = "";
let passwordVisible = false;

const handleSubmit = async () => {
    try {
    const response = await fetch("http://localhost:5000/api/v1/auth/signup", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, otp, username }),
    });
    if (!response.ok) {
        throw new Error("Login failed");
    }
    let data = await response.json();
    localStorage.setItem("authToken", data.token);
    } catch (err) {
    console.log("error", err);
    error = err.message;
    }
};

function togglePasswordVisibility() {
    passwordVisible = !passwordVisible;
}

$: passwordType = passwordVisible ? "text" : "password";
</script>

<div class="w-[100%]">
<form on:submit|preventDefault={handleSubmit} class="flex flex-col space-y-2">
    <div class="flex">
    <label for="username" class="text-sm font-semibold tracking-wide text-md">
        Username
    </label>
    <div class="w-2 h-2 bg-red-700 rounded-full blinking mx-2"></div>
    </div>
    <input
    id="username"
    type="text"
    name="username"
    class="bg-gray-300 rounded-lg max-w-full py-2"
    bind:value={username}
    required
    />

    <label for="email" class="text-sm font-semibold tracking-wide text-md">
    Email
    </label>
    <input
    id="email"
    type="text"
    name="email"
    class="bg-gray-300 rounded-lg max-w-full py-2"
    bind:value={email}
    required
    disabled
    />

    <label for="otp" class="text-sm font-semibold tracking-wide text-md">
    OTP
    </label>
    <input
    id="otp"
    type="text"
    name="otp"
    class="bg-gray-300 rounded-lg max-w-full py-2"
    bind:value={otp}
    required
    />

    <label for="password" class="text-sm font-semibold tracking-wide text-md">
    Password
    </label>
    <div class="relative">
    {#if passwordVisible}
        <input
        type="text"
        id="password"
        class="bg-gray-300 rounded-lg w-[100%] py-2"
        bind:value={password}
        required
        />
    {:else}
        <input
        type="password"
        id="password"
        class="bg-gray-300 rounded-lg w-[100%] py-2"
        bind:value={password}
        required
        />
    {/if}
    <button
        type="button"
        class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
        on:click={togglePasswordVisibility}
    >
        {passwordVisible ? "Hide" : "Show"}
    </button>
    </div>

    <label
    for="confirmPassword"
    class="text-sm font-semibold tracking-wide text-md"
    >
    Confirm Password
    </label>
    <div class="relative">
    {#if passwordVisible}
        <input
        type="text"
        id="confirmPassword"
        class="bg-gray-300 rounded-lg w-[100%] py-2"
        bind:value={confirmPassword}
        required
        />
    {:else}
        <input
        type="password"
        id="confirmPassword"
        class="bg-gray-300 rounded-lg w-[100%] py-2"
        bind:value={confirmPassword}
        required
        />
    {/if}
    </div>

    <label for="dob" class="text-sm font-semibold tracking-wide text-md">
    Date of Birth
    </label>
    <input
    type="date"
    id="dob"
    class="bg-gray-300 rounded-lg w-[100%] py-2"
    bind:value={dob}
    />

    <label for="gender" class="text-sm font-semibold tracking-wide text-md">
    Gender
    </label>
    <select id="gender" class="bg-gray-300 rounded-lg py-2" bind:value={gender}>
    <option value="">Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
    </select>

    <button
    class="py-[0.6rem] px-[2.3rem] bg-black text-white rounded-3xl text-center hover:bg-slate-600 hover:text-black"
    type="submit"
    >
    Signup
    </button>
</form>
</div>

<style>
@keyframes blink {
    0% {
    opacity: 1;
    }
    50% {
    opacity: 0;
    }
    100% {
    opacity: 1;
    }
}

.blinking {
    animation: blink 1s infinite;
}
</style>
