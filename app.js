"use strict";

const STORAGE_KEY = "taiChiFacileStateV1";
const SETTINGS_KEY = "taiChiFacileSettingsV1";

const routines = [
  {
    id: "risveglio",
    title: "Risveglio dolce",
    minutes: 7,
    level: "Principiante",
    type: ["standing"],
    icon: "☀️",
    color: "#dcebe5",
    description: "Riattiva il corpo con respiro, postura e movimenti ampi ma facili.",
    moves: [
      ["Radicamento", "Piedi paralleli e ginocchia morbide. Lascia scendere le spalle.", "Respira naturalmente", "Stabilità", 50, "move-root"],
      ["Aprire il respiro", "Solleva lentamente le braccia davanti a te e lasciale ridiscendere.", "Inspira salendo, espira scendendo", "Respiro", 70, "move-open"],
      ["Nuvole lente", "Sposta le mani da un lato all’altro come se accompagnassi una nuvola.", "Espira durante il cambio lato", "Mobilità", 80, "move-cloud"],
      ["Trasferimento del peso", "Porta il peso a destra e a sinistra senza staccare i piedi.", "Respira senza trattenere", "Equilibrio", 80, "move-shift"],
      ["Spingere l’aria", "Porta i palmi in avanti con dolcezza, poi ritorna al petto.", "Espira mentre spingi", "Energia", 75, "move-push"],
      ["Ritorno al centro", "Avvicina le mani all’addome e resta fermo per alcuni respiri.", "Respira lento e regolare", "Calma", 65, "move-root"]
    ]
  },
  {
    id: "cinque",
    title: "5 minuti per ripartire",
    minutes: 5,
    level: "Facile",
    type: ["standing", "relax"],
    icon: "⏱️",
    color: "#ebe2cf",
    description: "Una pausa breve per sciogliere tensioni e recuperare concentrazione.",
    moves: [
      ["Postura comoda", "Allunga la schiena senza irrigidirti. Guarda avanti.", "Tre respiri tranquilli", "Postura", 40, "move-root"],
      ["Sollevare e abbassare", "Le mani salgono fino al petto e tornano lentamente lungo i fianchi.", "Inspira su, espira giù", "Respiro", 65, "move-open"],
      ["Dondolio controllato", "Sposta poco il peso da una gamba all’altra.", "Respira in modo continuo", "Equilibrio", 65, "move-shift"],
      ["Allontanare la tensione", "Spingi dolcemente i palmi in avanti, senza bloccare i gomiti.", "Espira mentre allontani", "Rilascio", 65, "move-push"],
      ["Chiusura", "Mani sull’addome. Nota il ritmo del respiro.", "Lento e naturale", "Calma", 65, "move-root"]
    ]
  },
  {
    id: "equilibrio",
    title: "Equilibrio stabile",
    minutes: 10,
    level: "Principiante",
    type: ["standing"],
    icon: "⚖️",
    color: "#d8e6ef",
    description: "Allenamento dolce del trasferimento del peso con un appoggio vicino.",
    moves: [
      ["Base stabile", "Apri i piedi quanto le spalle. Tieni una sedia vicina se serve.", "Respira naturalmente", "Sicurezza", 60, "move-root"],
      ["Peso a destra e sinistra", "Sposta il bacino di pochi centimetri, senza inclinare il busto.", "Espira nel passaggio", "Equilibrio", 110, "move-shift"],
      ["Passo vuoto", "Alleggerisci un piede senza sollevarlo completamente.", "Non trattenere il respiro", "Controllo", 105, "move-shift"],
      ["Mani come nuvole", "Le mani guidano il cambio di peso da un lato all’altro.", "Inspira al centro", "Coordinazione", 115, "move-cloud"],
      ["Spinta morbida", "Porta il peso appena avanti mentre i palmi spingono l’aria.", "Espira in avanti", "Stabilità", 105, "move-push"],
      ["Ritorno neutro", "Ritrova il peso al centro e rilassa le caviglie.", "Tre respiri lenti", "Calma", 105, "move-root"]
    ]
  },
  {
    id: "sera",
    title: "Calma della sera",
    minutes: 12,
    level: "Rilassante",
    type: ["standing", "relax"],
    icon: "🌙",
    color: "#e5def0",
    description: "Movimenti lenti e respirazione per lasciare andare la giornata.",
    moves: [
      ["Lasciare il peso", "Senti entrambi i piedi appoggiati. Ammorbidisci il viso.", "Espira più a lungo", "Presenza", 80, "move-root"],
      ["Raccogliere il respiro", "Le mani salgono aperte e si avvicinano al petto.", "Inspira salendo", "Respiro", 125, "move-open"],
      ["Onde tranquille", "Muovi le braccia lentamente da un lato all’altro.", "Espira nel movimento", "Rilassamento", 130, "move-cloud"],
      ["Spinta lenta", "Allontana i palmi senza forza e lasciali tornare.", "Espira, poi inspira tornando", "Rilascio", 125, "move-push"],
      ["Dondolio minimo", "Oscilla appena, come un albero mosso da una brezza leggera.", "Respira senza sforzo", "Calma", 130, "move-root"],
      ["Quiete", "Rimani fermo con le mani sull’addome e gli occhi socchiusi.", "Conta quattro entrando e sei uscendo", "Recupero", 130, "move-root"]
    ]
  },
  {
    id: "sedia",
    title: "Tai Chi da seduti",
    minutes: 8,
    level: "Mobilità dolce",
    type: ["seated", "relax"],
    icon: "🪑",
    color: "#f0ded7",
    description: "Per giornate difficili o per chi preferisce una base più stabile.",
    moves: [
      ["Seduta stabile", "Siediti verso il bordo della sedia, piedi ben appoggiati e schiena lunga.", "Respira naturalmente", "Postura", 60, "move-seated"],
      ["Aprire il petto", "Porta le mani verso l’esterno senza forzare le spalle.", "Inspira aprendo", "Mobilità", 80, "move-seated move-open"],
      ["Nuvole da seduti", "Accompagna le mani da un lato all’altro e ruota poco il busto.", "Espira nel cambio lato", "Coordinazione", 95, "move-seated move-cloud"],
      ["Spinta dei palmi", "Spingi l’aria davanti a te e ritorna lentamente.", "Espira spingendo", "Energia", 85, "move-seated move-push"],
      ["Sollevare i talloni", "Solleva un tallone alla volta mantenendo le punte a terra.", "Respira continuo", "Caviglie", 90, "move-seated move-shift"],
      ["Chiusura calma", "Appoggia le mani sulle cosce e nota il corpo più disteso.", "Tre respiri lenti", "Calma", 70, "move-seated"]
    ]
  },
  {
    id: "energia",
    title: "Energia e postura",
    minutes: 15,
    level: "Facile progressivo",
    type: ["standing"],
    icon: "⚡",
    color: "#f1e4b9",
    description: "Una pratica completa ma accessibile per postura, mobilità e presenza.",
    moves: [
      ["Radici", "Piedi saldi, ginocchia libere e sommità del capo verso l’alto.", "Respira naturale", "Postura", 75, "move-root"],
      ["Aprire e chiudere", "Le braccia si aprono con calma e tornano davanti al petto.", "Inspira aprendo", "Respiro", 115, "move-open"],
      ["Trasferire il peso", "Passa lentamente da destra a sinistra senza oscillare con la testa.", "Espira nel passaggio", "Equilibrio", 120, "move-shift"],
      ["Nuvole", "Le mani seguono un percorso morbido all’altezza del petto.", "Respira fluido", "Coordinazione", 125, "move-cloud"],
      ["Spingere e tornare", "Palmi avanti, gomiti morbidi, poi ritorno al centro.", "Espira avanti", "Energia", 120, "move-push"],
      ["Cerchi piccoli", "Disegna piccoli cerchi con le mani, senza sollevare le spalle.", "Respira continuo", "Mobilità", 115, "move-cloud"],
      ["Passo controllato", "Alleggerisci un piede e appoggialo poco più avanti, vicino al sostegno.", "Non avere fretta", "Stabilità", 115, "move-shift"],
      ["Raccogliere", "Riporta i piedi paralleli e le mani verso l’addome.", "Espira lentamente", "Centro", 115, "move-root"]
    ]
  }
];

