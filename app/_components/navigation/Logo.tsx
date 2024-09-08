import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" className="z-10  flex items-center px-8">
      <Image
        src="/logo.png"
        height="20"
        width="180"
        alt="The MovieVerse logo"
        className=" "
      />
    </Link>
  );
}

export default Logo;
