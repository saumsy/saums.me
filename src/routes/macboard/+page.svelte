<script lang="ts">
  import Card from "../../components/Card.svelte";

  let features: {
    title: string;
    description: string;
    image: string;
  }[] = [
    {
      title: "CLEAN UI",
      description:
        "What is important for an app to be classified as a minimal one? Undoubtebly the UI, and likewise Macboard has a very clean UI for the best user experience!",
      image: "project-assets/sidebar.svg"
    },
    {
      title: "LIGHTWEIGHT",
      description:
        "Experience unparalleled speed and efficiency with the lightweight design, ensuring smooth performance even on resource-constrained devices.",
      image: "project-assets/feather.svg"
    },
    {
      title: "DETAILS",
      description:
        "Get details for any and everything you copy, Macboard offers users to view the time since something was copied, the app from which it was copied and even URL previews!",
      image: "project-assets/info.svg"
    },
    {
      title: "KEYBOARD CONTROL",
      description:
        "Take full control of your workflow with intuitive keyboard shortcuts and navigation, allowing you to accomplish tasks with minimal hand movement.",
      image: "project-assets/keyboard.svg"
    },
    {
      title: "SECURE & PRIVATE",
      description:
        "Macboard respects your privacy and security the most. You don't have to worry about your data, all of this is stored right on your computer. Also, you have full control over what you get.",
      image: "project-assets/lock.svg"
    },
    {
      title: "OPEN SOURCE",
      description:
        "Macboard is completely open source! Meaning, you know about what you get, there's nothing to hide. This also makes updates quite more often!",
      image: "project-assets/github.svg"
    }
  ];
</script>

<svelte:head>
  <title>Macboard</title>
  <meta property="og:title" content="Macboard" />
  <meta property="og:description" content="A minimalistic clipboard manager for macOS" />
  <meta property="og:image" content="https://saums.me/project-assets/macboard-full.png" />
  <meta property="twitter:image" content="https://saums.me/project-assets/macboard-full.png" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main class="mt-[-12px] flex flex-1 flex-col p-4">
  <section class="flex flex-wrap items-center justify-center py-8 sm:py-14">
    <img src="project-assets/macboard.png" alt="Macboard Logo" class="mr-4 h-32 w-32" />
    <div class="text-center md:text-left">
      <h3 class="text-4xl font-semibold sm:text-5xl md:text-6xl">
        <span class="gradientText">Macboard</span>
      </h3>
      <p class="sm:text-large mt-3 md:text-xl">
        A <span class="gradientText">minimalistic</span> clipboard manager for macOS
      </p>
    </div>
    <br />
  </section>
  <section class="mt-[-20px] md:mt-[-28px] flex flex-row items-center justify-center">
    <a href="/download/Macboard.dmg" download>
      <div
        class="Poppins poppingButton mb-2 me-3 cursor-pointer rounded-xl bg-gradient-to-r from-[#b385f4] to-[#4f48dd] px-5 py-2 text-center text-lg font-bold text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800"
      >
        <i class="fa fa-download" />&nbsp; Download
      </div>
    </a>
    <a href="https://github.com/27Saumya/Macboard" target="_blank">
      <div
        class="Poppins poppingButton mb-2 me-3 cursor-pointer rounded-2xl border-2 border-violet-600 px-5 py-2 text-center text-lg font-bold text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800"
      >
        <i class="fa fa-github" />&nbsp; Github
      </div>
    </a>
  </section>
  <p class="text-center">
    <i class="fa-brands fa-apple" />&nbsp; MacOS Monterey 12.0+
  </p>
  <img
    src="project-assets/macboard-demo.png"
    alt="Macboard Demo"
    class="mx-auto mt-5 h-2/3 w-2/3 rounded-3xl"
  />

  <section class="flex flex-col gap-24 py-32">
    <div class="flex flex-col gap-2 text-center">
      <h2 class="Poppins text-3xl">
        Why <span class="Poppins gradientText text-4xl font-bold">use</span> Macboard?
      </h2>
    </div>

    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {#each features as card}
        <Card classes="cursor-auto aspect-[1] lg:w-[350px] mx-auto">
          <div
            class="content flex max-w-[20rem] flex-col items-center justify-center gap-3 p-1 text-center"
          >
            <div
              class="border-outline flex aspect-[1] items-center justify-center rounded-xl border border-violet-400 bg-[#9792ff] p-5"
            >
              <img src={card.image} alt={card.title} class="w-10" />
            </div>
            <div class="">
              <h1 class="gradientText pl-2 text-2xl font-semibold">
                {card.title}
              </h1>
              <p class="mt-1 pl-2 text-sm opacity-[0.8]">
                {card.description}
              </p>
            </div>
          </div>
        </Card>
      {/each}
    </div>
  </section>
</main>
