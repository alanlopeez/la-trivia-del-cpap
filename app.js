// LA TRIVIA DEL CPAP - LOGICA Y MOTOR DEL JUEGO

// 1. BANCO DE PREGUNTAS (Extraído de Preguntas.docx)
const QUESTION_BANK = [
    {
        id: 1,
        text: "¿Cuál es el objetivo principal de la terapia con CPAP?",
        options: [
            "Curar definitivamente el insomnio crónico.",
            "Mantener la vía aérea abierta mediante presión continua de aire para evitar las apneas.",
            "Oxigenar la sangre artificialmente sin necesidad de respirar."
        ],
        correct: "B",
        hint: "El CPAP funciona como un \"soporte de aire continuo\" que actúa de columna invisible para que la garganta no se colapse al dormir."
    },
    {
        id: 2,
        text: "¿Con qué frecuencia se recomienda lavar diariamente la máscara y el tubo del CPAP?",
        options: [
            "Al menos de 1 a 3 veces a la semana.",
            "Una vez al mes.",
            "Cada seis meses."
        ],
        correct: "A",
        hint: "La higiene frecuente evita bacterias y acumulación de grasitud facial. ¡Se recomienda lavarla al menos de 1 a 3 veces por semana!"
    },
    {
        id: 3,
        text: "¿Qué tipo de agua es la más recomendada para llenar el humidificador del CPAP y evitar el cúmulo de sarro?",
        options: [
            "Agua de la canilla (grifo) hervida.",
            "Agua bi-desmineralizada.",
            "Agua mineral con gas."
        ],
        correct: "B",
        hint: "El agua de grifo tiene minerales que arruinan la placa del humidificador. Usá agua totalmente bi-desmineralizada."
    },
    {
        id: 4,
        text: "¿Cuál es el tiempo mínimo de uso por noche recomendado para considerar que la terapia CPAP es efectiva y genera adherencia?",
        options: [
            "Al menos 2 horas por noche.",
            "Al menos 4 horas por noche.",
            "Únicamente los fines de semana."
        ],
        correct: "B",
        hint: "El cuerpo necesita cubrir la mayor parte del descanso (mínimo 4 horas) para que el tratamiento sea clínicamente efectivo."
    },
    {
        id: 5,
        text: "Si se escuchan silbidos de aire y se siente una corriente cerca de los ojos, ¿qué problema está ocurriendo con la máscara?",
        options: [
            "La máscara tiene un sellado correcto y está liberando exceso de presión.",
            "Hay una fuga de aire debido a un mal sellado o ajuste inadecuado.",
            "El motor del CPAP se ha sobrecalentado."
        ],
        correct: "B",
        hint: "Los silbidos o el aire en los ojos delatan un sello incorrecto o un arnés mal tensionado que debe corregirse."
    },
    {
        id: 6,
        text: "¿Cada cuánto tiempo se recomienda, por lo general, cambiar la máscara debido al desgaste?",
        options: [
            "Cada 2 a 3 semanas.",
            "Al menos cada 12 meses.",
            "Cada 2 años."
        ],
        correct: "B",
        hint: "Incluso con buena higiene, la silicona se degrada y pierde elasticidad al cabo de 12 meses de uso continuo."
    },
    {
        id: 7,
        text: "¿Qué se debe hacer si el filtro de aire desechable (blanco/ultrafino) del CPAP se observa gris o con acumulación de polvo?",
        options: [
            "Lavarlo con abundante agua y detergente para volverlo a usar.",
            "Reemplazarlo inmediatamente por uno nuevo.",
            "Sacudirlo fuertemente y reinsertarlo en la máquina."
        ],
        correct: "B",
        hint: "Los filtros ultrafinos son descartables y no se pueden mojar ni sacudir. Deben cambiarse para cuidar tus pulmones y el motor."
    },
    {
        id: 8,
        text: "Generalmente, ¿cada cuánto tiempo se aconseja reemplazar por completo la máscara del CPAP (incluyendo el arnés)?",
        options: [
            "Cada 6 a 12 meses.",
            "Cada 5 años.",
            "Nunca, es una pieza permanente de por vida."
        ],
        correct: "A",
        hint: "La máscara es el componente expuesto a mayor desgaste. Renovarla entre los 6 y 12 meses garantiza efectividad y confort."
    },
    {
        id: 9,
        text: "¿Cuál es la consecuencia directa de un mal sellado de la máscara durante la noche?",
        options: [
            "Que la presión del aire disminuya en las vías respiratorias, reduciendo la efectividad del tratamiento.",
            "Que el CPAP consuma el doble de energía eléctrica.",
            "Que la máquina cambie automáticamente el idioma de la pantalla."
        ],
        correct: "A",
        hint: "Si hay fugas de aire, la presión interna disminuye, provocando que vuelvan las micro-apneas durante el sueño."
    },
    {
        id: 10,
        text: "¿Por qué no se debe usar alcohol, lavandina o jabones con fragancias fuertes para limpiar los componentes del CPAP?",
        options: [
            "Porque pueden dañar la silicona de la máscara y dejar residuos químicos nocivos para respirar.",
            "Porque vuelven el plástico demasiado brillante e interrumpe el sueño.",
            "Porque atraen insectos al humidificador de la máquina."
        ],
        correct: "A",
        hint: "Los químicos agresivos erosionan los materiales suaves y dejan vapores nocivos que inhalarías en contacto directo."
    },
    {
        id: 11,
        text: "¿Cuál es la función principal del humidificador en el equipo de CPAP?",
        options: [
            "Enfriar el aire de la habitación para simular un clima invernal.",
            "Añadir humedad al aire presurizado para evitar la sequedad en la nariz y la garganta.",
            "Filtrar las bacterias presentes en el ambiente."
        ],
        correct: "B",
        hint: "El flujo de aire continuo puede resecar las mucosas. El humidificador aporta vapor tibio para hacer la terapia placentera."
    },
    {
        id: 12,
        text: "¿Qué se debe hacer con el agua restante del humidificador al despertar por la mañana?",
        options: [
            "Dejarla en la cámara para la noche siguiente y rellenar lo que falte.",
            "Vaciar el tanque por completo, enjuagarlo y dejarlo secar al aire libre de la luz solar directa.",
            "Guardarla en una botella para usarla en plantas de interior."
        ],
        correct: "B",
        hint: "El agua estancada a temperatura ambiente facilita que proliferen microorganismos. ¡Vaciá y secá la cámara a diario!"
    },
    {
        id: 13,
        text: "¿Cada cuánto tiempo se deben cambiar los filtros de aire estándar de tu equipo de CPAP?",
        options: [
            "Al menos cada 6 meses de uso continuo (o lavarse/cambiarse según indique el fabricante).",
            "Cada 5 años.",
            "Cada semana de manera obligatoria."
        ],
        correct: "A",
        hint: "Los filtros de espuma lavables duran más, pero al cabo de 6 meses de uso deben sustituirse por pérdida de porosidad."
    },
    {
        id: 14,
        text: "Al ajustar las correas del arnés de la máscara, ¿cuál es la tensión ideal?",
        options: [
            "Lo más flojo posible, permitiendo que la máscara flote sobre la cara.",
            "Lo suficientemente firme para evitar fugas, pero sin causar dolor, marcas profundas ni puntos de presión excesivos.",
            "Lo más ajustado que dé la correa para garantizar que no se mueva nada de su lugar bajo ninguna circunstancia."
        ],
        correct: "B",
        hint: "El CPAP sella usando el cojín de aire, no por fuerza bruta. Ajustarla de más lastima tu piel y causa fugas adicionales."
    },
    {
        id: 15,
        text: "¿Qué beneficio a largo plazo reportan los usuarios que cumplen con los tiempos correctos de uso del CPAP?",
        options: [
            "Reducción de la somnolencia diurna, mejor concentración y menor riesgo cardiovascular.",
            "Pérdida total de la necesidad de dormir más de 3 horas por día.",
            "Curación total de la presión arterial alta en menos de una semana."
        ],
        correct: "A",
        hint: "Al eliminar las apneas, protegés tu corazón y cerebro, recuperando tu vitalidad, concentración y buen humor diurno."
    },
    {
        id: 16,
        text: "Si viajas en avión y necesitas llevar tu CPAP, ¿cómo se recomienda transportarlo?",
        options: [
            "Facturado dentro de la valija grande que va en la bodega de carga del avión.",
            "Como equipaje de mano en su bolso de transporte, ya que es un dispositivo médico.",
            "Desarmado en piezas distribuidas en los bolsillos de la ropa."
        ],
        correct: "B",
        hint: "El CPAP es equipaje de cabina prioritario por ley médica de aviación. Evitás roturas, pérdidas y podés usarlo si el vuelo es largo."
    },
    {
        id: 17,
        text: "¿Qué tipo de jabón es el más recomendado para limpiar la silicona de tu máscara?",
        options: [
            "Jabón líquido para platos ultra concentrado con aroma cítrico.",
            "Jabón neutro, suave y sin fragancias ni colorantes añadidos.",
            "Jabón exfoliante corporal con partículas sólidas."
        ],
        correct: "B",
        hint: "Los perfumes o geles humectantes dañan el material de silicona y causan reacciones alérgicas cutáneas al respirar."
    },
    {
        id: 18,
        text: "¿Por qué es un error común dejar de usar el CPAP cuando se tiene un resfriado o congestión nasal leve?",
        options: [
            "Porque el CPAP puede empeorar la congestión si no se usa con humidificación adecuada, pero suspenderlo interrumpe los beneficios de la terapia (se debe consultar por opciones como spray nasal o cambiar a máscara facial temporal).",
            "Porque el CPAP puede contagiar el resfriado a la electrónica interna de la máquina de forma permanente.",
            "Porque la congestión elimina mágicamente las apneas del sueño mientras dure el virus."
        ],
        correct: "A",
        hint: "Durante la congestión, la apnea se agrava. Mantener el CPAP (con humidificador tibio) ayuda a mantener abiertas tus vías respiratorias."
    },
    {
        id: 19,
        text: "¿Cuál de las siguientes es una señal clara de que el tubo flexible (manguera) del CPAP debe ser reemplazado?",
        options: [
            "Si cambia de color de blanco a transparente.",
            "Si presenta pequeñas grietas, perforaciones o rigidez extrema que causa fugas de aire.",
            "Si mide exactamente dos metros de longitud."
        ],
        correct: "B",
        hint: "Si la manguera se reseca, se fisura o se pincha, chiflará perdiendo presión y reduciendo el aire que llega a tu máscara."
    },
    {
        id: 20,
        text: "¿Qué debe hacer un paciente si experimenta molestias persistentes, dolor en el puente nasal o marcas rojas que no desaparecen tras usar la máscara?",
        options: [
            "Dejar de usar el CPAP de forma indefinida sin avisar a nadie.",
            "Consultar con su proveedor médico o especialista para revisar el tamaño, el ajuste o evaluar un modelo de máscara diferente.",
            "Aplicar pegamento industrial en los bordes de la máscara para acolchonarla."
        ],
        correct: "B",
        hint: "La terapia de CPAP no debe generar dolor. Si lastima, un especialista debe ajustar el talle o cambiar el tipo de máscara."
    }
];

