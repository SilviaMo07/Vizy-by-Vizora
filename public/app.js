const menuSections = [
  {
    title: "Carne Angus importada",
    items: [
      { name: "Picanha", description: "Conocida como punta gorda (350 gramos) muy apetecida ya que proviene del extremo con mayor marmoleo, con cascos de papa y ensalada.", price: "$ 140.000" },
      { name: "New york", description: "Corte del lomo trasero (350 gramos) de la res y se caracteriza por una capa de grasa externa que le aporta mucho sabor, con cascos de papa y ensalada.", price: "$ 140.000" },
      { name: "Rib Eye", description: "Corte premium de res, extraído del lomo alto de la res, con cascos de papa y ensalada.", price: "$ 140.000" }
    ]
  },
  {
    title: "Pescados y Mariscos",
    items: [
      { name: "Langostinos San Miguel", description: "Chorizo de cerdo y tortilla española, chips de arracacha.", price: "$ 95.000" },
      { name: "Langostinos en mantequilla de hierbas", description: "Puré de papa criolla, cremoso aguacate y tomate.", price: "$ 100.000" },
      { name: "Langostinos thermidor", description: "Langostinos en salsa blanca gratinados.", price: "$ 115.000" },
      { name: "Langostinos Molinito", description: "Langostinos con miel, mostaza francesa y vino blanco.", price: "$ 115.000" },
      { name: "Pulpo a la parrilla", description: "Con puré de papa y chimichurri de mango.", price: "$ 88.000" },
      { name: "Salmón a las finas hierbas", description: "Con arroz y papa frita.", price: "$ 80.000" },
      { name: "Pescado blanco a la plancha", description: "Con vegetales salteados y papa frita.", price: "$ 42.000" },
      { name: "Pescado blanco al malecón", description: "En salsa criolla con camarones, arroz, papa y yuca.", price: "$ 75.000" },
      { name: "Pescado blanco vatel", description: "Con champiñones y camarones, gratinado, arroz y papa frita.", price: "$ 75.000" },
      { name: "Pescado blanco marinera", description: "En salsa marinera con frutos del mar, arroz y papa frita.", price: "$ 85.000" },
      { name: "Pescado blanco lacedo en aceite aromatizado", description: "Con vegetales mediterráneos y papa frita.", price: "$ 46.000" },
      { name: "Salmón encostrado en semillas de ajonjolí blanco y negro", description: "Con sirri y de vegetales, aderezo de salsa de soya, bolita de risotto y parmesano.", price: "$ 80.000" },
      { name: "Fiesta de mariscos", description: "Frutos del mar, pescado blanco al ajillo, salmón en llama de brandy y papa dorada.", price: "$ 125.000" },
      { name: "Cazuela marina", description: "Crema marinera con camarones, almeja, pulpo, calamar, pescado blanco, langostino, con patacón y arroz.", price: "$ 98.000" }
    ]
  }
];

const confirmedWeights = {
  "Picanha": "350 g de carne; acompañamiento: 390 g",
  "New york": "350 g de carne; acompañamiento: 390 g",
  "Rib Eye": "300 g de carne; acompañamiento: 360 g",
  "Langostinos San Miguel": "200 g de langostinos; acompañamiento: 330 g",
  "Langostinos en mantequilla de hierbas": "150 g de langostinos; acompañamiento: 270 g",
  "Langostinos thermidor": "240 g de langostinos; acompañamiento: 180 g",
  "Langostinos Molinito": "150 g de langostinos; acompañamiento: 240 g",
  "Pulpo a la parrilla": "140 g de pulpo; acompañamiento: 250 g",
  "Salmón a las finas hierbas": "220 g de salmón; acompañamiento: 410 g",
  "Pescado blanco a la plancha": "200 g de pescado; acompañamiento: 390 g",
  "Pescado blanco al malecón": "370 g de pescado con salsa de camarón; acompañamiento: 480 g",
  "Pescado blanco vatel": "330 g de pescado con salsa Vatel y gratinado; acompañamiento: 380 g",
  "Pescado blanco marinera": "330 g de pescado con salsa marinera; acompañamiento: 380 g",
  "Pescado blanco lacedo en aceite aromatizado": "200 g de pescado; acompañamiento: 390 g",
  "Salmón encostrado en semillas de ajonjolí blanco y negro": "200 g de salmón; acompañamiento: 300 g",
  "Fiesta de mariscos": "Pescado blanco al ajillo: 140 g; salmón en llama de brandy: 150 g; frutos del mar: 210 g; acompañamiento: 250 g",
  "Cazuela marina": "Frutos del mar: 200 g (camarones, almejas en su concha, pulpo, calamar, dados de pescado blanco y langostino); crema marinera base: 410 g; acompañamiento: 190 g"
};

