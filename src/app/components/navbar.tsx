import { Logo } from "@components/logo";
import { ModeToggle } from "@components/theme-toggle";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between h-16 bg-background/60 sticky top-0 border-b backdrop-blur">
      <Logo />

      <ul className="flex">
        <ModeToggle />
      </ul>
    </nav>
  );
};
