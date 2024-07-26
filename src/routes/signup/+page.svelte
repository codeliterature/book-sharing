<script>
    import Signup from "$lib/components/signup.svelte";
    import Email from "$lib/components/email.svelte";
    import SignupForm from "$lib/components/signupForm.svelte";
    let email;
    let value = false;
    let continueEmail = false;
    let progress;
    const handleValue = (event) => {
        value = event.detail.result;
        console.log("value is ", value);
    };
    const handleEmail = (event) => {
        progress = event.detail.result;
        email = event.detail.email;
        continueEmail = event.detail.continueEmail;
        console.log(progress, email);
    }
</script>

<main>
    <div class="flex items-center justify-center md:justify-start content-center">
        <div class="relative min-h-[80vh] flex-shrink-0">
            <img src="/images/library.jpg" alt="" class="h-full object-cover w-[500px] hidden md:block" />
        </div>
        <div class="p-10 flex flex-col items-center content-center h-auto min-h-[80vh]">
            <h1 class="font-bold text-2xl tracking-wide mb-5">
                Sign up to BookStellar
            </h1>
            {#if !value}
                <Signup on:value={handleValue} />
            {:else if !value || !continueEmail}
                <Email on:value={handleEmail} />
            {:else}
                <SignupForm {email} />
            {/if}
        </div>
    </div>
</main>