const confirmedAllergens = {
  "Picanha": ["mostaza", "soya", "huevo", "frutos secos"],
  "New york": ["mostaza", "soya", "huevo", "frutos secos"],
  "Rib Eye": ["mostaza", "soya", "huevo", "frutos secos"],
  "Langostinos San Miguel": ["crustáceos", "gluten"],
  "Langostinos en mantequilla de hierbas": ["crustáceos", "lácteos"],
  "Langostinos thermidor": ["crustáceos", "lácteos", "mostaza", "gluten"],
  "Langostinos Molinito": ["crustáceos", "mostaza"],
  "Pulpo a la parrilla": ["moluscos"],
  "Salmón a las finas hierbas": ["pescado", "lácteos"],
  "Pescado blanco a la plancha": ["pescado"],
  "Pescado blanco al malecón": ["pescado", "crustáceos"],
  "Pescado blanco vatel": ["pescado", "crustáceos", "lácteos"],
  "Pescado blanco marinera": ["pescado", "crustáceos", "moluscos"],
  "Pescado blanco lacedo en aceite aromatizado": ["pescado"],
  "Salmón encostrado en semillas de ajonjolí blanco y negro": ["pescado", "ajonjolí", "soya", "lácteos"],
  "Fiesta de mariscos": ["crustáceos", "moluscos"],
  "Cazuela marina": ["crustáceos", "moluscos", "lácteos"]
};

const confirmedCalories = {
  "Picanha": "Punta gorda: 785 kcal; cascos de papa: 717 kcal; ensalada: 128 kcal. Total: 1.630 kcal",
  "New york": "Corte New York: 675 kcal; cascos de papa: 717 kcal; ensalada: 128 kcal. Total: 1.520 kcal",
  "Rib Eye": "Rib Eye: 635 kcal; cascos de papa: 690 kcal; ensalada: 90 kcal. Total: 1.415 kcal",
  "Langostinos San Miguel": "Langostinos: 325 kcal; tortilla española: 325 kcal; chorizo de cerdo: 265 kcal; chips de arracacha: 90 kcal. Total: 1.005 kcal",
  "Langostinos en mantequilla de hierbas": "Langostinos: 265 kcal; puré de papa criolla: 210 kcal; cremoso de aguacate: 112 kcal; tomate fresco: 58 kcal. Total: 645 kcal",
  "Langostinos thermidor": "Langostinos thermidor: 780 kcal",
  "Langostinos Molinito": "Langostinos Molinito: 285 kcal",
  "Pulpo a la parrilla": "Pulpo a la parrilla con chimichurri de mango: 270 kcal; puré de papa: 415 kcal. Total: 685 kcal",
  "Salmón a las finas hierbas": "Salmón: 495 kcal; papa frita: 465 kcal; arroz blanco: 195 kcal. Total: 1.155 kcal",
  "Pescado blanco a la plancha": "Pescado blanco: 270 kcal; papa frita: 717 kcal; vegetales: 128 kcal. Total: 1.115 kcal",
  "Pescado blanco al malecón": "Pescado blanco: 465 kcal; yuca cocida: 320 kcal; arroz blanco: 175 kcal; papa cocida: 175 kcal. Total: 1.135 kcal",
  "Pescado blanco vatel": "Pescado blanco con salsa Vatel y gratinado: 605 kcal; papa frita: 615 kcal; arroz blanco: 165 kcal. Total: 1.385 kcal",
  "Pescado blanco marinera": "Pescado blanco en salsa marinera: 535 kcal; papa frita: 615 kcal; arroz blanco: 195 kcal. Total: 1.345 kcal",
  "Pescado blanco lacedo en aceite aromatizado": "Pescado: 325 kcal; papas fritas: 717 kcal; vegetales: 128 kcal. Total: 1.170 kcal",
  "Salmón encostrado en semillas de ajonjolí blanco y negro": "Salmón encostrado: 575 kcal; risotto y parmesano: 415 kcal; vegetales: 120 kcal. Total: 1.110 kcal",
  "Fiesta de mariscos": "Pescado blanco al ajillo: 255 kcal; salmón en llama de brandy: 350 kcal; frutos del mar: 280 kcal; acompañamiento: 450 kcal. Total: 1.335 kcal",
  "Cazuela marina": "Frutos del mar: 210 kcal; crema marinera base: 575 kcal; arroz: 195 kcal; patacón: 135 kcal. Total: 1.115 kcal"
};

