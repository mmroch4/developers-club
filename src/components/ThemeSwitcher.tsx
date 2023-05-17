"use client";

import { Theme } from "@/types/Theme";
import { useState } from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

interface Props {
  theme: Theme;
}

export function ThemeSwitcher({ theme }: Props) {
  const [_theme, setTheme] = useState<Theme>(theme);

  const toogleTheme = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.toggle(Theme.dark);

    if (root.classList.contains(Theme.dark)) {
      setTheme(Theme.dark);

      document.cookie = `theme=${Theme.dark}`;
    } else {
      setTheme(Theme.light);

      document.cookie = `theme=${Theme.light}`;
    }
  };

  return (
    <button
      onClick={toogleTheme}
      className="group flex items-center justify-center rounded bg-sky-3 p-2 hover:bg-sky-4 focus:bg-sky-4 active:bg-sky-5 dark:bg-yellowDark-3 dark:hover:bg-yellowDark-4 dark:focus:bg-yellowDark-4 dark:active:bg-yellowDark-5"
    >
      {_theme == Theme.dark ? (
        <RiSunFill className="h-5 w-5 dark:fill-yellowDark-9 dark:group-hover:fill-yellowDark-10 dark:group-focus:fill-yellowDark-10 dark:group-active:fill-yellowDark-10" />
      ) : (
        <RiMoonFill className="h-5 w-5 fill-sky-9 group-hover:fill-sky-10 group-focus:fill-sky-10 group-active:fill-sky-10" />
      )}
    </button>
  );
}