const defaultSettings = { voice: true, vibration: true, reducedMotion: false, voiceRate: 0.9, safetySeen: false };
const defaultState = { sessions: [], bestStreak: 0, lastRoutine: "risveglio" };

let settings = loadJSON(SETTINGS_KEY, defaultSettings);
let state = loadJSON(STORAGE_KEY, defaultState);
let currentScreen = "home";
let currentRoutine = null;
let currentMoveIndex = 0;
let moveSecondsLeft = 0;
let moveDuration = 0;
let timerId = null;
let isPaused = false;
let deferredInstallPrompt = null;
let confirmCallback = null;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function loadJSON(key, fallback) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key));
    return parsed && typeof parsed === "object" ? { ...fallback, ...parsed } : { ...fallback };
  } catch {
    return { ...fallback };
  }
}

function saveAll() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function localDateKey(date = new Date()) {
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
}

function addDays(date, amount) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + amount);
  return copy;
}

function sessionsByDate() {
  return state.sessions.reduce((acc, session) => {
    (acc[session.date] ||= []).push(session);
    return acc;
  }, {});
}

function calculateStreak() {
  const dates = new Set(state.sessions.map(s => s.date));
  if (!dates.size) return 0;
  const today = new Date();
  let cursor = dates.has(localDateKey(today)) ? today : addDays(today, -1);
  let streak = 0;
  while (dates.has(localDateKey(cursor))) {
    streak += 1;
    cursor = addDays(cursor, -1);
  }
  return streak;
}

