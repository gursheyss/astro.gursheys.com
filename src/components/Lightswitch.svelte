<script lang="ts">
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";

  let imgSrc = "/moon.png";

  function switchImage() {
    imgSrc = imgSrc === "/moon.png" ? "/sun.png" : "/moon.png";
    if (typeof window !== "undefined") {
      document.body.className = imgSrc === "/moon.png" ? "moon" : "sun";
    }
  }

  onMount(() => {
    if (typeof window !== "undefined") {
      document.body.className = imgSrc === "/moon.png" ? "moon" : "sun";
    }
  });
</script>

{#key imgSrc}
  <img
    src={imgSrc}
    alt="moon"
    class="inline-block h-6 w-6 align-middle"
    on:click={switchImage}
    in:fly={{ x: 0, y: -10, duration: 500 }}
  />
{/key}
