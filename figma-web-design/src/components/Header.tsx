import Link from "next/link";
export default function Header() {
    return (
      <header className="header">
        <nav>
          <Link href="/works">Works</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
    );
  }