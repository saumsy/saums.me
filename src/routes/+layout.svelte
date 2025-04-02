<script lang="ts">
  import "../app.css";
  import { browser } from "$app/environment";
  import posthog from "posthog-js";
  import { onMount } from "svelte";
  import { PUBLIC_POSTHOG_KEY } from "$env/static/public";
  import Header from "../components/Header.svelte";

  onMount(() => {
    if (browser) {
      posthog.init(PUBLIC_POSTHOG_KEY, {
        api_host: "https://us.i.posthog.com"
      });
    }
  });

  let innerHeight = 0;
  let innerWidth = 0;
</script>

<div class="container mx-auto max-w-3xl px-8">
  <Header />
  <slot />
</div>

<svelte:window bind:innerHeight bind:innerWidth />