const menuItems = menuSections.flatMap((section) =>
  section.items.map((item, index) => {
    return {
      ...item,
      id: `${section.title.toLowerCase().replace(/\s+/g, "-")}-${index}`,
      category: section.title,
      calories: confirmedCalories[item.name] || "No disponible",
      weight: confirmedWeights[item.name] || null,
      temperature: null,
      cooking: null,
      ingredients: [],
      allergens: confirmedAllergens[item.name] || ["Se informa según disponibilidad del restaurante"],
      note: "Descripción según carta del restaurante.",
      pairing: null
    };
  })
);

const messagesEl = document.getElementById("chatMessages");
const formEl = document.getElementById("chatForm");
const inputEl = document.getElementById("userInput");
const menuListEl = document.getElementById("menuList");
const gamesSection = document.getElementById("gamesSection");
const scanQrBtn = document.getElementById("scanQrBtn");
const sendOrderBtn = document.getElementById("sendOrderBtn");
const chefWhatsapp = "573046356202";

let selectedDish = menuItems[0];
let hasExplicitDishSelection = false;

function normalise(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function addMessage(content, type = "bot") {
  const bubble = document.createElement("div");
  bubble.className = `message ${type}`;
  bubble.innerHTML = content;
  messagesEl.appendChild(bubble);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function renderMenu() {
  menuListEl.innerHTML = "";

  menuSections.forEach((section) => {
    const sectionWrap = document.createElement("div");
    sectionWrap.className = "menu-section";

    const title = document.createElement("h3");
    title.className = "menu-section-title";
    title.textContent = section.title;
    sectionWrap.appendChild(title);

    section.items.forEach((item) => {
      const dish = menuItems.find((entry) => entry.name === item.name && entry.category === section.title);
      const row = document.createElement("button");
      row.type = "button";
      row.className = `menu-row ${dish && dish.id === selectedDish.id ? "selected" : ""}`;
      row.innerHTML = `
        <div class="menu-row-main">
          <span class="menu-row-name">${item.name}</span>
          ${item.description ? `<span class="menu-row-description">${item.description}</span>` : ""}
        </div>
        <span class="menu-row-price">${item.price}</span>
      `;

      row.addEventListener("click", () => {
        if (dish) {
          selectedDish = dish;
          hasExplicitDishSelection = true;
          renderMenu();
          addMessage(
            `<strong>${dish.name}</strong> está seleccionado. Puedes preguntarme por sus calorías, peso o alérgenos confirmados.`,
            "bot"
          );
        }
      });

      sectionWrap.appendChild(row);
    });

    menuListEl.appendChild(sectionWrap);
  });
}

function formatList(items) {
  if (!items || !items.length) {
    return "No hay un detalle exacto cargado en este momento, pero te cuento que se prepara con ingredientes frescos y bien seleccionados.";
  }
  return items.join(", ");
}

function findDishByMessage(message) {
  const normalised = normalise(message);
  const ignoredWords = new Set([
    "a", "al", "algo", "algun", "alguna", "ayuda", "blanco", "con", "cual",
    "caloria", "calorias", "cuanto", "cuanta", "cuantas", "cuantos", "de",
    "del", "dime", "el",
    "en", "es", "favor",
    "gusta", "gustaria", "la", "las", "lo", "los", "me", "menu", "mi",
    "kcal", "pesa", "peso", "por", "plato", "puedes", "que", "quisiera", "saber",
    "tiene", "un", "una"
  ]);
  const queryWords = normalised.split(" ").filter((word) => word && !ignoredWords.has(word));

  const exactMatch = menuItems.find((dish) => normalised.includes(normalise(dish.name)));
  if (exactMatch) return exactMatch;

  const isNearMatch = (left, right) => {
    if (left === right) return true;
    if (Math.abs(left.length - right.length) > 1 || Math.min(left.length, right.length) < 3) {
      return false;
    }

    let leftIndex = 0;
    let rightIndex = 0;
    let differences = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] === right[rightIndex]) {
        leftIndex += 1;
        rightIndex += 1;
        continue;
      }

      differences += 1;
      if (differences > 1) return false;

      if (left.length > right.length) leftIndex += 1;
      else if (right.length > left.length) rightIndex += 1;
      else {
        leftIndex += 1;
        rightIndex += 1;
      }
    }

    return true;
  };

  if (queryWords.length === 1) {
    const uniqueMatch = menuItems.filter((dish) =>
      normalise(dish.name).split(" ").some((word) =>
        word.length >= 5 && isNearMatch(word, queryWords[0])
      )
    );
    return uniqueMatch.length === 1 ? uniqueMatch[0] : null;
  }

  if (queryWords.length < 2) return null;

  const matches = menuItems.map((dish) => {
    const nameWords = normalise(dish.name)
      .split(" ")
      .filter((word) => word && !ignoredWords.has(word));
    const matchedWords = nameWords.filter((nameWord) =>
      queryWords.some((queryWord) => isNearMatch(nameWord, queryWord))
    );
    const exactWords = matchedWords.filter((word) => queryWords.includes(word));

    return { dish, matchedCount: matchedWords.length, exactCount: exactWords.length };
  })
    .filter((match) => match.matchedCount >= 2)
    .sort((left, right) =>
      right.matchedCount - left.matchedCount || right.exactCount - left.exactCount
    );

  if (!matches.length) return null;

  const best = matches[0];
  const second = matches[1];
  if (
    best.matchedCount / queryWords.length < 0.75 ||
    (second &&
      second.matchedCount === best.matchedCount &&
      second.exactCount === best.exactCount)
  ) {
    return null;
  }

  return best.dish;
}

