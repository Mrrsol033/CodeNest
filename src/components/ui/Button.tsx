import Link from "next/link";

export function Button({ href, label, className }: { href: string; label: string; className?: string }) {
  return (
    <Link
      href={href}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition ${className}`}
    >
      {label}
    </Link>
  );
}
