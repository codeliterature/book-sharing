<script>
  import { onMount } from "svelte";
 
  export let data;
  let owner;
const fetchOwnerName = async (id) => {
    try {
        const res = await fetch(`http://localhost:5000/api/v1/auth/user/${id}`);
        const data = await res.json();
		return data.username
    }catch  (err) {
        console.log(err.message)
    }

  }
  onMount(async () => {
    const ownerId = data.owner; // Get the owner ID
    const name = await fetchOwnerName(ownerId);
    owner = name;
});
</script>




<!-- component -->

<div class="block border border-1px border-black rounded-lg bg-white w-[80%]">
	<div class="h-[200px]">
		<img class="object-cover object-center rounded-t-lg h-full w-full" src={data.coverImage} alt="">
	</div>

	<div class="p-2">
		<div class="flex justify-between">
			<h5 class="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50">
				{data.title}
			</h5>
			<h5 class="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50 flex">
                {#if owner}
                  @{owner}
                {:else}
                  Loading owner...
                {/if}
              </h5>
              
		</div>
		<p class="mb-1 text-sm text-neutral-600 dark:text-neutral-200">
			{data.author}
		</p>

		<p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
			Condition: {data.condition}
		</p>
		<h5 class="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50">
			Genre: {data.genre}
		</h5>
	</div>
</div>
