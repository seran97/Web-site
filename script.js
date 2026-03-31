const services = [
  {
    title: "Diagnostico financiero anticipado",
    description:
      "Tomamos informacion financiera dispersa y la convertimos en una lectura inicial clara para evaluar clientes, proyectos y riesgos con mas velocidad.",
  },
  {
    title: "Automatizacion de EEFF y homologacion financiera",
    description:
      "Reducimos trabajo manual en clasificacion, depuracion y auditoria de estados financieros, especialmente en entornos Microsoft 365.",
  },
  {
    title: "Dashboard de cartera y seguimiento",
    description:
      "Construimos tableros accionables para seguimiento de cartera, transicion de mora y visibilidad operativa para equipos de credito y riesgo.",
  },
  {
    title: "Simulador de liquidez para comite",
    description:
      "Disenamos herramientas simples y claras para evaluar escenarios de liquidez, sensibilidad y brechas de caja en espacios de decision.",
  },
  {
    title: "Inteligencia macro y sectorial aplicada",
    description:
      "Integramos senales macroeconomicas y sectoriales para apoyar originacion, seguimiento y discusiones de comite con mejor contexto.",
  },
];

const sectors = [
  "Empresas medianas",
  "Fintech de credito",
  "Factoring y confirming",
  "Cooperativas y originadores",
  "Areas financieras y de riesgo",
  "Equipos con operacion en Microsoft 365",
];

const steps = [
  {
    step: "1",
    title: "Descubrimiento",
    text: "Entendemos el proceso actual, las fuentes de informacion y los puntos de friccion que hoy ralentizan el analisis o el seguimiento.",
  },
  {
    step: "2",
    title: "Diagnostico",
    text: "Identificamos brechas de calidad, oportunidades de automatizacion y la estructura minima necesaria para entregar una herramienta util.",
  },
  {
    step: "3",
    title: "Diseno e implementacion",
    text: "Construimos el flujo, dashboard o automatizacion con foco en uso real, claridad operativa y resultados visibles.",
  },
  {
    step: "4",
    title: "Puesta en marcha",
    text: "Acompanamos la adopcion, validamos entregables y dejamos una base solida para seguimiento o evolucion futura.",
  },
];

const outcomes = [
  "Menos trabajo manual en revision financiera",
  "Informacion homogenea y mas confiable",
  "Diagnostico inicial mas rapido",
  "Mayor visibilidad para comite",
  "Mejor base para originacion, riesgo y seguimiento",
];

const benefits = [
  {
    title: "Mas velocidad",
    text: "Reducimos tiempos de revision y preparacion de informacion para analisis, riesgo y comites.",
  },
  {
    title: "Mas claridad",
    text: "Ordenamos datos financieros y operativos para que la discusion se base en informacion util, no en archivos dispersos.",
  },
  {
    title: "Mas traccion",
    text: "Convertimos analisis y automatizacion en entregables accionables para originacion, seguimiento y control.",
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
  target.innerHTML = items.map((item) => `<div class="stack-item">${item}</div>`).join("");
}

renderCards(benefits, "benefits-grid");
renderCards(services, "services-grid");
renderChips(sectors, "sectors-list");
renderStack(outcomes, "outcomes-list");
renderSteps(steps, "steps-grid");
