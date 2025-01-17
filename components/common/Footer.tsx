import Link from "next/link";
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";
import NavbarButton from "./navbarButton";

export default function FooterDemo() {
  return (
    <footer className="bg-gray-200">
      <div className="container flex flex-col lg:flex-row flex-wrap items-center px-4 py-8 mx-auto justify-between">
        <div className="flex flex-col lg:flex-row justify-center">
          <ul className="flex space items-center space-x-4 ">
            <li className="mb-2 lg:mb-0">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="mb-2 lg:mb-0">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="mb-2 lg:mb-0">
              <Link href={"/contact"}>Contact Us</Link>
            </li>
            <li className="mb-2 lg:mb-0">
              <Link href={"/terms"}>Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center space-x-4 mt-4 lg:mt-0">
          <NavbarButton icon={<FiFacebook />} href="/facebook.com" />
          <NavbarButton icon={<FiTwitter />} href="/twitter.com" />
          <NavbarButton icon={<FiLinkedin />} href="/linkedin.com" />
          <NavbarButton icon={<FiInstagram />} href="/instagram.com" />
        </div>
      </div>
      <div className="pb-2">
        <p className="text-center">
          @2024 All rights reserved by your website.
        </p>
      </div>
    </footer>
  );
}
