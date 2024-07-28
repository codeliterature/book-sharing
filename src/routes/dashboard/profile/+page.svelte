<script>
  import { onMount } from "svelte";
  import List from "../../../lib/components/list.svelte";
  let data;
  onMount(async () => {
    const response = await fetch("http://localhost:5000/api/v1/auth/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5ZTAzZmY5NTRjOGJjY2E5NjA0MTVlIiwiZW1haWwiOiJpbmF5YXRiYWtzaGkwMTZAZ21haWwuY29tIn0sImlhdCI6MTcyMTYzMTc0M30.KIAtljuMoGwWpmcEkgXxbCTXipgwKJ8JwInPzixVsG0",
      },
    });
    data = await response.json();
    console.log(data);
  });
</script>

<section>
  {#if data}
    <div>
      <div class="my-8 mx-4 flex items-center justify-between">
        <h1 class="text-xl">Name: {data.username}</h1>
        <h2 class="text-xl">Email: {data.email}</h2>
      </div>
      <div class="flex items-center flex-col justify-between gap-8">
        <h2 class="text-2xl font-bold">Your Listed Books</h2>
        {#each data.books as book}
          <List data={book} />
        {/each}
      </div>
    </div>
  {/if}
</section>
