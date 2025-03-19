<script lang="ts">
  import Card from "./Card.svelte";

  let skills: { name: string; link: string }[] = [
    {
      name: "Python",
      link: "https://www.python.org"
    },
    {
      name: "Rust",
      link: "https://www.rust-lang.org"
    },
    {
      name: "Typescript",
      link: "https://www.typescriptlang.org"
    },
    {
      name: "Swift",
      link: "https://www.swift.org"
    },
    {
      name: "Golang",
      link: "https://go.dev"
    }
  ];

  let projects: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[] = [
    {
      title: "Macboard",
      description: "A minimalistic clipboard manager for macOS",
      image: "project-assets/macboard-full.png",
      link: "/macboard"
    },
    {
      title: "Cricket Guru",
      description:
        "Relive your favorite sport through the best cricket bot on Discord with 33K+ users & 14K+ servers (co-developer)",
      image: "project-assets/cg.png",
      link: "https://cricketguru.pro"
    },
    {
      title: "Localizer",
      description: "A CLI tool that helps you localize your applications efficiently",
      image: "project-assets/localizer.png",
      link: "https://github.com/saumsy/localizer"
    },
    {
      title: "Lines Tally",
      description: "An elegant CLI tool that returns the number of lines of code in a directory",
      image: "project-assets/lines-tally.png",
      link: "https://github.com/saumsy/lines-tally"
    },
    {
      title: "Create Discord Bot",
      description: "A blazingly fast 🚀 CLI tool for quickly creating Discord Bot boilerplates",
      image: "project-assets/create-discord-bot.png",
      link: "https://github.com/saumsy/create-discord-bot"
    },
    {
      title: "Hangdev",
      description:
        "A CLI game inspired from Hangman made for developers to play right in their computer shell!",
      image: "project-assets/hangdev.png",
      link: "https://github.com/saumsy/hangdev"
    }
  ];

  let techStackCards: {
    title: string;
    description: string;
    image: string;
    link: string;
    tag: string;
  }[] = [
    {
      title: "Python",
      description:
        "Python is a versatile and powerful programming language used for web development, data science, artificial intelligence, and more.",
      image: "tech-stack/python.svg",
      link: "https://python.org",
      tag: "Language"
    },
    {
      title: "Rust",
      description:
        "Rust is a systems programming language that offers memory safety, concurrency, and performance. It is suitable for building high-performance and reliable software.",
      image: "tech-stack/rust.svg",
      link: "https://www.rust-lang.org/",
      tag: "Language"
    },
    {
      title: "TypeScript",
      description:
        "TypeScript is a superset of JavaScript that adds static typing and other features to enhance developer productivity and code quality.",
      image: "tech-stack/ts.svg",
      link: "https://www.typescriptlang.org/",
      tag: "Language"
    },
    {
      title: "Swift",
      description:
        "Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, and tvOS development. It offers modern features and performance.",
      image: "tech-stack/swift.svg",
      link: "https://developer.apple.com/swift/",
      tag: "Language"
    },
    {
      title: "GoLang",
      description:
        "GoLang is a statically typed, compiled, and concurrent programming language. It is designed to be easy to learn and easy to use.",
      link: "https://go.dev/",
      image: "tech-stack/golang.svg",
      tag: "Language"
    },
    {
      title: "React",
      description:
        "ReactJS is a JavaScript library for building user interfaces. It is maintained by Facebook and offers a component-based approach for building reusable UI components.",
      image: "tech-stack/react.svg",
      link: "https://reactjs.org/",
      tag: "Library"
    },
    {
      title: "Next.js",
      description:
        "Next.js is a React framework for building server-rendered and statically-generated web applications. It offers features like automatic code splitting, server-side rendering, and more.",
      image: "tech-stack/next.svg",
      link: "https://nextjs.org/",
      tag: "Framework"
    },
    {
      title: "Svelte",
      description:
        "Svelte is a radical new approach to building user interfaces. It shifts the work from the browser to the build step, resulting in highly optimized and efficient applications.",
      image: "tech-stack/svelte.svg",
      link: "https://svelte.dev/",
      tag: "Framework"
    },
    {
      title: "Tailwind CSS",
      description:
        "Tailwind CSS is a utility-first CSS framework for building custom designs without having to leave your HTML. It offers a low-level utility approach for styling web applications.",
      image: "tech-stack/tailwind.svg",
      link: "https://tailwindcss.com/",
      tag: "Framework"
    },
    {
      title: "PostgreSQL",
      description:
        "PostgreSQL is a powerful, open-source relational database system known for its reliability, feature-richness, and robustness. It is widely used in enterprise applications.",
      image: "tech-stack/postgresql.svg",
      link: "https://www.postgresql.org/",
      tag: "Database"
    },
    {
      title: "MongoDB",
      description:
        "MongoDB is a popular NoSQL database known for its flexibility, scalability, and performance. It stores data in flexible, JSON-like documents.",
      image: "tech-stack/mongodb.svg",
      link: "https://www.mongodb.com/",
      tag: "Database"
    },
    {
      title: "Git",
      description:
        "Git is a distributed version control system for tracking changes in source code during software development.",
      image: "tech-stack/git.svg",
      link: "https://git-scm.com/",
      tag: "Version Control"
    }
  ];
