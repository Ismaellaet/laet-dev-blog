import { format, Locale as LocaleDateFns, parseISO } from 'date-fns';
import { enUS, ptBR } from 'date-fns/locale';
import { useLocale } from 'next-intl';

type DateFormatterProps = {
  dateString: string;
};

export const DateFormatter = ({ dateString }: DateFormatterProps) => {
  const locale = useLocale();
  const date = parseISO(dateString);
  const formatByLocale: Record<string, string> = {
    en: 'MMM d, yyyy',
    'pt-br': "d 'de' MMM. 'de' yyyy",
  };
  const configByLocale: Record<string, LocaleDateFns> = {
    en: enUS,
    'pt-br': ptBR,
  };

  return (
    <time
      dateTime={dateString}
      className="text-sm text-secondary-foreground"
    >
      {format(date, formatByLocale[locale], { locale: configByLocale[locale] })}
    </time>
  );
};
