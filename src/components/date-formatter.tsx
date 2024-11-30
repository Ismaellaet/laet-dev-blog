import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

type DateFormatterProps = {
  dateString: string;
};

export const DateFormatter = ({ dateString }: DateFormatterProps) => {
  const date = parseISO(dateString);
  return (
    <time
      dateTime={dateString}
      className="text-sm text-secondary-foreground"
    >
      {format(date, "d 'de' MMM. 'de' yyyy", { locale: ptBR })}
    </time>
  );
};