// 2. BANCO DE PREMIOS (Con iconos 3D SVG interactivos)
const PRIZE_POOL = [
    {
        name: "un bidón de agua bi-desmineralizada para CPAP",
        wppText: "un bidón de agua bi-desmineralizada para CPAP",
        icon: `<svg viewBox="0 0 100 100" class="svg-3d">
            <defs>
                <linearGradient id="water-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#38bdf8" />
                    <stop offset="100%" stop-color="#0284c7" />
                </linearGradient>
                <linearGradient id="cap-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#f1f5f9" />
                    <stop offset="100%" stop-color="#cbd5e1" />
                </linearGradient>
            </defs>
            <rect x="32" y="38" width="36" height="46" rx="8" fill="url(#water-grad)" filter="drop-shadow(0 4px 8px rgba(2,132,199,0.35))" />
            <path d="M 39 38 L 43 24 L 57 24 L 61 38 Z" fill="url(#water-grad)" opacity="0.9" />
            <rect x="45" y="16" width="10" height="8" rx="2" fill="url(#cap-grad)" />
            <rect x="36" y="44" width="5" height="34" rx="2.5" fill="#ffffff" opacity="0.3" />
            <path d="M50 52 C50 52 45 57 45 60 C45 62.8 47.2 65 50 65 C52.8 65 55 62.8 55 60 C55 57 50 52 50 52 Z" fill="#ffffff" opacity="0.85" />
        </svg>`
    },
    {
        name: "un pack de 8 filtros a elección para tu equipo de regalo",
        wppText: "un pack de 8 filtros a elección para tu equipo de regalo",
        icon: `<svg viewBox="0 0 100 100" class="svg-3d">
            <defs>
                <linearGradient id="filter-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ffffff" />
                    <stop offset="100%" stop-color="#e2e8f0" />
                </linearGradient>
                <linearGradient id="filter-border" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#00b4d8" />
                    <stop offset="100%" stop-color="#0077b6" />
                </linearGradient>
            </defs>
            <g transform="translate(0, 5)">
                <rect x="35" y="18" width="42" height="28" rx="4" fill="url(#filter-grad)" stroke="url(#filter-border)" stroke-width="2" opacity="0.6" />
                <line x1="43" y1="23" x2="68" y2="41" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="2 2" />
                <rect x="27" y="28" width="42" height="28" rx="4" fill="url(#filter-grad)" stroke="url(#filter-border)" stroke-width="2" opacity="0.8" />
                <line x1="35" y1="33" x2="60" y2="51" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="2 2" />
                <rect x="18" y="38" width="42" height="28" rx="4" fill="url(#filter-grad)" stroke="url(#filter-border)" stroke-width="2" filter="drop-shadow(0 4px 10px rgba(0, 180, 216, 0.25))" />
                <line x1="26" y1="43" x2="51" y2="61" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="2 2" />
                <circle cx="55" cy="55" r="13" fill="#ffb703" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))" />
                <text x="55" y="60" font-family="'Outfit', sans-serif" font-weight="800" font-size="14" fill="#0d1b2a" text-anchor="middle">8</text>
            </g>
        </svg>`
    },
    {
        name: "un cupón de 10% adicional en la compra de tu próxima máscara",
        wppText: "un cupón de 10% adicional en la compra de mi próxima máscara",
        icon: `<svg viewBox="0 0 100 100" class="svg-3d">
            <defs>
                <linearGradient id="ticket-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ffb703" />
                    <stop offset="100%" stop-color="#fb8500" />
                </linearGradient>
            </defs>
            <g transform="rotate(-12 50 50)">
                <rect x="15" y="32" width="70" height="36" rx="6" fill="url(#ticket-grad)" filter="drop-shadow(0 6px 12px rgba(251,133,0,0.3))" />
                <circle cx="15" cy="50" r="5" fill="#e0f2fe" />
                <circle cx="85" cy="50" r="5" fill="#e0f2fe" />
                <line x1="30" y1="32" x2="30" y2="68" stroke="#ffffff" stroke-width="2" stroke-dasharray="3 3" />
                <text x="58" y="57" font-family="'Outfit', sans-serif" font-weight="800" font-size="18" fill="#ffffff" text-anchor="middle">10% OFF</text>
            </g>
        </svg>`
    },
    {
        name: "envío gratis a domicilio en tu próxima compra",
        wppText: "envío gratis a domicilio en mi próxima compra",
        icon: `<svg viewBox="0 0 100 100" class="svg-3d">
            <defs>
                <linearGradient id="truck-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#00b4d8" />
                    <stop offset="100%" stop-color="#0077b6" />
                </linearGradient>
                <linearGradient id="wheel-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#415a77" />
                    <stop offset="100%" stop-color="#1b263b" />
                </linearGradient>
            </defs>
            <rect x="18" y="28" width="44" height="32" rx="4" fill="url(#truck-grad)" filter="drop-shadow(0 4px 8px rgba(0,180,216,0.25))" />
            <path d="M 62 38 L 74 38 L 80 48 L 80 60 L 62 60 Z" fill="#e2effa" stroke="url(#truck-grad)" stroke-width="2" />
            <rect x="62" y="46" width="18" height="14" fill="url(#truck-grad)" />
            <path d="M 65 41 L 72 41 L 76 47 L 65 47 Z" fill="#ffffff" />
            <circle cx="32" cy="64" r="9" fill="url(#wheel-grad)" />
            <circle cx="32" cy="64" r="3.5" fill="#ffffff" />
            <circle cx="66" cy="64" r="9" fill="url(#wheel-grad)" />
            <circle cx="66" cy="64" r="3.5" fill="#ffffff" />
            <line x1="8" y1="36" x2="13" y2="36" stroke="#00b4d8" stroke-width="2" stroke-linecap="round" />
            <line x1="5" y1="44" x2="11" y2="44" stroke="#00b4d8" stroke-width="2" stroke-linecap="round" />
            <line x1="7" y1="52" x2="12" y2="52" stroke="#00b4d8" stroke-width="2" stroke-linecap="round" />
        </svg>`
    },
    {
        name: "una tubuladura de regalo junto a tu próxima compra",
        wppText: "una tubuladura de regalo junto a mi próxima compra",
        icon: `<svg viewBox="0 0 100 100" class="svg-3d">
            <defs>
                <linearGradient id="hose-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#bae6fd" />
                    <stop offset="100%" stop-color="#00b4d8" />
                </linearGradient>
                <linearGradient id="connector-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#0077b6" />
                    <stop offset="100%" stop-color="#0d1b2a" />
                </linearGradient>
            </defs>
            <path d="M 28 50 C 28 32, 72 32, 72 50 C 72 68, 32 68, 36 54 C 38 48, 62 48, 60 56" 
                  fill="none" stroke="url(#hose-grad)" stroke-width="7.5" stroke-linecap="round" stroke-dasharray="3.2 2" 
                  filter="drop-shadow(0 4px 8px rgba(0,180,216,0.25))" />
            <rect x="23" y="44" width="8" height="11" rx="2" transform="rotate(-15 27 50)" fill="url(#connector-grad)" />
            <rect x="56" y="51" width="8" height="11" rx="2" transform="rotate(30 60 56)" fill="url(#connector-grad)" />
        </svg>`
    }
];

