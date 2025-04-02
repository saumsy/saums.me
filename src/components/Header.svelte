<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  onMount(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        return;
      }

      if (e.key === "h") {
        goto("/");
      } else if (e.key === "p") {
        goto("/projects");
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });
</script>

<nav class="mb-8 py-4">
  <div class="flex font-mono text-gray-500">
    <a href="/" class="mr-6 hover:text-accent">[h] home</a>
    <a href="/projects" class="hover:text-accent">[p] projects</a>
  </div>
</nav>
