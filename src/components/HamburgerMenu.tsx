"use client";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-xl p-2 rounded-lg text-[var(--color-white)]"
      >
        {isOpen ? <IoClose size={32} /> : <IoMenu size={32} />}
      </button>

      <div
        className={`absolute top-12 right-0 bg-[var(--color-black)] shadow-lg rounded-lg w-48 z-50 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "opacity-100 max-h-48" : "opacity-0 max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-3 p-4 text-[var(--color-white)]">
          <li>
            <Link href="#" className="cursor-pointer">
              About me
            </Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
