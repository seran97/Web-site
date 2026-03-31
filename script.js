const sectors = [
  "Cooperativas financieras reguladas",
  "Aseguradoras y reaseguradoras",
  "Fintech de crédito",
  "Fondos de segundo piso",
  "Outsourcing financiero y de cartera",
  "Áreas de riesgo y tesorería supervisadas",
];

const problems = [
  {
    title: "Riesgo evaluado sin modelo",
    text: "El riesgo de tasa, liquidez o cartera se gestiona con criterio operativo, pero sin un modelo cuantitativo que respalde la decisión con supuestos explícitos.",
  },
  {
    title: "Información dispersa y sin homologar",
    text: "Los estados financieros llegan con estructuras distintas, poca homologación y baja trazabilidad, lo que ralentiza cualquier análisis.",
  },
  {
    title: "ALM y siniestros sin metodología formal",
    text: "El equipo detecta problemas tarde porque no existe un marco de medición claro para riesgo estructural, brechas de liquidez o siniestralidad.",
  },
  {
    title: "Comités sin soporte cuantitativo",
    text: "Las decisiones se presentan sin escenarios, sin sensibilidades y sin respaldo de modelo, lo que debilita el criterio y la trazabilidad.",
  },
];

const services = [
  {
    title: "Diagnóstico ALM / IRRBB",
    description:
      "Evaluamos el riesgo de tasa, brecha de reprecio y posición de liquidez estructural bajo los marcos regulatorios vigentes (ALM / IRRBB / RTILB), con modelos calibrados a la estructura del balance.",
    value:
      "Entrega una lectura cuantitativa del riesgo estructural utilizable en comité, auditoría interna o proceso de supervisión regulatoria.",
  },
  {
    title: "Automatización de EEFF y homologación financiera",
    description:
      "Reducimos trabajo manual en clasificación, depuración y homologación de estados financieros en flujos apoyados en Microsoft 365, con trazabilidad y lógica auditable.",
    value:
      "Mejora la consistencia y calidad de la información base para scoring, análisis de riesgo y seguimiento de cartera.",
  },
  {
    title: "Scoring crediticio y modelo de riesgo",
    description:
      "Construimos modelos de scoring o calificación crediticia con metodología cuantitativa, calibrados para la base de datos y el contexto de cartera del cliente.",
    value:
      "Reemplaza criterio subjetivo con un modelo replicable, auditable y ajustable con datos reales de la operación.",
  },
  {
    title: "Simulación de liquidez y stress testing",
    description:
      "Diseñamos modelos de simulación de liquidez con escenarios de estrés, sensibilidad de tasas y análisis de brechas de caja para espacios de decisión y comité.",
    value:
      "Permite tomar decisiones de tesorería y liquidez con supuestos explícitos, escenarios cuantificados y respaldo técnico claro.",
  },
  {
    title: "Diagnóstico actuarial de siniestros",
    description:
      "Aplicamos metodología actuarial para evaluar reservas, siniestralidad, frecuencia e impacto esperado en carteras de seguros o portafolios con componente de riesgo actuarial.",
    value:
      "Entrega un diagnóstico técnico que sirve como base para reservas, renegociación con reaseguradoras o reporte regulatorio.",
  },
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
    text: "Identificamos brechas de calidad, oportunidades de automatización y el alcance mínimo necesario para entregar una herramienta útil.",
  },
  {
    step: "3",
    title: "Diseño e implementación",
    text: "Construimos el flujo, tablero o automatización con foco en uso real, claridad operativa y trazabilidad.",
  },
  {
    step: "4",
    title: "Puesta en marcha",
    text: "Acompañamos validación, ajustes y adopción inicial para dejar una base sólida en operación.",
  },
  {
    step: "5",
    title: "Seguimiento opcional",
    text: "Si hace sentido, continuamos con mejora incremental, soporte de seguimiento o nuevas capas de análisis.",
  },
];

const outcomes = [
  "Riesgo cuantificado, no solo intuido.",
  "Decisiones de comité con respaldo de modelo y supuestos explícitos.",
  "Menos trabajo manual, más trazabilidad y consistencia.",
  "Modelos calibrados para tu cartera y contexto regulatorio.",
  "Diagnósticos técnicos utilizables en auditoría y supervisión.",
];

const notUs = [
  "No somos una fábrica de software genérico ni una consultora de presentaciones.",
  "No reemplazamos el juicio financiero: lo respaldamos con modelo y datos.",
  "No vendemos IA mágica: usamos modelos financieros probados que se entienden y se auditan.",
  "No prometemos plataformas sobredimensionadas cuando el problema requiere claridad y foco.",
];

function renderChips(items, targetId) {
  const target = document.getElementById(targetId);
  target.innerHTML = items.map((item) => `<span class="chip">${item}</span>`).join("");
}

function renderProblemCards(items, targetId) {
  const target = document.getElementById(targetId);
  target.innerHTML = items
    .map(
      (item) => `
        <article class="card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderServiceCards(items, targetId) {
  const target = document.getElementById(targetId);
  target.innerHTML = items
    .map(
      (item) => `
        <article class="service-card">
          <h3>${item.title}</h3>
          <p class="service-description">${item.description}</p>
          <p class="service-value">
            <span class="service-label">Valor que entrega</span><br />
            ${item.value}
          </p>
        </article>
      `
    )
    .join("");
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

function renderList(items, targetId) {
  const target = document.getElementById(targetId);
  target.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

renderChips(sectors, "sectors-list");
renderProblemCards(problems, "problems-grid");
renderServiceCards(services, "services-grid");
renderSteps(steps, "steps-grid");
renderStack(outcomes, "outcomes-list");
renderList(notUs, "not-us-list");
