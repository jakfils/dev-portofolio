import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-5 text-2xl py-6">
      <Link href="#">
        <FaGithub />
      </Link>
      <Link href="#">
        <FaInstagram />
      </Link>
      <Link href="#">
        <FaLinkedin />
      </Link>
      <Link href="#">
        <FaXTwitter />
      </Link>
    </div>
  );
};
export default Footer;
