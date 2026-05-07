export const SERVICE_OPTIONS = [
  "Desenvolvimento de Aplicações",
  "Identidade Visual",
  "Consultoria em TI",
  "Engenharia de Redes",
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];

export const PRESELECT_EVENT = "beyond:preselect-servico";

export function selectService(servico: ServiceOption) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem("preselect-servico", servico);
  } catch {
    // ignore storage errors (private mode, etc.)
  }
  window.dispatchEvent(new CustomEvent(PRESELECT_EVENT, { detail: servico }));
  const target = document.getElementById("contato");
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.location.hash = "contato";
  }
}
