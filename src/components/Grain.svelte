<script lang="ts">
  import { onMount } from "svelte";
  let grain: HTMLDivElement;

  onMount(() => {
    const keyframesX = [
      "0%",
      "-2.5%",
      "-7.5%",
      "3.5%",
      "-2.5%",
      "-7.5%",
      "7.5%",
      "0%",
      "1.5%",
      "-5%",
    ];
    const keyframesY = [
      "0%",
      "-5%",
      "2.5%",
      "-12.5%",
      "12.5%",
      "5%",
      "0%",
      "7.5%",
      "17.5%",
      "5%",
    ];
    let i = 0;

    const interval = setInterval(() => {
      grain.style.transform = `translateX(${keyframesX[i % keyframesX.length]}) translateY(${
        keyframesY[i % keyframesY.length]
      })`;

      i++;
    }, 100);

    return () => clearInterval(interval);
  });
</script>

<div
  class="pointer-events-none fixed inset-0 z-40 h-full w-full overflow-hidden"
>
  <div
    bind:this={grain}
    class="absolute inset-[-200%] h-[400%] w-[400%] bg-[url('/noise.png')] bg-[length:256px] bg-left-top opacity-[1.5%]"
  />
</div>
