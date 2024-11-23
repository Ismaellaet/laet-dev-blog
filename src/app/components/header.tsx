import { Logo } from '@components/logo';
import { ModeToggle } from '@components/theme-toggle';

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-slate-100/90 backdrop-blur dark:bg-slate-900/90 sm:mx-auto sm:w-full sm:max-w-screen-xl">
      <div className="mx-4 flex justify-between border-b py-4">
        <div className="text-3xl text-primary-foreground">
          <Logo />
          <span className="text-secondary-foreground">| Blog</span>
        </div>

        <ModeToggle />
      </div>
    </header>
  );
};