function renderHome() {
  const recommended = getRecommendedRoutine();
  $("#todayRoutineTitle").textContent = recommended.title;
  $("#todayRoutineMeta").textContent = `${recommended.minutes} minuti · ${recommended.level}`;
  $("#startTodayBtn").dataset.routineId = recommended.id;

  const quickIds = ["cinque", "equilibrio", "sedia", "sera"];
  $("#quickRoutineGrid").innerHTML = quickIds.map(id => {
    const r = routines.find(item => item.id === id);
    return `<button class="quick-card" data-routine-id="${r.id}" style="--card-color:${r.color}">
      <span>${r.minutes} minuti</span><strong>${r.title}</strong><small>${r.icon} ${r.level}</small>
    </button>`;
  }).join("");

  const streak = calculateStreak();
  $("#streakCount").textContent = streak;
  const byDate = sessionsByDate();
  const dayNames = ["L", "M", "M", "G", "V", "S", "D"];
  const today = new Date();
  const mondayOffset = (today.getDay() + 6) % 7;
  const monday = addDays(today, -mondayOffset);
  $("#weekStrip").innerHTML = dayNames.map((name, index) => {
    const d = addDays(monday, index);
    const key = localDateKey(d);
    const classes = [byDate[key]?.length ? "done" : "", key === localDateKey(today) ? "today" : ""].filter(Boolean).join(" ");
    return `<div class="day-dot ${classes}"><span>${name}</span><i>${d.getDate()}</i></div>`;
  }).join("");
  const weekCount = Object.keys(byDate).filter(key => {
    const d = new Date(`${key}T12:00:00`);
    return d >= monday && d <= addDays(monday, 6);
  }).length;
  $("#weeklyMessage").textContent = weekCount === 0 ? "Anche cinque minuti contano." : weekCount < 3 ? "Ottimo inizio: mantieni un ritmo comodo." : "Stai costruendo una buona abitudine.";
}

function getRecommendedRoutine() {
  const hour = new Date().getHours();
  if (hour >= 20) return routines.find(r => r.id === "sera");
  if (state.lastRoutine === "sedia") return routines.find(r => r.id === "sedia");
  return routines.find(r => r.id === "risveglio");
}

