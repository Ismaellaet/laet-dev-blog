import { Logo } from '@components/logo';
import { useTranslations } from 'next-intl';

export const Intro = () => {
  const t = useTranslations('BlogPage');
  return (
    <section>
      <h1 className="text-3xl text-primary-foreground md:text-5xl">
        {t('welcome')} <Logo />
      </h1>

      <h4 className="mt-4">
        Aqui você encontra insights, dicas e tutoriais sobre o universo da
        tecnologia. Meu objetivo é compartilhar aprendizados, boas práticas e
        ideias que possam ajudar desenvolvedores a crescerem em suas jornadas.
      </h4>
    </section>
  );
};