function getDishClarification(intent) {
  const fishTerms = ["pescado", "salmon", "atun", "bacalao", "pez"];
  const seafoodTerms = ["marisco", "camaron", "langostino", "pulpo", "calamar", "almeja"];
  const meatTerms = ["picanha", "carne", "res", "rib eye", "new york"];
  const fishMatches = fishTerms.filter((term) => intent.includes(term));
  const seafoodMatches = seafoodTerms.filter((term) => intent.includes(term));
  const meatMatches = meatTerms.filter((term) => intent.includes(term));
  const terms = [...fishMatches, ...seafoodMatches, ...meatMatches];

  if (!terms.length) return null;

  const options = menuItems.filter((dish) => {
    const searchable = normalise(
      `${dish.name} ${dish.description} ${meatMatches.length ? dish.category : ""}`
    );
    return terms.some((term) => searchable.includes(term));
  });

  if (!options.length) return null;

  return `En la carta hay varias opciones relacionadas: ${options.map((dish) => dish.name).join(", ")}. ¿De cuál quieres saber?`;
}

function buildDishResponse(dish, intent) {
  const asksCalories = ["caloria", "calorias", "kcal"].some((term) => intent.includes(term));
  const asksWeight = ["peso", "pesa", "gramo", "gramos", "cantidad"].some((term) => intent.includes(term));
  const asksAllergens = ["alerg", "gluten", "lacteo", "lactosa", "crustace", "molusco", "mostaza", "soya", "ajonjoli", "frutos secos"].some((term) => intent.includes(term));
  const asksIngredients = ["ingrediente", "preparado", "preparacion", "que tiene", "contiene"].some((term) => intent.includes(term));
  const asksCooking = ["coccion", "termino", "cocida", "cocido", "temperatura"].some((term) => intent.includes(term));
  const asksPairing = ["sugerencia", "recomienda", "acompa", "vino", "coctel", "cocktail", "postre", "maridaje", "bebida"].some((term) => intent.includes(term));
  const details = [];

  if (asksCalories) details.push(`🔥 Calorías de ${dish.name}: ${dish.calories}.`);
  if (asksWeight) details.push(`⚖️ Peso de ${dish.name}: ${dish.weight || "no confirmado en la información disponible"}.`);
  if (asksAllergens) details.push(`⚠️ Alérgenos de ${dish.name}: ${formatList(dish.allergens)}.`);
  if (asksIngredients) {
    details.push(
      dish.description
        ? `🌿 Descripción de la carta para ${dish.name}: ${dish.description} La lista completa de ingredientes no está disponible.`
        : `🌿 Ingredientes de ${dish.name}: no confirmados en la información disponible.`
    );
  }
  if (asksCooking) details.push(`🔥 El punto de cocción y la temperatura de ${dish.name} no están confirmados en la información disponible.`);
  if (asksPairing) details.push(`No tengo recomendaciones de maridaje confirmadas para ${dish.name}.`);

  if (!details.length) {
    details.push(
      `Para ${dish.name}: calorías: ${dish.calories}; peso: ${dish.weight || "no confirmado"}; alérgenos: ${formatList(dish.allergens)}.`
    );
    if (dish.description) details.push(`Descripción de la carta: ${dish.description}`);
    details.push("La lista completa de ingredientes, el punto de cocción y la temperatura no están confirmados.");
  }

  return details.join("<br>");
}

