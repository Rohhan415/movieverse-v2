import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center px-8">
      <Image
        loading="eager"
        src="/logo.png"
        height="160"
        width="160"
        alt="The Wild Oasis logo"
      />
    </Link>
  );
}

export default Logo;
