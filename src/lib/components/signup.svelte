<script>
    import {createEventDispatcher} from 'svelte';
    let result = false;
    const dispatch = createEventDispatcher();
    const continueEmail = () => {
        result = true;
        dispatch('value', {result});
    }
</script>

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
    <div class="max-w-max border border-black py-[0.55rem] px-[3.5rem] rounded-3xl hover:bg-slate-600 hover:border-slate-600 hover:text-black cursor-pointer">
        <button on:click={continueEmail}>Continue with email</button>
    </div>
    <div class="">
        <p class="text-center text-gray-400 text-xs mt-5">
            By creating an account you agree with out <a href="/" class="underline">Terms of Service</a>, <a href="/login" class="underline">Privacy Policy</a>
            </p>
        <p class="text-center text-gray-400 text-xs mt-5">
        Already have an account? <a href="/login" class="underline">Log in</a>
        </p>
    </div>