function renderRoutines(filter = "all") {
  const visible = filter === "all" ? routines : routines.filter(r => r.type.includes(filter));
  $("#routineList").innerHTML = visible.map(r => `<button class="routine-card" data-routine-id="${r.id}">
    <span class="routine-art" style="--art-color:${r.color}">${r.icon}</span>
    <span class="routine-copy"><strong>${r.title}</strong><span>${r.minutes} min · ${r.level}<br>${r.description}</span></span>
    <span class="routine-arrow">›</span>
  </button>`).join("");
}

function renderProgress() {
  const totalMinutes = Math.round(state.sessions.reduce((sum, s) => sum + Number(s.minutes || 0), 0));
  const streak = calculateStreak();
  state.bestStreak = Math.max(Number(state.bestStreak || 0), streak);
  saveAll();
  $("#totalSessions").textContent = state.sessions.length;
  $("#totalMinutes").textContent = totalMinutes;
  $("#bestStreak").textContent = state.bestStreak;

  const days = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i - 6));
  const totals = days.map(day => state.sessions.filter(s => s.date === localDateKey(day)).reduce((sum, s) => sum + Number(s.minutes || 0), 0));
  const max = Math.max(15, ...totals);
  const formatter = new Intl.DateTimeFormat("it-IT", { weekday: "short" });
  $("#barChart").innerHTML = days.map((day, i) => `<div class="bar-column" title="${totals[i]} minuti"><div style="height:${Math.max(4, (totals[i] / max) * 100)}%"></div><span>${formatter.format(day).slice(0,2)}</span></div>`).join("");

  const achievements = [
    ["🌱", "Primo passo", "Completa la prima sessione", state.sessions.length >= 1],
    ["🔥", "Tre giorni", "Pratica per tre giorni di fila", state.bestStreak >= 3],
    ["🧘", "Un’ora per te", "Raggiungi 60 minuti totali", totalMinutes >= 60],
    ["🏆", "Dieci sessioni", "Completa dieci pratiche", state.sessions.length >= 10]
  ];
  $("#achievementList").innerHTML = achievements.map(a => `<article class="achievement ${a[3] ? "" : "locked"}"><span class="achievement-icon">${a[0]}</span><span><strong>${a[1]}</strong><small>${a[2]}</small></span></article>`).join("");
}

function renderSettings() {
  $("#voiceToggle").checked = settings.voice;
  $("#vibrationToggle").checked = settings.vibration;
  $("#motionToggle").checked = settings.reducedMotion;
  $("#voiceRate").value = String(settings.voiceRate);
  document.body.classList.toggle("reduced-motion", settings.reducedMotion);
  $("#soundBtn").textContent = settings.voice ? "🔊" : "🔇";
  $("#soundBtn").setAttribute("aria-pressed", String(settings.voice));
}

function showScreen(name, options = {}) {
  currentScreen = name;
  $$(".screen").forEach(screen => screen.classList.toggle("active", screen.dataset.screen === name));
  $$(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.nav === name));
  const special = ["session", "completion"].includes(name);
  document.body.classList.toggle("session-active", special);
  $("#bottomNav").hidden = special;
  $("#soundBtn").classList.toggle("hidden", special);
  $("#backBtn").classList.toggle("hidden", !options.back);
  const titles = {
    home: ["Il tuo momento", "Tai Chi Facile"],
    routines: ["Scegli con calma", "Le tue routine"],
    progress: ["Un passo alla volta", "I tuoi progressi"],
    settings: ["Personalizza", "Impostazioni"]
  };
  if (titles[name]) {
    $("#headerEyebrow").textContent = titles[name][0];
    $("#headerTitle").textContent = titles[name][1];
  }
  if (name === "home") renderHome();
  if (name === "routines") renderRoutines($(".filter-chip.active")?.dataset.filter || "all");
  if (name === "progress") renderProgress();
  if (name === "settings") renderSettings();
  window.scrollTo({ top: 0, behavior: settings.reducedMotion ? "auto" : "smooth" });
}

