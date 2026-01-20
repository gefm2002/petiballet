import Button from "./Button";
import { buildWaLink } from "../lib/wa";

type HeaderProps = {
  name: string;
  tagline: string;
  instagramUrl: string;
};

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Clases", href: "#clases" },
  { label: "Horarios", href: "#horarios" },
  { label: "Inscripciones", href: "#inscripciones" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

const headerMessage =
  "Hola, quiero consultar por las clases del Instituto Petit Ballet.";

export default function Header({ name, tagline, instagramUrl }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-offwhite/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-ink/10 bg-white">
            <img
              src="/logo.png"
              alt={`${name} logo`}
              className="h-full w-full object-cover"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-semibold">{name}</span>
            <span className="text-xs text-muted">{tagline}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink transition hover:border-ink/30 lg:inline-flex"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.4" cy="6.6" r="1.1" />
            </svg>
          </a>
          <Button href={buildWaLink(headerMessage)}>WhatsApp</Button>
        </div>
      </div>

      <div className="border-t border-ink/10 bg-offwhite lg:hidden">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-4 py-3 text-xs font-medium text-muted">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
