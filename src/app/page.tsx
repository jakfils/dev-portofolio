import { Button } from "@/components/Button";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <header className="flex justify-around items-center pt-8 px sticky top-0">
        <Link href="/">j@kfils</Link>
        <nav className="flex gap-4">
          <Button className="button-primary-1">About me</Button>
          <Button className="button-primary-2">Contact</Button>
        </nav>
      </header>
    </>
  );
}
