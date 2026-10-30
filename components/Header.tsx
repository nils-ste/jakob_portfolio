import Link from "next/link";

export default function Header() {
  return (
    <header className="p-6 border-b">
      <nav className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
      </nav>
    </header>
  );
}