function startRoutine(routineId) {
  const routine = routines.find(r => r.id === routineId);
  if (!routine) return;
  currentRoutine = routine;
  currentMoveIndex = 0;
  state.lastRoutine = routine.id;
  saveAll();
  showScreen("session");
  loadMove(0);
}

function loadMove(index) {
  if (!currentRoutine) return;
  if (index >= currentRoutine.moves.length) return finishSession();
  if (index < 0) index = 0;
  currentMoveIndex = index;
  const move = currentRoutine.moves[index];
  const [title, instruction, breath, focus, seconds, movementClass] = move;
  moveDuration = seconds;
  moveSecondsLeft = seconds;
  isPaused = false;
  clearInterval(timerId);

  $("#sessionStepLabel").textContent = `Movimento ${index + 1} di ${currentRoutine.moves.length}`;
  $("#sessionProgress").style.width = `${(index / currentRoutine.moves.length) * 100}%`;
  $("#movementTitle").textContent = title;
  $("#movementInstruction").textContent = instruction;
  $("#movementFocus").textContent = focus;
  $("#breathText").textContent = breath;
  $("#pauseIcon").textContent = "Ⅱ";
  $("#pauseLabel").textContent = "Pausa";
  $("#movementStage").className = `movement-stage ${movementClass}`;
  updateTimerUI();
  signalChange();
  speak(`${title}. ${instruction}. ${breath}.`);
  timerId = setInterval(tick, 1000);
}

function tick() {
  if (isPaused) return;
  moveSecondsLeft -= 1;
  updateTimerUI();
  if (moveSecondsLeft <= 0) loadMove(currentMoveIndex + 1);
}

function updateTimerUI() {
  const minutes = Math.floor(moveSecondsLeft / 60);
  const seconds = moveSecondsLeft % 60;
  $("#timerText").textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  const circumference = 326.73;
  const ratio = moveDuration ? moveSecondsLeft / moveDuration : 0;
  $("#timerCircle").style.strokeDashoffset = String(circumference * (1 - ratio));
  const totalElapsed = currentRoutine.moves.slice(0, currentMoveIndex).reduce((sum, m) => sum + m[4], 0) + (moveDuration - moveSecondsLeft);
  const totalDuration = currentRoutine.moves.reduce((sum, m) => sum + m[4], 0);
  $("#sessionProgress").style.width = `${Math.min(100, (totalElapsed / totalDuration) * 100)}%`;
}

function togglePause() {
  isPaused = !isPaused;
  $("#pauseIcon").textContent = isPaused ? "▶" : "Ⅱ";
  $("#pauseLabel").textContent = isPaused ? "Riprendi" : "Pausa";
  if (isPaused) window.speechSynthesis?.cancel();
  else speak("Riprendiamo con calma.");
}

function signalChange() {
  if (settings.vibration && navigator.vibrate) navigator.vibrate(80);
}

