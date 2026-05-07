import { Phone, Mail, Instagram, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { MountainPeaks } from "./MountainPeaks";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="relative bg-card/40">
      <MountainPeaks
        variant="line"
        className="absolute top-0 inset-x-0 w-full h-[clamp(0.75rem,2vh,1.5rem)] text-border"
      />
      <div className="mx-auto max-w-7xl px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 md:grid-cols-3"
        >
          <div>
            <BrandLogo size="lg" showSubtitle />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Soluções tecnológicas que escalam negócios. Brasília, DF.
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <h4 className="text-foreground font-semibold mb-3">Contato</h4>
            <a href="tel:+5561994220729" className="flex items-center gap-2 text-muted-foreground hover:text-cta">
              <Phone className="h-4 w-4" /> (61) 99422-0729
            </a>
            <a href="tel:+5561991737930" className="flex items-center gap-2 text-muted-foreground hover:text-cta">
              <Phone className="h-4 w-4" /> (61) 99173-7930
            </a>
            <a href="mailto:BeyondSolutionsti@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-cta">
              <Mail className="h-4 w-4" /> BeyondSolutionsti@gmail.com
            </a>
            <a href="https://instagram.com/beyondsolutionsit" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-cta">
              <Instagram className="h-4 w-4" /> @beyondsolutionsit
            </a>
          </div>
          <div className="space-y-3 text-sm">
            <h4 className="text-foreground font-semibold mb-3">Empresa</h4>
            <p className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" /> Brasília-DF
            </p>
            <p className="text-muted-foreground">CNPJ: 48.560.381/0001-90</p>
          </div>
        </motion.div>
        <div className="mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Beyond Solutions Brasil. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
