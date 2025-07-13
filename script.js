// script.js

const cursos = [
  { nombre: "Introducción al comercio exterior", id: "intro_comercio", requisitos: [] },
  { nombre: "Introducción a la logística", id: "intro_logistica", requisitos: [] },
  { nombre: "Herramientas tecnologicas", id: "herr_tec_1", requisitos: [], desbloquea: ["herr_tec_2"] },
  { nombre: "Habilidades de comunicación", id: "hab_com_1", requisitos: [], desbloquea: ["hab_com_2"] },
  { nombre: "Nivelación matemática", id: "niv_mate", requisitos: [], desbloquea: ["calc_algebra"] },

  { nombre: "Importaciones", id: "importaciones", requisitos: [], desbloquea: ["taller_admin"] },
  { nombre: "Transporte internacional", id: "transporte", requisitos: [] },
  { nombre: "Administración en organizaciones", id: "admin_org", requisitos: [], desbloquea: ["presupuestos"] },
  { nombre: "Herramientas de cálculo y álgebra", id: "calc_algebra", requisitos: ["niv_mate"], desbloquea: ["estadisticas"] },
  { nombre: "Inglés básico comex", id: "ingles_basico", requisitos: [], desbloquea: ["ingles_elemental"] },

  { nombre: "Exportaciones", id: "exportaciones", requisitos: [] },
  { nombre: "Costos DFI", id: "costos_dfi", requisitos: [] },
  { nombre: "Herramientas tecnológicas II", id: "herr_tec_2", requisitos: ["herr_tec_1"], desbloquea: ["herr_tec_3"] },
  { nombre: "Herramientas de estadísticas", id: "estadisticas", requisitos: ["calc_algebra"], desbloquea: ["optimizacion"] },
  { nombre: "Inglés elemental comex", id: "ingles_elemental", requisitos: ["ingles_basico"], desbloquea: ["ingles_intermedio"] },
  { nombre: "Fundamentos de antropología", id: "antro", requisitos: [], desbloquea: ["etica_trabajo"] },

  { nombre: "Operaciones de compra y abastecimiento", id: "compra_abas", requisitos: [] },
  { nombre: "Geografía política, económica y cultural", id: "geo", requisitos: [] },
  { nombre: "Administración de presupuestos", id: "presupuestos", requisitos: ["admin_org"] },
  { nombre: "Inglés intermedio comex", id: "ingles_intermedio", requisitos: ["ingles_elemental"], desbloquea: ["ingles_intermedio_alto"] },
  { nombre: "Ética para el trabajo", id: "etica_trabajo", requisitos: ["antro"], desbloquea: ["etica_prof"] },
  { nombre: "Formación cristiana", id: "cristiana", requisitos: [] },

  { nombre: "Taller aplicado admin. de operaciones", id: "taller_admin", requisitos: ["importaciones"], desbloquea: ["gestion_dfi"] },
  { nombre: "Cadena de suministros", id: "cadena", requisitos: [] },
  { nombre: "Herramientas tecnológicas III", id: "herr_tec_3", requisitos: ["herr_tec_2"] },
  { nombre: "Inglés intermedio alto comex", id: "ingles_intermedio_alto", requisitos: ["ingles_intermedio"], desbloquea: ["esp_com"] },
  { nombre: "Electivo competencias globales", id: "electivo1", requisitos: [] },

  { nombre: "Gestión de la DFI", id: "gestion_dfi", requisitos: ["taller_admin"] },
  { nombre: "Finanzas internacionales", id: "finanzas", requisitos: [] },
  { nombre: "Optimización", id: "optimizacion", requisitos: ["estadisticas"] },
  { nombre: "Big data e inteligencia de negocios", id: "bigdata", requisitos: [] },
  { nombre: "Esp commerce", id: "esp_com", requisitos: ["ingles_intermedio_alto"] },
  { nombre: "Formación complementaria", id: "complementaria", requisitos: [] },

  { nombre: "Gestión de abastecimiento", id: "abastecimiento", requisitos: [] },
  { nombre: "Negocios internacionales", id: "negocios", requisitos: [] },
  { nombre: "Evaluación de proyectos", id: "evaluacion", requisitos: [] },
  { nombre: "Cadena de suministros verde", id: "cadena_verde", requisitos: [] },
  { nombre: "Habilidades comunicacionales", id: "hab_com_2", requisitos: ["hab_com_1"] },
  { nombre: "Ética profesional", id: "etica_prof", requisitos: ["etica_trabajo"] },

  { nombre: "Taller aplicado planificación estratégica", id: "plan_estrategica", requisitos: [] },
  { nombre: "Práctica profesional", id: "practica", requisitos: [] },
  { nombre: "Electivo competencias globales", id: "electivo2", requisitos: [] }
];

const malla = document.getElementById("malla");

const completados = new Set();

function renderMalla() {
  malla.innerHTML = "";
  cursos.forEach(curso => {
    const div = document.createElement("div");
    div.classList.add("ramo");
    div.id = curso.id;

    const requisitosCumplidos = curso.requisitos.every(r => completados.has(r));
    if (!requisitosCumplidos) div.classList.add("locked");
    if (completados.has(curso.id)) div.classList.add("completed");

    div.innerText = curso.nombre;

    div.addEventListener("click", () => {
      if (div.classList.contains("locked")) return;

      if (completados.has(curso.id)) {
        completados.delete(curso.id);
      } else {
        completados.add(curso.id);
      }

      renderMalla();
    });

    malla.appendChild(div);
  });
}

renderMalla();

