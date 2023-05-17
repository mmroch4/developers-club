import { inter } from "@/config/fonts";
import { metadata as m } from "@/config/metadata";
import { cookies } from "next/headers";
import "./globals.css";

export const metadata = { ...m };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = cookies().get("theme");

  return (
    <html lang="en" className={theme?.value}>
      <body
        className={`${inter.className} bg-slate-1 text-slate-12 dark:bg-slateDark-1 dark:text-slateDark-12`}
      >
        {children}
      </body>
    </html>
  );
}
