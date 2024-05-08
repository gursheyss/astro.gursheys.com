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

<style>
  @keyframes wiggle {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(-6deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(6deg); }
    100% { transform: rotate(0deg); }
  }

  .wiggle:hover {
    animation: wiggle 0.5s ease-in-out;
    animation-iteration-count: infinite;
  }
</style>

{#key imgSrc}
  <img
    src={imgSrc}
    alt="moon"
    class="inline-block h-6 w-6 align-middle wiggle pixelated"
    on:click={switchImage}
    in:fly={{ x: 0, y: -10, duration: 500 }}
  />
{/key}