</script>

<main class="mt-[-12px] flex flex-1 flex-col p-4">
  <section
    id="/"
    class="grid-col-1 grid gap-10 py-8 sm:py-14"
    style="text-shadow: 0px 0px 100px white"
  >
    <div class="flex justify-center gap-6 md:gap-8 lg:gap-10">
      <div class="text-center">
        <h3 class="text-4xl font-semibold sm:text-5xl md:text-6xl">
          Hey <span class="wave">👋</span>! I&apos;m <span class="gradientText">Saumya</span>&comma;
          <br />
          a full stack <span class="gradientText">Developer</span>
        </h3>
        <br />
        <p class="sm:text-large md:text-xl">
          My proficiency includes {#each skills as skill, index}
            <span class="gradientText decoration-violet-400 hover:underline hover:decoration-wavy"
              ><a href={skill.link} target="_blank">{skill.name}</a></span
            >{index == skills.length - 1 ? "" : index == skills.length - 2 ? " & " : ", "}
          {/each}
        </p>
      </div>
    </div>
    <img
      src="images/profile.png"
      alt="Profile"
      class="z-[2] mx-auto mt-8 max-h-[70vh] rounded-full border-4 border-violet-400 object-cover"
    />
  </section>

  <section id="projects" class="flex flex-col items-center gap-24 py-20 lg:py-32">
    <div class="flex flex-col gap-2 text-center">
      <h2
        class="Poppins text-lg underline decoration-violet-400 decoration-wavy sm:text-xl lg:text-2xl"
      >
        Projects that I&apos;ve <span class="gradientText font-bold">built</span> with 💖
      </h2>
    </div>

    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {#each projects as project}
        <Card>
          <div
            class="content flex max-w-[20rem] flex-col items-start justify-center gap-3 p-1 text-left"
          >
            <a href={project.link} target="_blank">
              <img src={project.image} alt={project.title} class=" rounded-3xl object-cover" />
            </a>
            <div class="">
              <a
                href={project.link}
                target="_blank"
                class="gradientText pl-2 text-2xl font-semibold underline decoration-transparent underline-offset-4 hover:decoration-violet-400"
              >
                {project.title}
              </a>
              <p class="mt-1 pl-2 text-sm opacity-[0.8]">
                {project.description}
              </p>
            </div>
          </div>
        </Card>
      {/each}
    </div>
  </section>

  <section id="tech-stack" class="flex flex-col items-center gap-24 py-16">
    <div class="flex flex-col gap-2 text-center">
      <h2
        class="Poppins text-lg underline decoration-violet-400 decoration-wavy sm:text-xl lg:text-2xl"
      >
        Tech I <span class="gradientText text-2xl font-bold">use</span> everyday 👨‍💻
      </h2>
    </div>

    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {#each techStackCards as card}
        <Card
          on:click={() => window.open(card.link, "_blank")}
          classes="cursor-pointer aspect-[1] lg:w-[350px] "
        >
          <div
            class="content flex max-w-[20rem] flex-col items-center justify-center gap-3 p-1 text-center"
          >
            <div
              class="border-outline flex aspect-[1] items-center justify-center rounded-xl border border-violet-400 bg-[#3d3a45] p-5"
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
              <div class="flex flex-wrap items-center justify-center gap-1">
                <div
                  class="gradientText text-sx mt-4 rounded-xl border border-indigo-700 px-2 py-1 font-semibold"
                >
                  {card.tag}
                </div>
              </div>
            </div>
          </div>
        </Card>
      {/each}
    </div>
  </section>

  <section id="about" class="py-16 text-center">
    <h2
      class="Poppins text-lg underline decoration-violet-400 decoration-wavy sm:text-xl lg:text-2xl"
    >
      A little more <span class="gradientText font-bold">about</span> me 🤭
    </h2>
    <p class="mt-4 text-pretty sm:px-4 md:px-8 lg:px-20">
      Hey there, thanks for sticking out till the very end! Let me tell you more about myself.<br />
      I am Saumya&comma; a young passionate&comma; self taught developer from India&comma; always trying
      to stay engaged in a project&comma; trying to improve my skills furthermore!<br />
      I love <span class="gradientText">geography</span>&comma;
      <span class="gradientText">sports</span>&comma;
      <span class="gradientText">rubik&apos;s cubes</span>&comma; and
      <span class="gradientText">music</span> alongside programming!
    </p>
  </section>
</main>
