import Link from "next/link";

export default async function Navigation() {
  return (
    <nav className="z-10 text-base 2 font-normal ">
      <ul className="flex items-center gap-8 justify-start ">
        <li>
          <Link
            href="/about"
            className="transition-colors flex gap-1 items-center hover:text-accent-400"
          >
            Movies
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="transition-colors hover:text-accent-400"
          >
            Series
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="transition-colors hover:text-accent-400"
          >
            People
          </Link>
        </li>
      </ul>
    </nav>
  );
}
