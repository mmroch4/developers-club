import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Theme } from "@/types/Theme";
import { cookies } from "next/headers";

export function Header() {
  const theme =
    cookies().get("theme")?.value === "dark" ? Theme.dark : Theme.light;

  return (
    <header className="flex w-full flex-row-reverse items-center justify-between pb-4">
      <ThemeSwitcher theme={theme} />
    </header>
  );
}
