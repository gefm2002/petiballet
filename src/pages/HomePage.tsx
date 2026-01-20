import { useEffect, useMemo, useState } from "react";
import Button from "../components/Button";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import classes from "../data/classes.json";
import gallery from "../data/gallery.json";
import schedule from "../data/schedule.json";
import site from "../data/site.json";
import { buildWaLink } from "../lib/wa";

const testimonials = [
  "Mi hija ama venir a ballet, se nota el cuidado y la dedicación.",
  "Un espacio cálido, profesional y muy humano.",
  "Excelente formación y acompañamiento.",
];

const faq = [
  {
    question: "¿Desde qué edad se puede empezar?",
    answer: "Desde los 3 años en Iniciación a la Danza.",
  },
  {
    question: "¿Se necesita experiencia previa?",
    answer: "No. Hay niveles iniciales para niñas y adultos.",
  },
  {
    question: "¿Hay clases de prueba?",
    answer: "Sí, hay clases de prueba disponibles.",
  },
  {
    question: "¿Cómo son los horarios?",
    answer:
      "Se organizan por día. Consultanos por WhatsApp para disponibilidad actual.",
  },
];

const inscriptionItems = [
  "Inscripciones abiertas todo el año",
  "Cupos limitados",
  "Clases de prueba disponibles",
];

const heroMessage =
  "Hola, quiero consultar por las clases del Instituto Petit Ballet.";

const classesMessage =
  "Hola, quiero consultar por las clases disponibles en el Instituto Petit Ballet.";

const inscriptionMessage =
  "Hola, quiero consultar inscripción. ¿Hay cupos y clases de prueba disponibles?";

const contactMessage =
  "Hola, quiero información sobre clases y disponibilidad.";

