import { buildWaLink } from "../lib/wa";

const floatingMessage =
  "Hola, quiero consultar por las clases del Instituto Petit Ballet.";

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWaLink(floatingMessage)}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-cta text-offwhite shadow-soft transition hover:bg-cta/90 active:bg-cta/80 md:bottom-6 md:right-6 md:h-12 md:w-12"
      aria-label="WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.17 2 11.35c0 1.97.63 3.79 1.71 5.3L2 22l5.55-1.6c1.41.74 3.03 1.16 4.45 1.16 5.52 0 10-4.17 10-9.35C22 6.17 17.52 2 12 2zm0 17.55c-1.32 0-2.6-.34-3.73-.98l-.27-.16-3.28.95.98-3.04-.2-.29a7.1 7.1 0 0 1-1.23-4.03c0-4.01 3.6-7.27 8.03-7.27s8.03 3.26 8.03 7.27c0 4.01-3.6 7.27-8.03 7.27zm4.37-5.49c-.24-.12-1.44-.68-1.67-.76-.23-.08-.4-.12-.57.12-.16.24-.65.76-.8.92-.15.16-.29.18-.53.06-.24-.12-1.02-.36-1.95-1.16-.72-.6-1.2-1.34-1.34-1.58-.14-.24-.02-.38.1-.5.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.57-1.3-.78-1.78-.2-.48-.4-.42-.57-.42h-.48c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.87 2.32.99 2.48.12.16 1.7 2.53 4.12 3.55.58.24 1.03.38 1.38.49.58.18 1.1.16 1.52.1.46-.06 1.44-.54 1.64-1.06.2-.52.2-.96.14-1.06-.06-.1-.22-.16-.46-.28z" />
      </svg>
    </a>
  );
}
