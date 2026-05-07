import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  empresa: z.string().trim().min(2, "Informe sua empresa").max(100),
  whatsapp: z.string().trim().min(8, "WhatsApp inválido").max(20),
  servico: z.string().min(1, "Selecione um serviço"),
  mensagem: z.string().trim().min(5, "Conte-nos mais").max(1000),
});

const services = [
  "Desenvolvimento de Aplicações",
  "Identidade Visual",
  "Consultoria em TI",
  "Engenharia de Redes",
];

type Status = "idle" | "sending" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

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
    setTimeout(() => setStatus("idle"), 2600);
  };

  return (
    <section id="contato" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-cta">Orçamento</p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Vamos construir sua próxima solução
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Preencha os dados e nossa equipe responderá em até 24 horas úteis.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={onSubmit}
          className="glass mt-8 sm:mt-10 rounded-2xl p-5 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            <Field label="Nome" name="nome" placeholder="Seu nome completo" />
            <Field label="Empresa" name="empresa" placeholder="Nome da empresa" />
            <Field label="WhatsApp" name="whatsapp" placeholder="(00) 00000-0000" />
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">Tipo de Serviço</label>
              <select
                name="servico"
                defaultValue=""
                className="w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cta"
              >
                <option value="" disabled>Selecione...</option>
                {services.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1.5">Mensagem</label>
            <textarea
              name="mensagem"
              rows={4}
              placeholder="Conte-nos sobre o seu projeto..."
              className="w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cta resize-none"
            />
          </div>
          <motion.button
            type="submit"
            disabled={status !== "idle"}
            whileTap={{ scale: 0.97 }}
            className="relative w-full overflow-hidden inline-flex items-center justify-center gap-2 rounded-md bg-cta px-6 py-3.5 text-sm font-semibold text-cta-foreground cta-glow hover:brightness-110 transition disabled:opacity-90"
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
    <div>
      <label className="block text-xs font-medium text-muted-foreground mb-1.5">{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        className="w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cta"
      />
    </div>
  );
}