function getPairingResponse(dish, intent) {
  return `No tengo recomendaciones de maridaje confirmadas para ${dish.name}.`;
}

function getDislikedTerms(intent) {
  const groups = {
    mariscos: ["marisco", "mariscos", "camaron", "camarones", "langostino", "langostinos", "calamar", "pulpo", "almeja", "marino", "marina"],
    pescado: ["pescado", "pez", "salmon", "salmón", "atun", "atún", "bacalao"],
    carne: ["carne", "res", "bife", "lomo", "pollo", "cerdo", "churrasco"],
    lactosa: ["lactosa", "lacteo", "lácteo", "leche", "queso", "crema", "mantequilla"],
    gluten: ["gluten", "trigo", "harina", "pan", "pasta"],
    picante: ["picante", "aji", "ají", "pimienta", "pimenton", "pimentón"],
    vegetal: ["verdura", "vegetales", "espinaca", "brocoli", "brócoli"],
    dulce: ["dulce", "azucar", "azúcar"]
  };

  const negativePhrases = [
    "no me gusta",
    "prefiero sin",
    "evito",
    "no quiero",
    "no me agrada",
    "no lo quiero",
    "odio",
    "rechazo",
    "detesto",
    "sin",
    "no me gusta el",
    "no me gusta la",
    "no me gustan",
    "no me gusta ni"
  ];

  const found = [];

  for (const [key, terms] of Object.entries(groups)) {
    const isDisliked = terms.some((term) => intent.includes(term));
    const hasNegativePhrase = negativePhrases.some((phrase) => intent.includes(phrase));
    if (isDisliked && hasNegativePhrase) {
      found.push(key);
    }
  }

  return found;
}

function formatDislikedTerms(disliked) {
  if (!disliked.length) return "ese detalle";
  if (disliked.length === 1) return disliked[0];
  if (disliked.length === 2) return `${disliked[0]} ni ${disliked[1]}`;
  return `${disliked.slice(0, -1).join(", ")} ni ${disliked[disliked.length - 1]}`;
}