// 3. ESTADOS DEL JUEGO
let currentQuestions = [];
let currentQuestionIdx = 0;
let lives = 3;
let timer = 45;
let timerInterval = null;
let selectedPrize = null;
let hasWaterBreak = false;

// 4. ELEMENTOS DEL DOM
const screens = {
    welcome: document.getElementById('screen-welcome'),
    rules: document.getElementById('screen-rules'),
    game: document.getElementById('screen-game'),
    waterBreak: document.getElementById('screen-water-break'),
    win: document.getElementById('screen-win'),
    lose: document.getElementById('screen-lose')
};

const dom = {
    // Welcome
    btnWelcomeNext: document.getElementById('btn-welcome-next'),
    
    // Rules
    btnStartGame: document.getElementById('btn-start-game'),
    
    // Game
    livesContainer: document.getElementById('game-lives'),
    shootoutProgress: document.getElementById('shootout-progress'),
    timerText: document.getElementById('timer-text'),
    timerCircle: document.getElementById('game-timer').querySelector('.timer-circle'),
    progressFill: document.getElementById('game-progress-fill'),
    progressBall: document.getElementById('game-progress-ball'),
    questionHeader: document.getElementById('question-header'),
    questionTitle: document.getElementById('question-title'),
    optionsList: document.getElementById('options-list'),
    
    // Feedback
    feedbackOverlay: document.getElementById('game-feedback'),
    correctState: document.getElementById('feedback-correct-state'),
    incorrectState: document.getElementById('feedback-incorrect-state'),
    errorTitle: document.getElementById('feedback-error-title'),
    errorText: document.getElementById('feedback-error-text'),
    feedbackHint: document.getElementById('feedback-hint'),
    btnFeedbackNext: document.getElementById('btn-feedback-next'),
    btnFeedbackRetry: document.getElementById('btn-feedback-retry'),
    
    // Water Break
    btnContinueLast: document.getElementById('btn-continue-last'),
    
    // Win
    prizeIconContainer: document.getElementById('prize-icon'),
    wonPrizeName: document.getElementById('won-prize-name'),
    wppStatusBadge: document.getElementById('wpp-status-badge'),
    wppStatusDot: document.getElementById('wpp-status-badge').querySelector('.status-dot'),
    wppStatusText: document.getElementById('wpp-status-text'),
    btnClaimWpp: document.getElementById('btn-claim-wpp'),
    shareInstagram: document.getElementById('share-instagram'),
    shareFacebook: document.getElementById('share-facebook'),
    
    // Lose
    btnRestartGame: document.getElementById('btn-restart-game')
};

