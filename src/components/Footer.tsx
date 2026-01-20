type FooterProps = {
  address: string;
  whatsappDisplay: string;
  whatsappLink: string;
  instagramHandle: string;
  instagramUrl: string;
};

export default function Footer({
  address,
  whatsappDisplay,
  whatsappLink,
  instagramHandle,
  instagramUrl,
}: FooterProps) {
  return (
    <footer className="border-t border-ink/10 bg-offwhite">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-ink font-medium">{address}</p>
          <a href={whatsappLink} className="block hover:text-ink">
            {whatsappDisplay}
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="block hover:text-ink"
          >
            @{instagramHandle}
          </a>
        </div>
        <p className="text-xs uppercase tracking-wide text-muted">
          Diseño y desarrollo por Structura
        </p>
      </div>
    </footer>
  );
}
