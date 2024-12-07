import { Logo } from '@components/logo';
import { useTranslations } from 'next-intl';

export const Intro = () => {
  const t = useTranslations('BlogPage');
  return (
    <section>
      <h1 className="text-3xl text-primary-foreground md:text-5xl">
        {t('welcome')} <Logo />
      </h1>

      <h4 className="mt-4">{t('intro')}</h4>
    </section>
  );
};