// 5. EVENT LISTENERS Y CONFIGURACIÓN INICIAL
document.addEventListener('DOMContentLoaded', () => {
    initEvents();
    checkBusinessHours();
});

function initEvents() {
    // Navegación Welcome -> Rules
    dom.btnWelcomeNext.addEventListener('click', () => {
        showScreen('rules');
    });

    // Rules -> Start Game
    dom.btnStartGame.addEventListener('click', () => {
        startGame();
    });

    // Feedback Correct -> Next Question
    dom.btnFeedbackNext.addEventListener('click', () => {
        dom.feedbackOverlay.classList.add('d-none');
        dom.correctState.classList.add('d-none');
        handleFeedbackNext();
    });

    // Feedback Incorrect -> Retry Question
    dom.btnFeedbackRetry.addEventListener('click', () => {
        dom.feedbackOverlay.classList.add('d-none');
        dom.incorrectState.classList.add('d-none');
        handleFeedbackRetry();
    });

    // Water Break -> Last Question
    dom.btnContinueLast.addEventListener('click', () => {
        showScreen('game');
        loadQuestion(currentQuestionIdx);
    });

    // Restart game from Win or Lose
    dom.btnRestartGame.addEventListener('click', () => {
        resetGameState();
        showScreen('rules');
    });

    // Social Share buttons config
    dom.shareInstagram.addEventListener('click', (e) => {
        e.preventDefault();
        alert("¡Sacale una captura de pantalla a este logro y subila a tus historias de Instagram etiquetando a @totalsleep_arg!");
        window.open("https://www.instagram.com", "_blank");
    });

    dom.shareFacebook.addEventListener('click', (e) => {
        e.preventDefault();
        alert("¡Sacale una captura de pantalla a este logro y compartila en Facebook etiquetando a @totalsleep.arg!");
        window.open("https://www.facebook.com", "_blank");
    });
}

