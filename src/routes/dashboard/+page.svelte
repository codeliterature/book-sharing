<script>
  import { get } from "svelte/store";
    import { dataStore } from "../../stores/dataStore";
  import { onMount } from "svelte";
  import List from "../../lib/components/list.svelte";
    let data = get(dataStore)
    onMount(() => {
        dataStore.subscribe(value => {
            data = value;
        })
    })
</script>

<section class="mx-2 my-4">
    <div class="flex flex-col items-center justify-between gap-4">
       {#if data}
       {#each data.books as book}
       <List data={book}/>
       {/each}
       {/if}
        
    </div>
</section>