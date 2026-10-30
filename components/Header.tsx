import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-2 border-b md:px-8">
      <Link href="/" className="text-xl font-cormorant">
        Jakob Grüner
      </Link>

      <nav className="flex gap-8 text-xl font-cormorant">
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
