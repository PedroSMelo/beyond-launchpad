import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BrandLogo } from "./BrandLogo";

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
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-3 sm:px-6 py-2 sm:py-4 gap-2 sm:gap-3">
        <a
          href="#inicio"
          aria-label="Beyond Solutions Brasil"
          className="shrink-0 transition-opacity hover:opacity-90"
        >
          <BrandLogo size="md" />
        </a>
        <ul className="hidden lg:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <motion.a
          href="#contato"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="btn-shimmer inline-flex items-center rounded-md bg-cta px-2.5 sm:px-4 py-1.5 sm:py-2.5 text-[11px] sm:text-sm font-semibold text-cta-foreground cta-glow transition whitespace-nowrap"
        >
          <span className="hidden sm:inline">FAÇA UM ORÇAMENTO</span>
          <span className="sm:hidden">ORÇAMENTO</span>
        </motion.a>
      </nav>
    </motion.header>
  );
}