function startGame(mode) {
  const gameMap = {
    burger: {
      title: "Burger Boss",
      subtitle: "Arma el pedido perfecto",
      objective: "Burger doble + papas",
      ingredients: ["Pan", "Carne", "Queso", "Tomate", "Papas", "Lechuga"],
      recipe: ["Pan", "Carne", "Queso", "Tomate", "Lechuga", "Pan"],
      reward: "¡Perfecto! Pedido listo para servir."
    },
    kitchen: {
      title: "Kitchen Rush",
      subtitle: "Prepara la orden del cliente",
      objective: "Sopa caliente + tostadas",
      ingredients: ["Caldo", "Tomate", "Cebolla", "Pan", "Queso", "Pimienta"],
      recipe: ["Caldo", "Tomate", "Cebolla", "Pan", "Queso"],
      reward: "¡Excelente! La sopa quedó impecable."
    },
    dessert: {
      title: "Dessert Dash",
      subtitle: "Crea el postre ideal",
      objective: "Pastel de chocolate",
      ingredients: ["Harina", "Chocolate", "Leche", "Huevo", "Vainilla", "Azúcar"],
      recipe: ["Harina", "Chocolate", "Leche", "Huevo", "Azúcar"],
      reward: "¡Delicioso! El postre está perfecto."
    }
  };

  const selected = gameMap[mode];
  let selectedIngredients = [];

  const renderIngredients = () => {
    const ingredientButtons = selected.ingredients
      .map(
        (ingredient) => `
          <button class="ingredient-btn" type="button" data-ingredient="${ingredient}">${ingredient}</button>
        `
      )
      .join("");

    const currentOrder = selectedIngredients.length
      ? selectedIngredients.join(" → ")
      : "Aún no has armado la orden";

    gamesSection.innerHTML = `
      <div class="games-header">
        <h3>🎮 ${selected.title}</h3>
        <p>${selected.subtitle}</p>
      </div>

      <div class="cooking-game">
        <div class="order-box">
          <span class="mini-label">Pedido</span>
          <h4>${selected.objective}</h4>
          <p>Orden actual: <strong>${currentOrder}</strong></p>
        </div>

        <div class="ingredient-grid">${ingredientButtons}</div>

        <div class="game-controls">
          <button class="action-btn" type="button" id="cookDishBtn">Cocinar</button>
          <button class="action-btn ghost" type="button" id="resetDishBtn">Reiniciar</button>
        </div>

        <div class="game-result" id="gameResult">Haz clic en los ingredientes para preparar la orden.</div>
      </div>
    `;

    gamesSection.querySelectorAll(".ingredient-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const ingredient = button.dataset.ingredient;
        selectedIngredients.push(ingredient);
        renderIngredients();
      });
    });

    const cookButton = document.getElementById("cookDishBtn");
    if (cookButton) {
      cookButton.addEventListener("click", () => {
        const resultEl = document.getElementById("gameResult");
        const isCorrect = JSON.stringify(selectedIngredients) === JSON.stringify(selected.recipe);

        resultEl.textContent = isCorrect ? selected.reward : "No quedó bien: revisa el orden y prueba otra vez.";
        resultEl.style.color = isCorrect ? "#2b7a59" : "#8e4329";
      });
    }

    const resetButton = document.getElementById("resetDishBtn");
    if (resetButton) {
      resetButton.addEventListener("click", () => {
        selectedIngredients = [];
        renderIngredients();
      });
    }
  };

  renderIngredients();
}

function showGamesSection() {
  if (!gamesSection) return;

  gamesSection.classList.remove("hidden");
  gamesSection.innerHTML = `
    <div class="games-header">
      <h3>🎮 Juegos de cocina</h3>
      <p>Elige uno y prepara platos mientras esperas tu comida.</p>
    </div>
    <div class="game-grid">
      <button class="game-card" type="button" data-game="burger">
        <strong>🍔 Burger Boss</strong>
        Arma el pedido perfecto y sirve al cliente.
      </button>
      <button class="game-card" type="button" data-game="kitchen">
        <strong>🍲 Kitchen Rush</strong>
        Prepara la orden más rápida del restaurante.
      </button>
      <button class="game-card" type="button" data-game="dessert">
        <strong>🥧 Dessert Dash</strong>
        Crea el mejor postre y gana la cocina.
      </button>
    </div>
    <div class="game-result" id="gameResult">Selecciona un juego para empezar.</div>
  `;

  gamesSection.querySelectorAll(".game-card").forEach((button) => {
    button.addEventListener("click", () => {
      startGame(button.dataset.game);
    });
  });
}

