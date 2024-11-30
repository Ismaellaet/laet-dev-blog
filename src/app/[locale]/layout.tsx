import type { Metadata } from 'next';
import { Atkinson_Hyperlegible as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@components/header';
import { ThemeProvider } from '@components/theme-provider';
import { Footer } from '@components/footer';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
    >
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <NextIntlClientProvider messages={messages}>
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
