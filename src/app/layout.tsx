import type { Metadata } from 'next';
import { Atkinson_Hyperlegible as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@components/header';
import { ThemeProvider } from '@components/theme-provider';
import { Footer } from '@components/footer';

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Blog | laet.dev',
  description:
    'Aqui você encontra insights, dicas e tutoriais sobre o universo da tecnologia. Meu objetivo é compartilhar aprendizados, boas práticas e ideias que possam ajudar desenvolvedores a crescerem em suas jornadas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <div className="flex min-h-screen w-full flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div className="mx-auto flex w-full max-w-screen-xl flex-grow flex-col px-4">
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