function isRunningFromFile() {
  return window.location.protocol === "file:";
}

function buildWhatsAppLink(dish) {
  const text = encodeURIComponent(
    [
      "Hola chef,",
      "",
      "Pedido confirmado.",
      "",
      "Detalle del pedido:",
      `Pedido: ${dish.name}`,
      `Precio: ${dish.price || "Por confirmar"}`,
      `Categoría: ${dish.category || "Sin categoría"}`,
      `Punto de cocción: ${dish.cooking || "No informado"}`,
      `Temperatura de servicio: ${dish.temperature || "No informada"}`,
      "",
      "Gracias."
    ].join("\n")
  );

  return `https://wa.me/${chefWhatsapp}?text=${text}`;
}

async function sendOrderToChef(dish) {
  if (isRunningFromFile()) {
    window.location.href = "http://localhost:3000";
    return;
  }

  const payload = {
    dish: dish.name,
    price: dish.price || "Por confirmar",
    category: dish.category || "Sin categoría",
    cooking: dish.cooking || "No informado",
    temperature: dish.temperature || "No informada"
  };

  const waLink = buildWhatsAppLink(dish);

  addMessage(
    `Pedido confirmado para <strong>${dish.name}</strong>. Estoy enviándolo al WhatsApp del chef <strong>${chefWhatsapp}</strong>.`,
    "bot"
  );

  try {
    const response = await fetch(`/api/order?dish=${encodeURIComponent(payload.dish)}&price=${encodeURIComponent(payload.price)}&category=${encodeURIComponent(payload.category)}&cooking=${encodeURIComponent(payload.cooking)}&temperature=${encodeURIComponent(payload.temperature)}`);
    const data = await response.json();

    if (response.ok && data && data.whatsappUrl) {
      addMessage("✅ El pedido confirmado se abrió en WhatsApp para enviarlo al chef.", "bot");
      window.open(data.whatsappUrl, "_blank");
      return;
    }

    addMessage("📲 El pedido confirmado está listo para enviarse por WhatsApp.", "bot");
    window.open(waLink, "_blank");
  } catch (error) {
    addMessage("📲 El pedido confirmado está listo para enviarse por WhatsApp.", "bot");
    window.open(waLink, "_blank");
  }
}

