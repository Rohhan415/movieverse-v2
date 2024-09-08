import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-base-black p-8 border-shade-200">
      <div className="grid border-b border-shade-200 grid-cols-1 md:grid-cols-4 gap-4 text-base-white max-w-[80rem] mx-auto pb-16 mb-8">
        {/* Navigation */}
        <div className="flex flex-col items-center">
          <div className=" items-center gap-4">
            <h3 className="font-bold mb-2">Navigation</h3>
            <ul className="text-sm text-shade-200 flex flex-col gap-1">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:underline">
                  Search
                </Link>
              </li>
              <li>
                <Link href="/movies" className="hover:underline">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="/series" className="hover:underline">
                  Series
                </Link>
              </li>
              <li>
                <Link href="/people" className="hover:underline">
                  People
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:underline">
                  Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Connect with Us */}
        <div className="flex flex-col items-center">
          <div className=" items-center gap-4">
            <h3 className="font-bold mb-2">Connect with Us</h3>
            <ul className="text-sm text-shade-200 flex flex-col gap-1">
              <li>
                <Link href="https://facebook.com" className="hover:underline">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" className="hover:underline">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com" className="hover:underline">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" className="hover:underline">
                  YouTube
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" className="hover:underline">
                  TikTok
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* MovieVerse */}
        <div className="flex flex-col items-center">
          <div className=" items-center gap-4">
            <h3 className="font-bold mb-2">MovieVerse</h3>
            <ul className="text-sm text-shade-200 flex flex-col gap-1">
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="hover:underline">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Account */}
        <div className="flex flex-col items-center">
          <div className=" items-center gap-4">
            <h3 className="font-bold mb-2">Account</h3>
            <ul className="text-sm text-shade-200 flex flex-col gap-1">
              <li>
                <Link href="/login" className="hover:underline">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:underline">
                  Create Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex  justify-between max-w-[80rem] mx-auto">
        <Image
          src="/logo.png"
          width="180"
          height="20"
          alt="Logo"
          className="border-base-white  pr-4"
        />
        <p className="ml-4 text-shade-200 text-sm">
          Learning Project &nbsp; | &nbsp; © 2024 By Kacper Kicki
        </p>
      </div>
    </footer>
  );
}

export default Footer;
