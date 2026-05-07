import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PRESELECT_EVENT, SERVICE_OPTIONS } from "@/lib/selectService";
import { SectionLabel } from "./SectionLabel";
import { MountainPeaks } from "./MountainPeaks";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  empresa: z.string().trim().min(2, "Informe sua empresa").max(100),
  whatsapp: z.string().trim().min(8, "WhatsApp inválido").max(20),
  servico: z.string().min(1, "Selecione um serviço"),
  mensagem: z.string().trim().min(5, "Conte-nos mais").max(1000),
});

type Status = "idle" | "sending" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [servico, setServico] = useState("");
  const [pulseKey, setPulseKey] = useState(0);
  const selectWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("preselect-servico");
    if (stored && SERVICE_OPTIONS.includes(stored as (typeof SERVICE_OPTIONS)[number])) {
      setServico(stored);
      setPulseKey((k) => k + 1);
      sessionStorage.removeItem("preselect-servico");
    }

    const onPreselect = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) {
        setServico(detail);
        setPulseKey((k) => k + 1);
      }
    };
    window.addEventListener(PRESELECT_EVENT, onPreselect);
    return () => window.removeEventListener(PRESELECT_EVENT, onPreselect);
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle") return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setStatus("sending");
    const { nome, empresa, whatsapp, servico, mensagem } = parsed.data;
    const text = `Olá, sou ${nome} da ${empresa}. Serviço: ${servico}. ${mensagem} (WhatsApp: ${whatsapp})`;
    const url = `https://wa.me/5561994220729?text=${encodeURIComponent(text)}`;

    await new Promise((r) => setTimeout(r, 1100));
    window.open(url, "_blank");
    setStatus("success");
    toast.success("Pedido enviado! Continuando no WhatsApp.");
    form.reset();
    setServico("");
    setTimeout(() => setStatus("idle"), 2600);
  };

  return (
    <section
      id="contato"
      className="relative overflow-hidden min-h-[100svh] flex items-start pt-[clamp(6rem,14vh,10rem)] pb-[clamp(3rem,8vh,6rem)]"
    >
      <MountainPeaks
        variant="silhouette"
        aria-hidden
        className="absolute top-0 inset-x-0 w-full h-[clamp(3rem,9vh,6rem)] text-foreground -scale-y-100"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full bg-cta/8 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto w-full max-w-3xl px-[clamp(1rem,4vw,3rem)] flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <SectionLabel label="Orçamento" align="center" />
          <h2 className="mt-4 text-[clamp(1.75rem,3.8vw,3.5rem)] font-bold tracking-tight leading-[1.08] text-gradient">
            Vamos construir sua próxima solução
          </h2>
          <p className="mt-[clamp(1rem,1.5vh,1.5rem)] text-[clamp(0.95rem,1.1vw,1.15rem)] text-muted-foreground max-w-[60ch] mx-auto">
            Preencha os dados e nossa equipe responderá em até 24 horas úteis.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={onSubmit}
          className="form-highlight relative glass mt-8 sm:mt-10 rounded-2xl p-6 sm:p-10 space-y-5 shadow-[0_30px_80px_-30px_var(--cta-glow),0_0_0_1px_color-mix(in_oklab,var(--cta)_25%,transparent)]"
        >
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            <Field label="Nome" name="nome" placeholder="Seu nome completo" />
            <Field label="Empresa" name="empresa" placeholder="Nome da empresa" />
            <Field label="WhatsApp" name="whatsapp" placeholder="(00) 00000-0000" />
            <div ref={selectWrapperRef}>
              <label className="block text-xs font-semibold text-foreground/80 mb-1.5 uppercase tracking-wider">Tipo de Serviço</label>
              <motion.div
                key={pulseKey}
                animate={
                  pulseKey > 0
                    ? {
                        boxShadow: [
                          "0 0 0 0 transparent",
                          "0 0 0 6px color-mix(in oklab, var(--cta) 35%, transparent)",
                          "0 0 0 0 transparent",
                        ],
                      }
                    : undefined
                }
                transition={{ duration: 1, ease: "easeOut" }}
                className="rounded-md"
              >
                <select
                  name="servico"
                  value={servico}
                  onChange={(e) => setServico(e.target.value)}
                  className="w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cta focus:border-cta/60 hover:border-cta/30 transition-all duration-200"
                >
                  <option value="" disabled>Selecione...</option>
                  {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
                </select>
              </motion.div>
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-foreground/80 mb-1.5 uppercase tracking-wider">Mensagem</label>
            <textarea
              name="mensagem"
              rows={4}
              placeholder="Conte-nos sobre o seu projeto..."
              className="w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cta focus:border-cta/60 hover:border-cta/30 transition-all duration-200 resize-none"
            />
          </div>
          <motion.button
            type="submit"
            disabled={status !== "idle"}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="btn-shimmer relative w-full overflow-hidden inline-flex items-center justify-center gap-2 rounded-md bg-cta px-6 py-4 text-base font-bold text-cta-foreground cta-glow transition disabled:opacity-90"
          >
            <AnimatePresence mode="wait" initial={false}>
              {status === "idle" && (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Enviar Solicitação de Orçamento
                </motion.span>
              )}
              {status === "sending" && (
                <motion.span
                  key="sending"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-2"
                >
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enviando...
                </motion.span>
              )}
              {status === "success" && (
                <motion.span
                  key="success"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.25 }}
                  className="inline-flex items-center gap-2"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Enviado com sucesso!
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, placeholder }: { label: string; name: string; placeholder: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.4 }}
    >
      <label className="block text-xs font-semibold text-foreground/80 mb-1.5 uppercase tracking-wider">{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        className="w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cta focus:border-cta/60 hover:border-cta/30 transition-all duration-200"
      />
    </motion.div>
  );
}
