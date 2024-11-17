import type { Metadata } from "next";
import { Atkinson_Hyperlegible as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@components/header";
import { ThemeProvider } from "@components/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <div className="mx-auto max-w-screen-xl w-full">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
