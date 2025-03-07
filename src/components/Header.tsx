import { Button } from "./Button";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";
const Header = () => {
  return (
    <header className="flex px-4 justify-between items-center pt-8 px sticky top-0 md:justify-around backdrop-blur-3xl z-10">
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
