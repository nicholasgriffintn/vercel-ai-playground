import Link from 'next/link';

export async function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full px-4 border-b h-14 shrink-0 bg-background backdrop-blur-xl">
      <span className="inline-flex items-center home-links whitespace-nowrap">
        <Link href="/">
          <span className="text-lg font-bold">AI Playground</span>
        </Link>
      </span>
    </header>
  );
}
