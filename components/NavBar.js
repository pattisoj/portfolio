import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex justify-end mt-10 mr-10">
        <Link href="/">
          <a>
            <p className="font-Graduate m-2">01 · home.</p>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <p className="font-Graduate m-2">02 · about.</p>
          </a>
        </Link>
        <Link href="/projects">
          <a>
            <p className="font-Graduate m-2">03 · projects.</p>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <p className="font-Graduate m-2">04 · contact.</p>
          </a>
        </Link>
      </div>
    </nav>
  );
}
