const services = [
  {
    title: "Diagnóstico financiero anticipado",
    description:
      "Tomamos información financiera dispersa y la convertimos en una lectura inicial clara para evaluar clientes, proyectos y riesgos con más velocidad.",
  },
  {
    title: "Automatización de EEFF y homologación financiera",
    description:
      "Reducimos trabajo manual en clasificación, depuración y auditoría de estados financieros, especialmente en entornos Microsoft 365.",
  },
  {
    title: "Dashboard de cartera y seguimiento",
    description:
      "Construimos tableros accionables para seguimiento de cartera, transición de mora y visibilidad operativa para equipos de crédito y riesgo.",
  },
  {
    title: "Simulador de liquidez para comité",
    description:
      "Diseñamos herramientas simples y claras para evaluar escenarios de liquidez, sensibilidad y brechas de caja en espacios de decisión.",
  },
  {
    title: "Inteligencia macro y sectorial aplicada",
    description:
      "Integramos señales macroeconómicas y sectoriales para apoyar originación, seguimiento y discusiones de comité con mejor contexto.",
  },
];

const sectors = [
  "Empresas medianas",
  "Fintech de crédito",
  "Factoring y confirming",
  "Cooperativas y originadores",
  "Áreas financieras y de riesgo",
  "Equipos con operación en Microsoft 365",
];

const steps = [
  {
    step: "1",
    title: "Descubrimiento",
    text: "Entendemos el proceso actual, las fuentes de información y los puntos de fricción que hoy ralentizan el análisis o el seguimiento.",
  },
  {
    step: "2",
    title: "Diagnóstico",
    text: "Identificamos brechas de calidad, oportunidades de automatización y la estructura mínima necesaria para entregar una herramienta útil.",
  },
  {
    step: "3",
    title: "Diseño e implementación",
    text: "Construimos el flujo, dashboard o automatización con foco en uso real, claridad operativa y resultados visibles.",
  },
  {
    step: "4",
    title: "Puesta en marcha",
    text: "Acompañamos la adopción, validamos entregables y dejamos una base sólida para seguimiento o evolución futura.",
  },
];

const outcomes = [
  "Menos trabajo manual en revisión financiera",
  "Información homogénea y más confiable",
  "Diagnóstico inicial más rápido",
  "Mayor visibilidad para comité",
  "Mejor base para originación, riesgo y seguimiento",
];

const benefits = [
  {
    title: "Más velocidad",
    text: "Reducimos tiempos de revisión y preparación de información para análisis, riesgo y comités.",
  },
  {
    title: "Más claridad",
    text: "Ordenamos datos financieros y operativos para que la discusión se base en información útil, no en archivos dispersos.",
  },
  {
    title: "Más tracción",
    text: "Convertimos análisis y automatización en entregables accionables para originación, seguimiento y control.",
  },
];

function renderCards(items, targetId) {
  const target = document.getElementById(targetId);
  target.innerHTML = items
    .map(
      (item) => `
        <article class="card">
          <h3>${item.title}</h3>
          <p>${item.description || item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderChips(items, targetId) {
  const target = document.getElementById(targetId);
  target.innerHTML = items.map((item) => `<span class="chip">${item}</span>`).join("");
}

function renderSteps(items, targetId) {
  const target = document.getElementById(targetId);
  target.innerHTML = items
    .map(
      (item) => `
        <article class="step-card">
          <span class="step-number">Paso ${item.step}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderStack(items, targetId) {
  const target = document.getElementById(targetId);
  target.innerHTML = items
    .map((item) => `<div class="stack-item">${item}</div>`)
    .join("");
}

renderCards(benefits, "benefits-grid");
renderCards(services, "services-grid");
renderChips(sectors, "sectors-list");
renderStack(outcomes, "outcomes-list");
renderSteps(steps, "steps-grid");
