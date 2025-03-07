import { Button } from "./Button";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";
const Header = () => {
  return (
    <header className="px sticky top-0 z-10 flex items-center justify-between px-4 pt-8 backdrop-blur-3xl md:justify-around">
      <Link href="/">j@kfils</Link>
      <nav className="hidden gap-4 md:flex">
        <Button className="button-primary-1">About me</Button>
        <Button className="button-primary-2">Contact</Button>
      </nav>
      <nav className="md:hidden">
        <HamburgerMenu />
      </nav>
    </header>
  );
};
export default Header;
