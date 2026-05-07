import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/beyond/Navbar";
import { Hero } from "@/components/beyond/Hero";
import { Solutions } from "@/components/beyond/Solutions";
import { Problems } from "@/components/beyond/Problems";
import { Cases } from "@/components/beyond/Cases";
import { Partners } from "@/components/beyond/Partners";
import { ContactForm } from "@/components/beyond/ContactForm";
import { Footer } from "@/components/beyond/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beyond Solutions Brasil — Tecnologia que escala negócios" },
      {
        name: "description",
        content:
          "Desenvolvimento de sistemas, identidade visual, consultoria em TI e engenharia de redes. Soluções escaláveis para sua empresa.",
      },
      { property: "og:title", content: "Beyond Solutions Brasil" },
      { property: "og:description", content: "Transformamos necessidades de negócio em soluções escaláveis." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Solutions />
      <Problems />
      <Cases />
      <ContactForm />
      <Partners />
      <Footer />
      <Toaster theme="dark" position="top-right" />
    </main>
  );
}