function speak(text) {
  if (!settings.voice || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "it-IT";
  utterance.rate = Number(settings.voiceRate || 0.9);
  utterance.pitch = 0.95;
  window.speechSynthesis.speak(utterance);
}

function finishSession() {
  clearInterval(timerId);
  window.speechSynthesis?.cancel();
  const actualMinutes = currentRoutine.minutes;
  state.sessions.push({ date: localDateKey(), minutes: actualMinutes, routineId: currentRoutine.id, mood: null, completedAt: new Date().toISOString() });
  state.bestStreak = Math.max(Number(state.bestStreak || 0), calculateStreak());
  saveAll();
  $("#completionText").textContent = `${actualMinutes} minuti di movimento lento e consapevole.`;
  $("#completionMinutes").textContent = actualMinutes;
  $("#completionStreak").textContent = calculateStreak();
  $$(".mood-picker button").forEach(btn => btn.classList.remove("selected"));
  showScreen("completion");
  speak("Sessione completata. Hai scelto di prenderti cura di te.");
}

function exitSession() {
  clearInterval(timerId);
  window.speechSynthesis?.cancel();
  showConfirm("Interrompere la sessione?", "I progressi di questa sessione non verranno registrati.", () => showScreen("home"));
}

function showConfirm(title, text, action) {
  $("#confirmTitle").textContent = title;
  $("#confirmText").textContent = text;
  confirmCallback = action;
  $("#confirmDialog").showModal();
}

function applyMood(value, button) {
  const last = state.sessions[state.sessions.length - 1];
  if (last) last.mood = Number(value);
  saveAll();
  $$(".mood-picker button").forEach(btn => btn.classList.toggle("selected", btn === button));
}

function bindEvents() {
  document.addEventListener("click", event => {
    const nav = event.target.closest("[data-nav]");
    if (nav) showScreen(nav.dataset.nav);
    const routine = event.target.closest("[data-routine-id]");
    if (routine) startRoutine(routine.dataset.routineId);
  });

  $("#filterRow").addEventListener("click", event => {
    const chip = event.target.closest(".filter-chip");
    if (!chip) return;
    $$(".filter-chip").forEach(btn => btn.classList.toggle("active", btn === chip));
    renderRoutines(chip.dataset.filter);
  });

  $("#pauseBtn").addEventListener("click", togglePause);
  $("#prevMoveBtn").addEventListener("click", () => loadMove(currentMoveIndex - 1));
  $("#nextMoveBtn").addEventListener("click", () => loadMove(currentMoveIndex + 1));
  $("#exitSessionBtn").addEventListener("click", exitSession);
  $("#finishBtn").addEventListener("click", () => showScreen("home"));
  $("#backBtn").addEventListener("click", () => showScreen("home"));
  $("#soundBtn").addEventListener("click", () => {
    settings.voice = !settings.voice;
    saveAll();
    renderSettings();
    if (!settings.voice) window.speechSynthesis?.cancel();
    else speak("Guida vocale attiva.");
  });

  $("#voiceToggle").addEventListener("change", event => { settings.voice = event.target.checked; saveAll(); renderSettings(); });
  $("#vibrationToggle").addEventListener("change", event => { settings.vibration = event.target.checked; saveAll(); });
  $("#motionToggle").addEventListener("change", event => { settings.reducedMotion = event.target.checked; saveAll(); renderSettings(); });
  $("#voiceRate").addEventListener("change", event => { settings.voiceRate = Number(event.target.value); saveAll(); speak("Questa è la nuova velocità della voce."); });

  $("#openSafetyBtn").addEventListener("click", () => {
    $("#safetyAccepted").checked = false;
    $("#acceptSafetyBtn").disabled = true;
    $("#safetyDialog").showModal();
  });
  $("#safetyAccepted").addEventListener("change", event => { $("#acceptSafetyBtn").disabled = !event.target.checked; });
  $("#acceptSafetyBtn").addEventListener("click", () => { settings.safetySeen = true; saveAll(); });

  $("#resetProgressBtn").addEventListener("click", () => showConfirm("Azzerare i progressi?", "Verranno eliminati sessioni, minuti e traguardi da questo dispositivo.", () => {
    state = { ...defaultState, sessions: [] };
    saveAll();
    renderProgress();
  }));
  $("#confirmActionBtn").addEventListener("click", () => {
    if (typeof confirmCallback === "function") confirmCallback();
    confirmCallback = null;
  });

  $$(".mood-picker button").forEach(btn => btn.addEventListener("click", () => applyMood(btn.dataset.mood, btn)));

  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredInstallPrompt = event;
    $("#installBtn").hidden = false;
  });
  $("#installBtn").addEventListener("click", async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
    } else {
      alert("Apri il menu del browser e scegli “Installa app” oppure “Aggiungi a schermata Home”.");
    }
  });
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }
}

function init() {
  bindEvents();
  renderSettings();
  showScreen("home");
  registerServiceWorker();
  if (!settings.safetySeen) {
    setTimeout(() => $("#safetyDialog").showModal(), 300);
  }
}

document.addEventListener("DOMContentLoaded", init);
