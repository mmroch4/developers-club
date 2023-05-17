export function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-3 pt-4">
      <hr className="h-[2px] w-16 rounded border-none bg-slate-3 dark:bg-slateDark-3" />

      <p>
        Feito por{" "}
        <a
          href="https://github.com/mmroch4"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium hover:underline focus:underline"
        >
          Miguel Rocha
        </a>
      </p>
    </footer>
  );
}
