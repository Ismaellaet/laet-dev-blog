import { Logo } from '@components/logo';
import { ModeToggle } from '@components/theme-toggle';

export const NavBar = () => {
  return (
    <nav className="bg-background/60 sticky top-0 flex h-16 items-center justify-between border-b backdrop-blur">
      <div className="text-3xl text-primary-foreground">
        <Logo />
        <span className="text-secondary-foreground">| Blog</span>
      </div>

      <ul className="flex">
        <ModeToggle />
      </ul>
    </nav>
  );
};
