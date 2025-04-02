<script lang="ts">
  export let classes: string = "";
  export let rounded: string = "lg";
  export let onClick = () => {};

  let card: HTMLButtonElement;
</script>

<button
  type="button"
  on:click={onClick}
  bind:this={card}
  class={`${classes} block w-full cursor-default border border-gray-800 bg-[#181818] p-6 text-left transition-all duration-200 hover:border-accent hover:shadow-[0_0_10px_rgba(103,58,183,0.3)] ${rounded === "lg" ? "rounded-lg" : rounded === "md" ? "rounded-md" : rounded === "sm" ? "rounded-sm" : rounded === "xl" ? "rounded-xl" : rounded === "2xl" ? "rounded-2xl" : rounded === "3xl" ? "rounded-3xl" : rounded === "full" ? "rounded-full" : ""}`}
>
  <slot />
</button>
