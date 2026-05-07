import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/beyond-logo.png";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#solucionamos", label: "O que Solucionamos" },
  { href: "#cases", label: "Cases" },
  { href: "#parceiros", label: "Parceiros" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Beyond Solutions Brasil" className="h-9 w-auto invert" />
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contato"
          className="inline-flex items-center rounded-md bg-cta px-4 py-2.5 text-sm font-semibold text-cta-foreground cta-glow hover:brightness-110 transition"
        >
          FAÇA UM ORÇAMENTO
        </a>
      </nav>
    </motion.header>
  );
}