function handleInput(message) {
  const intent = normalise(message);
  const mentionedDish = findDishByMessage(message);
  const disliked = getDislikedTerms(intent);
  const asksDishData = [
    "caloria", "calorias", "kcal", "peso", "pesa", "gramo", "gramos",
    "alerg", "gluten", "lacteo", "ingrediente", "preparado", "preparacion",
    "coccion", "temperatura", "maridaje", "vino", "coctel", "postre",
    "plato", "informacion", "info"
  ].some((term) => intent.includes(term));
  const clarification = mentionedDish ? null : getDishClarification(intent);

  if (clarification) return clarification;

  const refersToSelectedDish = hasExplicitDishSelection &&
    asksDishData &&
    !["pescado", "salmon", "atun", "bacalao", "pez", "marisco", "camaron", "langostino", "pulpo", "calamar", "almeja", "picanha", "carne", "res", "rib eye", "new york"].some((term) => intent.includes(term));
  const dish = mentionedDish || (refersToSelectedDish ? selectedDish : null);

  if (intent.includes("pedido") || intent.includes("ordenar") || intent.includes("confirmo") || intent.includes("lo pido") || intent.includes("quiero este") || intent.includes("quiero pedir") || intent.includes("confirmar pedido")) {
    const orderDish = mentionedDish || (refersToSelectedDish ? selectedDish : null);
    if (!orderDish) {
      return "¿Qué plato deseas pedir? Dime su nombre o selecciónalo en el menú.";
    }
    sendOrderToChef(orderDish);
    return `Perfecto, tu pedido de ${orderDish.name} ya está listo para enviarse al chef por WhatsApp.`;
  }

  if (disliked.length) {
    return `Entiendo que prefieres evitar ${formatDislikedTerms(disliked)}. No puedo confirmar una recomendación libre de ese ingrediente porque la información completa de ingredientes no está disponible. Consulta al restaurante antes de pedir.`;
  }


  if (!intent || intent.includes("hola") || intent.includes("buenas") || intent.includes("ayuda")) {
    return `¡Hola! Soy Vizy, tu asistente virtual de Vizora. Estoy aquí para ayudarte a elegir algo delicioso según tu gusto, tus preferencias y la experiencia que quieras vivir. Si me dices qué te apetece o qué no te gusta, te recomiendo algo perfecto para ti.`;
  }

  const hasPairingRequest = [
    "sugerencia",
    "recomienda",
    "acompa",
    "vino",
    "coctel",
    "cocktail",
    "postre",
    "maridaje",
    "bebida"
  ].some((term) => intent.includes(term));

  const isAllergyRequest = [
    "alerg",
    "lacteo",
    "lactosa",
    "gluten",
    "mariscos",
    "frutos secos",
    "nuts",
    "pescado"
  ].some((term) => intent.includes(term));

  const isCookingQuestion = [
    "cocida",
    "cocido",
    "coccion",
    "cocción",
    "a punto",
    "3 4",
    "3/4",
    "4 5",
    "4/5",
    "medio",
    "bien cocida",
    "bien cocido",
    "temperatura"
  ].some((term) => intent.includes(term));

  if (hasPairingRequest) {
    if (!dish) {
      return "¿Qué plato quieres acompañar? Dime el nombre o selecciónalo en el menú y te recomiendo una combinación.";
    }
    return getPairingResponse(dish, intent);
  }

  if (dish && (mentionedDish || refersToSelectedDish || intent.includes("plato") || asksDishData || isAllergyRequest || isCookingQuestion)) {
    return buildDishResponse(dish, intent);
  }

  if (!dish && asksDishData) {
    return "¿De qué plato necesitas la información? Dime su nombre para responderte solo con datos de ese plato.";
  }

  if (intent.includes("menu") || intent.includes("ver platos") || intent.includes("recomendacion")) {
    const top = menuItems.slice(0, 3).map((item) => item.name).join(", ");
    return `Hoy tengo opciones muy buenas: ${top}. Si quieres, te ayudo a elegir según tu gusto, si prefieres algo más ligero, más sabroso o más contundente.`;
  }

  return `Claro, te puedo ayudar con eso. Si me dices el plato, lo que te gusta o lo que no te gusta, te recomiendo algo perfecto para tu momento.`;
}

function onSubmit(event) {
  event.preventDefault();
  const text = inputEl.value.trim();
  if (!text) return;

  addMessage(text, "user");
  inputEl.value = "";

  const response = handleInput(text);
  window.setTimeout(() => {
    addMessage(response, "bot");
  }, 220);
}

scanQrBtn.addEventListener("click", () => {
  const cookingGamesUrl = "https://www.crazygames.com/es/t/cooking";
  window.open(cookingGamesUrl, "_blank", "noopener,noreferrer");
  addMessage(
    "🎮 Te estoy llevando a la categoria de juegos de cocina para que juegues mientras esperas tu comida.",
    "bot"
  );
});

sendOrderBtn.addEventListener("click", () => {
  const link = buildWhatsAppLink(selectedDish);
  addMessage(
    `Pedido confirmado para <strong>${selectedDish.name}</strong>. Se abrió el WhatsApp del chef <strong>${chefWhatsapp}</strong>.`,
    "bot"
  );
  window.open(link, "_blank");
});

formEl.addEventListener("submit", onSubmit);

renderMenu();
addMessage(
  "¡Hola! Soy Vizy, tu asistente virtual de Vizora. Estoy aquí para ayudarte a elegir algo delicioso, cómodo y perfecto para ti. Si me dices qué te gusta, qué no te gusta o qué te apetece hoy, te recomiendo algo con gusto y sin complicarte la vida.",
  "bot"
);
