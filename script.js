const sectors = [
  "Empresas medianas",
  "Fintech de crédito",
  "Factoring y confirming",
  "Cooperativas y originadores",
  "Áreas financieras y de riesgo",
  "Equipos con operación en Microsoft 365",
];

const problems = [
  {
    title: "Revisión manual excesiva",
    text: "El análisis depende de archivos dispersos, cruces manuales y tiempo operativo que se va en tareas repetitivas.",
  },
  {
    title: "Información heterogénea",
    text: "Los estados financieros y soportes llegan con estructuras distintas, poca homologación y baja trazabilidad.",
  },
  {
    title: "Visibilidad insuficiente",
    text: "Seguimiento, cartera o comité operan con visibilidad parcial y sin una lectura clara de prioridades.",
  },
  {
    title: "Lentitud para decidir",
    text: "Evaluar un cliente, revisar riesgo o preparar una discusión de comité toma más tiempo del necesario.",
  },
];

const services = [
  {
    title: "Diagnóstico financiero anticipado",
    description:
      "Convertimos información financiera dispersa en una lectura inicial clara para apoyar evaluación, originación y priorización de riesgo.",
    value:
      "Entrega una base más rápida para revisar casos, identificar alertas iniciales y estructurar mejor la conversación financiera.",
  },
  {
    title: "Automatización de EEFF y homologación financiera",
    description:
      "Reducimos trabajo manual en clasificación, depuración y homologación de estados financieros, especialmente en flujos apoyados en Microsoft 365.",
    value:
      "Mejora consistencia, trazabilidad y calidad de la información que se usa para análisis y seguimiento.",
  },
  {
    title: "Dashboard de cartera y seguimiento",
    description:
      "Construimos tableros accionables para seguimiento de cartera, transición de mora y visibilidad operativa para equipos de crédito y riesgo.",
    value:
      "Permite monitorear evolución, detectar desvíos y sostener una conversación más clara con operación y comité.",
  },
  {
    title: "Simulador de liquidez para comité",
    description:
      "Diseñamos herramientas simples para evaluar escenarios de liquidez, sensibilidad y brechas de caja en espacios de decisión.",
    value:
      "Ayuda a estructurar discusiones con supuestos explícitos y mejor soporte para decisiones financieras.",
  },
  {
    title: "Inteligencia macro y sectorial aplicada",
    description:
      "Integramos señales macroeconómicas y sectoriales en el análisis para enriquecer evaluación, seguimiento y conversaciones de comité.",
    value:
      "Aporta contexto útil para interpretar riesgo, priorizar seguimiento y fortalecer criterio de evaluación.",
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
  "Menos trabajo manual en revisión financiera.",
  "Mejor calidad y homogeneidad de la información.",
  "Más velocidad para analizar, evaluar y preparar comité.",
  "Mayor visibilidad para seguimiento y toma de decisión.",
  "Mejor base para originación, riesgo y seguimiento posterior.",
];

const notUs = [
  "No somos una fábrica de software genérico.",
  "No vendemos humo de IA ni discursos sobredimensionados.",
  "No reemplazamos el juicio financiero del cliente.",
  "No prometemos plataformas gigantes cuando el problema requiere claridad y foco.",
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
