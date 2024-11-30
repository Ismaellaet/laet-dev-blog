'use client';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import { Button } from '@components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';
import { Languages } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export const LanguageSwitcher = () => {
  const t = useTranslations('LanguageSwitcher');
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();

  const handleOnChange = (nextLocale: Locale) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale },
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
        >
          <Languages />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuCheckboxItem
          checked={locale === 'en'}
          onCheckedChange={() => handleOnChange('en')}
        >
          {t('english')}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={locale === 'pt-br'}
          onCheckedChange={() => handleOnChange('pt-br')}
        >
          {t('portuguese')}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
