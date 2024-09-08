import {
  BookmarkIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

function LoginNavigation() {
  return (
    <nav className="z-10 text-normal mr-10">
      <ul className="flex items-center gap-8  justify-end">
        <li>
          <Link
            href="/search"
            className="transition-colors hover:text-accent-400 inline-flex gap-2 items-center"
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
          </Link>
        </li>
        <li>
          <Link
            href="/bookmarks"
            className="transition-colors hover:text-accent-400 inline-flex gap-2 items-center"
          >
            <BookmarkIcon className="h-6 w-6" />
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="transition-colors hover:text-accent-400 inline-flex gap-2 items-center"
          >
            <UserIcon className="h-6 w-6" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default LoginNavigation;