// 6. ENRUTADOR DE PANTALLAS
function showScreen(screenKey) {
    // Hide all
    Object.values(screens).forEach(screen => {
        screen.classList.add('d-none');
    });
    
    // Show target
    if (screens[screenKey]) {
        screens[screenKey].classList.remove('d-none');
    }
}

// 7. CONTROL DE FLUJO DEL JUEGO
function startGame() {
    resetGameState();
    
    // Seleccionar 3 preguntas aleatorias únicas (Fisher-Yates shuffle)
    const shuffled = [...QUESTION_BANK];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    currentQuestions = shuffled.slice(0, 3);
    
    showScreen('game');
    loadQuestion(0);
}

function resetGameState() {
    currentQuestions = [];
    currentQuestionIdx = 0;
    lives = 3;
    hasWaterBreak = false;
    selectedPrize = null;
    stopTimer();
    
    // Reset status UI
    updateLivesUI();
    resetShootoutUI();
}

function loadQuestion(idx) {
    currentQuestionIdx = idx;
    const question = currentQuestions[idx];
    
    // Update headers and text
    dom.questionHeader.innerText = `Pregunta ${idx + 1} de 3`;
    dom.questionTitle.innerText = question.text;
    
    // Render options
    dom.optionsList.innerHTML = '';
    const letters = ['A', 'B', 'C'];
    question.options.forEach((option, oIdx) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.innerHTML = `
            <span class="option-letter">${letters[oIdx]}</span>
            <span class="option-text">${option}</span>
        `;
        optionBtn.addEventListener('click', () => {
            selectOption(letters[oIdx]);
        });
        dom.optionsList.appendChild(optionBtn);
    });

    // Reset progress ball positioning
    const progressPercent = (idx / 3) * 100;
    dom.progressFill.style.width = `${progressPercent}%`;
    dom.progressBall.style.left = `${progressPercent}%`;

    // Highlight current shootout dot
    const dots = dom.shootoutProgress.querySelectorAll('.shootout-ball');
    dots.forEach((dot, dIdx) => {
        dot.classList.remove('current');
        if (dIdx === idx) {
            dot.className = 'shootout-ball current';
            dot.innerHTML = `<i class="fa-solid fa-futbol animate-bounce"></i>`;
        }
    });

    // Start 45s timer
    timer = 45;
    dom.timerText.innerText = timer;
    dom.timerCircle.classList.remove('timer-warning');
    startTimer();
}

