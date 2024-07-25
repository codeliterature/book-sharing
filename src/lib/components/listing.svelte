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
  
<div>
    <img class="h-[400px] max-w-max" src={data.coverImage} alt="">
</div>
    
    
    
  