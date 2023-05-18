import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RiDiscordFill, RiGithubFill, RiInstagramFill } from "react-icons/ri";

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col p-4">
      <Header />

      <section className="flex flex-1 w-full flex-col items-center justify-center gap-4">
        <a
          href="https://discord.gg/baqyWZd5SN"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-max items-center justify-center gap-2 rounded bg-indigo-3 px-4 py-2 text-base text-indigo-12 hover:bg-indigo-4 focus:bg-indigo-4 active:bg-indigo-5 dark:bg-indigoDark-3 dark:text-indigoDark-12 dark:hover:bg-indigoDark-4 dark:focus:bg-indigoDark-4 dark:active:bg-indigoDark-5"
        >
          <RiDiscordFill className="h-5 w-5 fill-indigo-9 group-hover:fill-indigo-10 group-focus:fill-indigo-10 group-active:fill-indigo-10 dark:fill-indigoDark-9 dark:group-hover:fill-indigoDark-10 dark:group-focus:fill-indigoDark-10 dark:group-active:fill-indigoDark-10" />
          Comunidade do Discord
        </a>

        <a
          href="https://github.com/mmroch4/developers-club"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-max items-center justify-center gap-2 rounded bg-slate-3 px-4 py-2 text-base text-slate-12 hover:bg-slate-4 focus:bg-slate-4 active:bg-slate-5 dark:bg-slateDark-3 dark:text-slateDark-12 dark:hover:bg-slateDark-4 dark:focus:bg-slateDark-4 dark:active:bg-slateDark-5"
        >
          <RiGithubFill className="h-5 w-5 fill-slate-9 group-hover:fill-slate-10 group-focus:fill-slate-10 group-active:fill-slate-10 dark:fill-slateDark-9 dark:group-hover:fill-slateDark-10 dark:group-focus:fill-slateDark-10 dark:group-active:fill-slateDark-10" />
          GitHub
        </a>

        <a
          href="https://www.instagram.com/souoorocha/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-max items-center justify-center gap-2 rounded bg-crimson-3 px-4 py-2 text-base text-crimson-12 hover:bg-crimson-4 focus:bg-crimson-4 active:bg-crimson-5 dark:bg-crimsonDark-3 dark:text-crimsonDark-12 dark:hover:bg-crimsonDark-4 dark:focus:bg-crimsonDark-4 dark:active:bg-crimsonDark-5"
        >
          <RiInstagramFill className="h-5 w-5 fill-crimson-9 group-hover:fill-crimson-10 group-focus:fill-crimson-10 group-active:fill-crimson-10 dark:fill-crimsonDark-9 dark:group-hover:fill-crimsonDark-10 dark:group-focus:fill-crimsonDark-10 dark:group-active:fill-crimsonDark-10" />
          Instagram
        </a>
      </section>

      <Footer />
    </main>
  );
}