// 8. MANEJO DEL TEMPORIZADOR
function startTimer() {
    stopTimer();
    timerInterval = setInterval(() => {
        timer--;
        dom.timerText.innerText = timer;
        
        if (timer <= 10) {
            dom.timerCircle.classList.add('timer-warning');
        }
        
        if (timer <= 0) {
            stopTimer();
            handleTimeout();
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// 9. EVENTOS AL RESPONDER
function selectOption(selectedLetter) {
    stopTimer();
    const question = currentQuestions[currentQuestionIdx];
    
    if (selectedLetter === question.correct) {
        // CORRECT (GOAL)
        handleCorrectAnswer();
    } else {
        // INCORRECT (MISS)
        handleWrongAnswer(false);
    }
}

function handleTimeout() {
    handleWrongAnswer(true);
}

function handleCorrectAnswer() {
    // Update shootout UI dot
    const dots = dom.shootoutProgress.querySelectorAll('.shootout-ball');
    const currentDot = dots[currentQuestionIdx];
    currentDot.className = 'shootout-ball goal';
    currentDot.innerHTML = `<i class="fa-solid fa-check"></i>`;

    // Progress line goal jump
    const nextPercent = ((currentQuestionIdx + 1) / 3) * 100;
    dom.progressFill.style.width = `${nextPercent}%`;
    dom.progressBall.style.left = `${nextPercent}%`;

    // Show Goal screen modal
    dom.feedbackOverlay.classList.remove('d-none');
    dom.correctState.classList.remove('d-none');
    
    // Play soccer cheering or animation effects if browser allows.
    // CSS animations do the goal net trick.
}

function handleWrongAnswer(isTimeout = false) {
    lives--;
    updateLivesUI();
    
    // Show fail feedback modal
    dom.feedbackOverlay.classList.remove('d-none');
    dom.incorrectState.classList.remove('d-none');
    
    // Setup text
    if (isTimeout) {
        dom.errorTitle.innerHTML = '¡Se acabó el tiempo! ⏱️';
        dom.errorText.innerText = 'El silbato sonó antes de patear. ¡Perdiste una vida!';
    } else {
        dom.errorTitle.innerHTML = '¡El remate dio en el palo! 🧤';
        dom.errorText.innerText = 'El arquero desvió tu penal. ¡Pero tenés revancha!';
    }
    
    // Set hint
    const question = currentQuestions[currentQuestionIdx];
    dom.feedbackHint.innerText = question.hint;

    if (lives <= 0) {
        // Red card / Lose state
        dom.btnFeedbackRetry.classList.add('d-none'); // Hide retry question
        
        // Wait, if lives are zero, the popup should show "Ver Resultados de la trivia"
        // so they go to the Lose screen. Let's redirect them to Lose Screen on next click.
        // We will repurpose the retry button to go to Lose Screen
        dom.btnFeedbackRetry.className = 'btn btn-primary';
        dom.btnFeedbackRetry.innerHTML = 'Ver Resultados <i class="fa-solid fa-arrow-right"></i>';
        dom.btnFeedbackRetry.classList.remove('d-none');
        
        // Temporarily change the click behavior of retry button
        dom.btnFeedbackRetry.onclick = () => {
            dom.feedbackOverlay.classList.add('d-none');
            dom.incorrectState.classList.add('d-none');
            // Restore regular onclick behavior
            dom.btnFeedbackRetry.onclick = null;
            triggerLose();
        };
    } else {
        // User can retry the same question
        dom.btnFeedbackRetry.className = 'btn btn-primary';
        dom.btnFeedbackRetry.innerHTML = 'Volver a patear <i class="fa-solid fa-rotate-left"></i>';
        dom.btnFeedbackRetry.classList.remove('d-none');
        
        // Update current shootout dot to look warning/miss
        const dots = dom.shootoutProgress.querySelectorAll('.shootout-ball');
        const currentDot = dots[currentQuestionIdx];
        currentDot.className = 'shootout-ball miss';
        currentDot.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }
}

// 10. BOTONES DE FEEDBACK ACCION
function handleFeedbackNext() {
    currentQuestionIdx++;
    
    if (currentQuestionIdx === 2 && !hasWaterBreak) {
        hasWaterBreak = true;
        showScreen('waterBreak');
    } else if (currentQuestionIdx < 3) {
        loadQuestion(currentQuestionIdx);
    } else {
        triggerWin();
    }
}

function handleFeedbackRetry() {
    // Restore the current dot styling back to active
    const dots = dom.shootoutProgress.querySelectorAll('.shootout-ball');
    const currentDot = dots[currentQuestionIdx];
    currentDot.className = 'shootout-ball current';
    currentDot.innerHTML = `<i class="fa-solid fa-futbol animate-bounce"></i>`;
    
    loadQuestion(currentQuestionIdx);
}

// 11. ACTUALIZACIONES DE INTERFAZ DE ESTADO
function updateLivesUI() {
    const hearts = dom.livesContainer.querySelectorAll('.heart');
    hearts.forEach((heart, hIdx) => {
        if (hIdx < lives) {
            heart.className = 'heart active';
            heart.innerHTML = `<i class="fa-solid fa-heart"></i>`;
        } else {
            heart.className = 'heart';
            heart.innerHTML = `<i class="fa-regular fa-heart"></i>`;
        }
    });
}

function resetShootoutUI() {
    const dots = dom.shootoutProgress.querySelectorAll('.shootout-ball');
    dots.forEach(dot => {
        dot.className = 'shootout-ball';
        dot.innerHTML = `<i class="fa-regular fa-circle"></i>`;
    });
}

// 12. PANTALLAS FINALES
function triggerWin() {
    // Sorteo aleatorio de premio
    const randomIdx = Math.floor(Math.random() * PRIZE_POOL.length);
    selectedPrize = PRIZE_POOL[randomIdx];
    
    // Render name and icon
    dom.wonPrizeName.innerText = selectedPrize.name.toUpperCase();
    dom.prizeIconContainer.innerHTML = selectedPrize.icon;
    
    // Check WhatsApp schedule
    const isWppOpen = checkBusinessHours();
    
    // Setup WhatsApp claim link
    // Number: 1137776158 (Argentina prefix 5491137776158)
    const baseText = `Hola, me gané ${selectedPrize.wppText} y me gustaría canjearlo.`;
    const wppUrl = `https://wa.me/5491137776158?text=${encodeURIComponent(baseText)}`;
    dom.btnClaimWpp.setAttribute('href', wppUrl);
    
    showScreen('win');
}

function triggerLose() {
    showScreen('lose');
}

// 13. DYNAMIC BUSINESS HOURS CHECK
function checkBusinessHours() {
    // Commercial schedule: Mon-Fri from 10:00 to 20:00
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hours = now.getHours();
    
    const isWeekday = (day >= 1 && day <= 5);
    const isWorkingHour = (hours >= 10 && hours < 20);
    const isOpen = isWeekday && isWorkingHour;
    
    if (dom.wppStatusBadge) {
        if (isOpen) {
            dom.wppStatusDot.className = 'status-dot active';
            dom.wppStatusText.innerText = "WhatsApp Activo (Canje Inmediato)";
        } else {
            dom.wppStatusDot.className = 'status-dot inactive';
            dom.wppStatusText.innerText = "WhatsApp Cerrado (Respondemos de Lun a Vie de 10 a 20 hs)";
        }
    }
    
    return isOpen;
}
