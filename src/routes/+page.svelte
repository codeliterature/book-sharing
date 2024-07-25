<script>
    import Card from "$lib/components/card.svelte";
    import Listing from "$lib/components/listing.svelte";
    import { onMount } from "svelte";
    let data = [];
    let loading = true;
    let error = null;
    onMount(async () => {
        try {
            const response = await fetch("http://localhost:5000/api/v1/books/allbooks");
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }
            data = await response.json();
        } catch (err) {
            error = err.message
        } finally {
            loading = false;
        }
    })
</script>

<main>

    <!-- Hero section -->

  <section class="min-h-[80vh] flex items-center justify-center bg-[url('/home.jpg')] bg-center bg-cover bg-no-repeat">
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-4xl md:text-6xl font-bold text-white">Find Your Next Great Read</h1>
      <div class="flex items-center justify-center space-x-4 py-4">
        <a class="bg-black rounded-full px-6 py-4 text-white text-lg hover:bg-slate-600" href="/">Get Started</a>
        <a class="bg-black rounded-full px-6 py-4 text-white text-lg hover:bg-slate-600" href="/">Browse Books</a>
      </div>
    </div>
  </section>

  <section class="my-8">
    <div class="flex items-center justify-center">
        <h1 class="text-4xl font-bold">Featured Books</h1>
    </div>
    {#if loading}
    <p>loading...</p>
    {:else if error}
    <p>Error: {error}</p>
    {:else}
    <div class="my-10 grid gap-4 md:grid-cols-3 md:grid-rows-3 grid-cols-1 grid-rows-1 place-items-center">
        {#each data.books as book}
        <Card data={book}/>
        {/each}
    </div>
    {/if}
  </section>
<section class="my-2 mx-4">
  <div class="flex items-center justify-start">
    <h1 class="text-4xl font-bold">Latest Listings</h1>
</div>
<div>
  {#if loading}
    <p>loading...</p>
    {:else if error}
    <p>Error: {error}</p>
    {:else}
    <div class="my-10 flex items-center justify-center space-x-10 overflow-x-scroll snap-x">
        {#each data.books as book}
        <Listing data={book}/>
        {/each}
    </div>
    {/if}
</div>
  </section>
</main>