export default function HomePage() {
  const [selectedDay, setSelectedDay] = useState(schedule.days[0]?.day ?? "");
  const [activeImage, setActiveImage] = useState<null | {
    src: string;
    alt: string;
  }>(null);
  const [heroIndex, setHeroIndex] = useState(0);

  const heroImages = [
    { src: "/images/hero-01.jpg", alt: "Clases de ballet en estudio" },
    { src: "/images/hero-02.jpg", alt: "Entrenamiento de danza clásica" },
    { src: "/images/hero-03.jpg", alt: "Técnica de ballet en sala" },
    { src: "/images/hero-04.jpg", alt: "Ensayo de ballet con alumnas" },
    { src: "/images/hero-05.jpg", alt: "Clase de danza clásica" },
  ];

  const classesById = useMemo(() => {
    return Object.fromEntries(classes.map((item) => [item.id, item]));
  }, [classes]);

  const selectedSchedule = schedule.days.find((day) => day.day === selectedDay);
  const dayMessage = `Hola, quiero consultar los horarios del ${selectedDay}. ¿Hay cupos disponibles?`;

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-offwhite text-ink">
      <Header
        name={site.name}
        tagline={site.tagline}
        instagramUrl={site.instagram_url}
      />

      <main>
        <section id="inicio" className="section pt-24 sm:pt-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                {site.tagline}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                {site.name}
              </h1>
              <p className="mt-5 text-lg text-muted">{site.address}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href={buildWaLink(heroMessage)}>
                  Consultar por WhatsApp
                </Button>
                <Button href="#clases" className="bg-cta/80">
                  Ver clases
                </Button>
              </div>
            </div>

            <div className="relative h-[360px] overflow-hidden rounded-3xl border border-ink/10 bg-white/70 shadow-soft sm:h-[420px] lg:h-[520px]">
              <img
                src={heroImages[heroIndex].src}
                alt={heroImages[heroIndex].alt}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/5 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-offwhite">
                <span className="font-medium">{heroImages[heroIndex].alt}</span>
                <span>
                  {heroIndex + 1}/{heroImages.length}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="clases" className="section border-t border-ink/10">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="section-title">Clases</h2>
                <p className="section-lead">
                  Niveles definidos y acompañamiento continuo.
                </p>
              </div>
              <Button href={buildWaLink(classesMessage)}>
                Consultar por clases
              </Button>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {classes.map((item) => (
                <div
                  key={item.id}
                  className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white/70 p-6"
                >
                  <div className="flex flex-1 flex-col gap-2">
                    <p className="text-xs uppercase tracking-widest text-muted">
                      {item.age ? `Edad: ${item.age}` : `Nivel: ${item.level}`}
                    </p>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted">{item.description}</p>
                    {item.notes?.length ? (
                      <ul className="mt-2 space-y-1 text-xs text-muted">
                        {item.notes.map((note) => (
                          <li key={note}>- {note}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                  <div className="mt-6">
                    <Button href={buildWaLink(item.ctaMessage)}>
                      {item.ctaLabel}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="horarios" className="section border-t border-ink/10">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="section-title">Horarios</h2>
                <p className="section-lead">{schedule.note}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {schedule.days.map((day) => {
                const isActive = day.day === selectedDay;
                return (
                  <Button
                    key={day.day}
                    type="button"
                    onClick={() => setSelectedDay(day.day)}
                    className={
                      isActive
                        ? "bg-cta text-offwhite"
                        : "bg-ink/10 text-ink hover:bg-ink/20 active:bg-ink/30"
                    }
                  >
                    {day.day}
                  </Button>
                );
              })}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
              <div className="rounded-2xl border border-ink/10 bg-white/70 p-6">
                <h3 className="text-lg font-semibold">{selectedDay}</h3>
                <div className="mt-4 divide-y divide-ink/10">
                  {selectedSchedule?.items.map((item) => {
                    const classInfo = classesById[item.classId];
                    return (
                      <div
                        key={`${item.time}-${item.classId}`}
                        className="flex items-center justify-between gap-4 py-3"
                      >
                        <span className="text-sm font-semibold text-ink">
                          {item.time}
                        </span>
                        {classInfo ? (
                          <div className="text-right">
                            <p className="text-sm text-ink">
                              {classInfo.title}
                            </p>
                            <p className="text-xs text-muted">
                              {classInfo.level}
                            </p>
                          </div>
                        ) : (
                          <span className="text-xs text-muted">
                            Consultanos por WhatsApp para confirmar.
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-ink/10 bg-white/70 p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted">
                  Consulta del día
                </p>
                <p className="mt-4 text-base text-muted">
                  Consultá por disponibilidad y cupos del día seleccionado.
                </p>
                <div className="mt-6">
                  <Button href={buildWaLink(dayMessage)}>
                    Consultar {selectedDay}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="inscripciones" className="section border-t border-ink/10">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="section-title">Inscripciones</h2>
                <p className="section-lead">
                  Información clara y respuesta directa.
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.6fr_0.8fr]">
              <ul className="space-y-4 text-base text-muted">
                {inscriptionItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-ink/10 bg-white/70 p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted">
                  Inscripción
                </p>
                <p className="mt-4 text-base text-muted">
                  {inscriptionItems.join(". ")}.
                </p>
                <div className="mt-6">
                  <Button href={buildWaLink(inscriptionMessage)}>
                    Consultar inscripción por WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="galeria" className="section border-t border-ink/10">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="section-title">Galería</h2>
            <p className="section-lead">
              Clases, estudio, ensayos y alumnas en formación.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((image) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveImage(image)}
                  className="group overflow-hidden rounded-2xl bg-ink/5 text-left"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section border-t border-ink/10">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="section-title">Testimonios</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <blockquote
                  key={item}
                  className="rounded-2xl border border-ink/10 bg-white/70 p-6 text-sm text-muted"
                >
                  “{item}”
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="section border-t border-ink/10">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="section-title">Preguntas frecuentes</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {faq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-ink/10 bg-white/70 p-6"
                >
                  <p className="text-base font-semibold text-ink">
                    {item.question}
                  </p>
                  <p className="mt-3 text-sm text-muted">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="section border-t border-ink/10">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="section-title">Contacto</h2>
              <p className="section-lead">
                Consultas directas por WhatsApp y seguimiento continuo.
              </p>
              <div className="mt-6 rounded-2xl border border-ink/10 bg-white/70 p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted">
                  Datos de contacto
                </p>
                <div className="mt-4 space-y-3 text-base text-muted">
                  <p>
                    <span className="text-ink font-medium">Dirección:</span>{" "}
                    {site.address}
                  </p>
                  <p>
                    <span className="text-ink font-medium">WhatsApp:</span>{" "}
                    {site.whatsapp_display}
                  </p>
                  <p>
                    <span className="text-ink font-medium">Instagram:</span> @
                    {site.instagram_handle}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={buildWaLink(contactMessage)}>
                    Abrir WhatsApp
                  </Button>
                  <Button
                    href={site.maps_query_url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-cta/80"
                  >
                    Cómo llegar
                  </Button>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white/70">
              <iframe
                title="Mapa Instituto Petit Ballet"
                src={site.maps_embed_url}
                className="h-full min-h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer
        address={site.address}
        whatsappDisplay={site.whatsapp_display}
        whatsappLink={buildWaLink(contactMessage)}
        instagramHandle={site.instagram_handle}
        instagramUrl={site.instagram_url}
      />

      <FloatingWhatsApp />

      {activeImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4">
          <div className="max-w-4xl rounded-2xl bg-offwhite p-4 shadow-soft">
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[75vh] w-full rounded-xl object-cover"
            />
            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-sm text-muted">{activeImage.alt}</p>
              <Button
                type="button"
                onClick={() => setActiveImage(null)}
                className="bg-ink/80 text-offwhite hover:bg-ink"
              >
                Cerrar
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
