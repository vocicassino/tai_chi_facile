"use strict";

const STORAGE_KEY = "taiChiFacileStateV13";
const SETTINGS_KEY = "taiChiFacileSettingsV13";
const SESSION_TARGET = 30;

const routines = [
  {
    id: "risveglio",
    title: "INIZIO SEMPLICE: TAI CHI",
    shortTitle: "Risveglio dolce",
    minutes: 5,
    level: "Principiante",
    type: ["standing", "short"],
    description: "Personalizzato apposta per te",
    image: "assets/img/hero.png",
    moves: [
      ["Radicamento", "Piedi paralleli e ginocchia morbide. Lascia scendere le spalle.", "Respira naturalmente", "POSTURA", 45, "move-root"],
      ["Aprire il respiro", "Solleva lentamente le braccia davanti a te e lasciale ridiscendere.", "Inspira salendo, espira scendendo", "RESPIRO", 55, "move-open"],
      ["Nuvole lente", "Sposta le mani da un lato all'altro come se accompagnassi una nuvola.", "Espira durante il cambio lato", "FLUIDITÀ", 55, "move-cloud"],
      ["Trasferimento del peso", "Porta il peso a destra e a sinistra senza staccare i piedi.", "Respira senza trattenere", "EQUILIBRIO", 55, "move-shift"],
      ["Spingere l'aria", "Porta i palmi in avanti con dolcezza, poi ritorna al petto.", "Espira mentre spingi", "ENERGIA", 50, "move-push"]
    ]
  },
  {
    id: "cinque",
    title: "5 minuti per ripartire",
    shortTitle: "5 minuti per ripartire",
    minutes: 5,
    level: "Facile",
    type: ["standing", "short", "relax"],
    description: "Una pausa breve per sciogliere tensioni e recuperare concentrazione.",
    image: "assets/img/opening.png",
    moves: [
      ["Postura comoda", "Allunga la schiena senza irrigidirti. Guarda avanti.", "Tre respiri tranquilli", "POSTURA", 40, "move-root"],
      ["Sollevare e abbassare", "Le mani salgono fino al petto e tornano lentamente lungo i fianchi.", "Inspira su, espira giù", "RESPIRA", 60, "move-open"],
      ["Dondolio controllato", "Sposta poco il peso da una gamba all'altra.", "Respira in modo continuo", "EQUILIBRIO", 60, "move-shift"],
      ["Allontanare la tensione", "Spingi dolcemente i palmi in avanti, senza bloccare i gomiti.", "Espira mentre allontani", "RILASCIO", 60, "move-push"],
      ["Chiusura", "Mani sull'addome. Nota il ritmo del respiro.", "Lento e naturale", "CALMA", 60, "move-root"]
    ]
  },
  {
    id: "equilibrio",
    title: "Equilibrio stabile",
    shortTitle: "Equilibrio stabile",
    minutes: 10,
    level: "Principiante",
    type: ["standing"],
    description: "Allenamento dolce del trasferimento del peso con un appoggio vicino.",
    image: "assets/img/shift.png",
    moves: [
      ["Base stabile", "Apri i piedi quanto le spalle. Tieni una sedia vicina se serve.", "Respira naturalmente", "SICUREZZA", 60, "move-root"],
      ["Peso a destra e sinistra", "Sposta il bacino di pochi centimetri, senza inclinare il busto.", "Espira nel passaggio", "EQUILIBRIO", 100, "move-shift"],
      ["Passo vuoto", "Alleggerisci un piede senza sollevarlo completamente.", "Non trattenere il respiro", "CONTROLLO", 95, "move-shift"],
      ["Mani come nuvole", "Le mani guidano il cambio di peso da un lato all'altro.", "Inspira al centro", "COORDINAZIONE", 100, "move-cloud"],
      ["Spinta morbida", "Porta il peso appena avanti mentre i palmi spingono l'aria.", "Espira in avanti", "STABILITÀ", 90, "move-push"],
      ["Ritorno neutro", "Ritrova il peso al centro e rilassa le caviglie.", "Tre respiri lenti", "CALMA", 90, "move-root"]
    ]
  },
  {
    id: "sera",
    title: "Calma della sera",
    shortTitle: "Calma della sera",
    minutes: 12,
    level: "Rilassante",
    type: ["standing", "relax"],
    description: "Movimenti lenti e respirazione per lasciare andare la giornata.",
    image: "assets/img/rooted.png",
    moves: [
      ["Lasciare il peso", "Senti entrambi i piedi appoggiati. Ammorbidisci il viso.", "Espira più a lungo", "PRESENZA", 70, "move-root"],
      ["Raccogliere il respiro", "Le mani salgono aperte e si avvicinano al petto.", "Inspira salendo", "RESPIRO", 110, "move-open"],
      ["Onde tranquille", "Muovi le braccia lentamente da un lato all'altro.", "Espira nel movimento", "RILASSAMENTO", 110, "move-cloud"],
      ["Spinta lenta", "Allontana i palmi senza forza e lasciali tornare.", "Espira, poi inspira tornando", "RILASCIO", 110, "move-push"],
      ["Quiete", "Rimani fermo con le mani sull'addome e gli occhi socchiusi.", "Conta quattro entrando e sei uscendo", "RECUPERO", 100, "move-root"]
    ]
  },
  {
    id: "sedia",
    title: "TAI CHI DA SEDIA",
    shortTitle: "Tai Chi da seduti",
    minutes: 8,
    level: "Mobilità dolce",
    type: ["seated", "relax"],
    description: "Per giornate difficili o per chi preferisce una base più stabile.",
    image: "assets/img/seated.png",
    moves: [
      ["Seduta stabile", "Siediti verso il bordo della sedia, piedi ben appoggiati e schiena lunga.", "Respira naturalmente", "POSTURA", 60, "move-seated"],
      ["Aprire il petto", "Porta le mani verso l'esterno senza forzare le spalle.", "Inspira aprendo", "MOBILITÀ", 80, "move-seated-open"],
      ["Nuvole da seduti", "Accompagna le mani da un lato all'altro e ruota poco il busto.", "Espira nel cambio lato", "COORDINAZIONE", 80, "move-seated-cloud"],
      ["Spinta dei palmi", "Spingi l'aria davanti a te e ritorna lentamente.", "Espira spingendo", "ENERGIA", 80, "move-seated-push"],
      ["Sollevare i talloni", "Solleva un tallone alla volta mantenendo le punte a terra.", "Respira continuo", "CAVIGLIE", 80, "move-seated-shift"],
      ["Chiusura calma", "Appoggia le mani sulle cosce e nota il corpo più disteso.", "Tre respiri lenti", "CALMA", 70, "move-seated"]
    ]
  },
  {
    id: "energia",
    title: "Energia e postura",
    shortTitle: "Energia e postura",
    minutes: 15,
    level: "Facile progressivo",
    type: ["standing"],
    description: "Una pratica completa ma accessibile per postura, mobilità e presenza.",
    image: "assets/img/push.png",
    moves: [
      ["Radici", "Piedi saldi, ginocchia libere e sommità del capo verso l'alto.", "Respira naturale", "POSTURA", 70, "move-root"],
      ["Aprire e chiudere", "Le braccia si aprono con calma e tornano davanti al petto.", "Inspira aprendo", "RESPIRO", 100, "move-open"],
      ["Trasferire il peso", "Passa lentamente da destra a sinistra senza oscillare con la testa.", "Espira nel passaggio", "EQUILIBRIO", 110, "move-shift"],
      ["Nuvole", "Le mani seguono un percorso morbido all'altezza del petto.", "Respira fluido", "COORDINAZIONE", 110, "move-cloud"],
      ["Spingere e tornare", "Palmi avanti, gomiti morbidi, poi ritorno al centro.", "Espira avanti", "ENERGIA", 110, "move-push"],
      ["Raccogliere", "Riporta i piedi paralleli e le mani verso l'addome.", "Espira lentamente", "CENTRO", 90, "move-root"]
    ]
  }
];

const challenges = {
  morning: { id: "morning", title: "Routine mattutina", targetDays: 7, routineId: "risveglio" },
  chair: { id: "chair", title: "Allenamento con sedia", targetDays: 7, routineId: "sedia" }
};

const defaultSettings = { voice: true, vibration: true, reducedMotion: false, voiceRate: 0.9, safetySeen: false };
const defaultState = { sessions: [], bestStreak: 0, lastRoutine: "risveglio", acceptedChallenges: { chair: false } };

const defaultPreview = {
  root: "assets/img/rooted.png",
  open: "assets/img/opening.png",
  cloud: "assets/img/cloud.png",
  shift: "assets/img/shift.png",
  push: "assets/img/push.png",
  seated: "assets/img/seated.png"
};

const animatedMoves = {
  "move-root": ["assets/anim/shift/1.jpg", "assets/anim/shift/2.jpg", "assets/anim/shift/3.jpg", "assets/anim/shift/4.jpg"],
  "move-open": ["assets/anim/open/1.jpg", "assets/anim/open/2.jpg", "assets/anim/open/3.jpg", "assets/anim/open/4.jpg"],
  "move-cloud": ["assets/anim/cloud/1.jpg", "assets/anim/cloud/2.jpg", "assets/anim/cloud/3.jpg", "assets/anim/cloud/4.jpg"],
  "move-shift": ["assets/anim/shift/1.jpg", "assets/anim/shift/2.jpg", "assets/anim/shift/3.jpg", "assets/anim/shift/4.jpg"],
  "move-push": ["assets/anim/push/1.jpg", "assets/anim/push/2.jpg", "assets/anim/push/3.jpg", "assets/anim/push/4.jpg"],
  "move-seated": ["assets/anim/seated/1.jpg", "assets/anim/seated/2.jpg", "assets/anim/seated/3.jpg", "assets/anim/seated/4.jpg"],
  "move-seated-open": ["assets/anim/seated/1.jpg", "assets/anim/seated/2.jpg", "assets/anim/seated/3.jpg", "assets/anim/seated/4.jpg"],
  "move-seated-cloud": ["assets/anim/seated/1.jpg", "assets/anim/seated/2.jpg", "assets/anim/seated/3.jpg", "assets/anim/seated/4.jpg"],
  "move-seated-push": ["assets/anim/seated/1.jpg", "assets/anim/seated/2.jpg", "assets/anim/seated/3.jpg", "assets/anim/seated/4.jpg"],
  "move-seated-shift": ["assets/anim/seated/1.jpg", "assets/anim/seated/2.jpg", "assets/anim/seated/3.jpg", "assets/anim/seated/4.jpg"]
};

let settings = loadJSON(SETTINGS_KEY, defaultSettings);
let state = loadJSON(STORAGE_KEY, defaultState);
let currentRoutine = null;
let currentMoveIndex = 0;
let moveSecondsLeft = 0;
let timerId = null;
let isPaused = false;
let deferredInstallPrompt = null;
let confirmCallback = null;
let speechEnabledInSession = true;
let animationIntervalId = null;
let currentAnimationFrames = [];
let currentAnimationPointer = 0;

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

function formatTime(totalSeconds) {
  const safe = Math.max(0, totalSeconds);
  const minutes = Math.floor(safe / 60);
  const seconds = safe % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function sessionsByDate() {
  return state.sessions.reduce((acc, session) => {
    (acc[session.date] ||= []).push(session);
    return acc;
  }, {});
}

function uniqueSessionDatesForRoutine(routineId) {
  return [...new Set(state.sessions.filter(s => s.routineId === routineId).map(s => s.date))];
}

function countRoutineChallengeDays(routineId, target = 7) {
  return Math.min(target, uniqueSessionDatesForRoutine(routineId).length);
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

function totalMinutesPracticed() {
  return Math.round(state.sessions.reduce((sum, s) => sum + Number(s.minutes || 0), 0));
}

function completedChallengesCount() {
  let total = 0;
  Object.values(challenges).forEach(challenge => {
    if (countRoutineChallengeDays(challenge.routineId, challenge.targetDays) >= challenge.targetDays) total += 1;
  });
  return total;
}

function getRecommendedRoutine() {
  const hour = new Date().getHours();
  if (hour >= 20) return routines.find(r => r.id === "sera");
  if (hour >= 13) return routines.find(r => r.id === "equilibrio");
  if (state.lastRoutine === "sedia") return routines.find(r => r.id === "sedia");
  return routines.find(r => r.id === "risveglio");
}

function renderWeekRow() {
  const byDate = sessionsByDate();
  const today = new Date();
  const formatter = new Intl.DateTimeFormat("it-IT", { weekday: "short" });
  const mondayOffset = (today.getDay() + 6) % 7;
  const monday = addDays(today, -mondayOffset);
  $("#weekSelector").innerHTML = Array.from({ length: 7 }, (_, index) => {
    const day = addDays(monday, index);
    const key = localDateKey(day);
    const classes = ["week-day"];
    if (key === localDateKey(today)) classes.push("active");
    if (byDate[key]?.length) classes.push("done");
    return `<div class="${classes.join(" ")}"><span>${formatter.format(day).replace('.', '').slice(0,3)}</span><strong>${day.getDate()}</strong></div>`;
  }).join("");
}

function renderHome() {
  const recommended = getRecommendedRoutine();
  const totalSessions = state.sessions.length;
  const progressRatio = Math.min(1, totalSessions / SESSION_TARGET);
  const energy = Math.min(99, 8 + totalSessions);

  $("#energyPoints").textContent = String(energy);
  $("#overallProgressLabel").textContent = `${Math.min(totalSessions, SESSION_TARGET)}/${SESSION_TARGET}`;
  $("#overallProgressBar").style.width = `${progressRatio * 100}%`;
  renderWeekRow();

  $("#todayRoutineTitle").textContent = recommended.title;
  $("#todayRoutineDescription").textContent = recommended.description;
  $("#todayRoutineMeta").textContent = `${recommended.minutes} min`;
  $("#todayRoutineImage").src = recommended.image;
  $("#todayRoutineImage").alt = recommended.shortTitle;
  $("#startTodayBtn").dataset.routineId = recommended.id;
}

function renderTraining(filter = "all") {
  const visible = filter === "all" ? routines : routines.filter(r => r.type.includes(filter));
  $("#routineList").innerHTML = visible.map(r => `
    <button class="training-card" data-routine-id="${r.id}">
      <div class="training-thumb"><img src="${r.image}" alt="${r.shortTitle}"></div>
      <div class="training-copy">
        <strong>${r.shortTitle}</strong>
        <span>${r.minutes} min · ${r.level}<br>${r.description}</span>
      </div>
      <div class="training-arrow">›</div>
    </button>
  `).join("");
}

function renderChallenges() {
  const progress = countRoutineChallengeDays(challenges.morning.routineId, challenges.morning.targetDays);
  $("#morningChallengeCounter").textContent = `${progress}/${challenges.morning.targetDays} GIORNI`;
  $("#morningChallengeBar").style.width = `${(progress / challenges.morning.targetDays) * 100}%`;
  $("#completedChallengesCount").textContent = String(completedChallengesCount());
  $("#chairChallengeBtn").textContent = state.acceptedChallenges?.chair ? "APRI" : "ACCETTA";
}

function renderProgress() {
  const totalMinutes = totalMinutesPracticed();
  const streak = calculateStreak();
  state.bestStreak = Math.max(Number(state.bestStreak || 0), streak);
  saveAll();

  $("#totalSessions").textContent = String(state.sessions.length);
  $("#totalMinutes").textContent = String(totalMinutes);
  $("#bestStreak").textContent = `${state.bestStreak} gg`;

  const days = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i - 6));
  const totals = days.map(day => state.sessions.filter(s => s.date === localDateKey(day)).reduce((sum, s) => sum + Number(s.minutes || 0), 0));
  const max = Math.max(15, ...totals);
  const formatter = new Intl.DateTimeFormat("it-IT", { weekday: "short" });
  $("#barChart").innerHTML = days.map((day, i) => `
    <div class="bar-column" title="${totals[i]} minuti">
      <div style="height:${Math.max(4, (totals[i] / max) * 100)}%"></div>
      <strong>${totals[i]}</strong>
      <span>${formatter.format(day).slice(0,2)}</span>
    </div>
  `).join("");

  const achievements = [
    ["🌱", "Primo passo", "Completa la prima sessione", state.sessions.length >= 1],
    ["🔥", "Tre giorni", "Pratica per tre giorni di fila", state.bestStreak >= 3],
    ["🧘", "Un'ora per te", "Raggiungi 60 minuti totali", totalMinutes >= 60],
    ["🏆", "Sfida mattutina", "Completa 7 giorni di routine mattutina", countRoutineChallengeDays("risveglio", 7) >= 7]
  ];

  $("#achievementList").innerHTML = achievements.map(([icon, title, text, unlocked]) => `
    <article class="achievement-item ${unlocked ? "" : "locked"}">
      <span class="achievement-icon">${icon}</span>
      <span><strong>${title}</strong><small>${text}</small></span>
      <span>${unlocked ? "✓" : "○"}</span>
    </article>
  `).join("");
}

function setVoiceButtonsUI() {
  $("#soundBtn").textContent = settings.voice ? "🔊" : "🔇";
  $("#voiceStageBtn").textContent = settings.voice ? "↻" : "↻";
  $("#voiceStageBtn").setAttribute("aria-label", "Ripeti istruzioni");
}

function renderSettings() {
  $("#voiceToggle").checked = settings.voice;
  $("#vibrationToggle").checked = settings.vibration;
  $("#motionToggle").checked = settings.reducedMotion;
  $("#voiceRate").value = String(settings.voiceRate);
  document.body.classList.toggle("reduced-motion", settings.reducedMotion);
  setVoiceButtonsUI();
}

function showScreen(name) {
  $$(".screen").forEach(screen => screen.classList.toggle("active", screen.dataset.screen === name));
  $$(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.nav === name));
  document.body.classList.toggle("session-active", ["session", "completion"].includes(name));

  if (name !== "session") stopMovementAnimation();
  if (name === "home") renderHome();
  if (name === "training") renderTraining($(".filter-chip.active")?.dataset.filter || "all");
  if (name === "challenge") renderChallenges();
  if (name === "progress") renderProgress();
  if (name === "profile") renderSettings();

  window.scrollTo({ top: 0, behavior: settings.reducedMotion ? "auto" : "smooth" });
}

function previewForMove(movementClass) {
  const frames = animatedMoves[movementClass];
  if (frames?.length) return frames[0];
  if (movementClass.includes("seated")) return defaultPreview.seated;
  if (movementClass.includes("push")) return defaultPreview.push;
  if (movementClass.includes("cloud")) return defaultPreview.cloud;
  if (movementClass.includes("shift")) return defaultPreview.shift;
  if (movementClass.includes("open")) return defaultPreview.open;
  return defaultPreview.root;
}

function framesForMove(movementClass) {
  return animatedMoves[movementClass] || [previewForMove(movementClass)];
}

function pingPongFrames(frames) {
  if (!frames || frames.length <= 1) return frames || [];
  return [...frames, ...frames.slice(1, -1).reverse()];
}

function stopMovementAnimation() {
  clearInterval(animationIntervalId);
  animationIntervalId = null;
}

function startMovementAnimation(movementClass, altText = "Movimento di Tai Chi") {
  stopMovementAnimation();
  currentAnimationFrames = pingPongFrames(framesForMove(movementClass));
  currentAnimationPointer = 0;
  const movementImage = $("#movementImage");
  movementImage.src = currentAnimationFrames[0] || previewForMove(movementClass);
  movementImage.alt = altText;

  const speed = settings.reducedMotion ? 1200 : 700;
  if (currentAnimationFrames.length <= 1) return;
  animationIntervalId = setInterval(() => {
    if (isPaused) return;
    currentAnimationPointer = (currentAnimationPointer + 1) % currentAnimationFrames.length;
    movementImage.src = currentAnimationFrames[currentAnimationPointer];
  }, speed);
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

function totalRemainingSecondsForCurrentRoutine() {
  if (!currentRoutine) return 0;
  return moveSecondsLeft + currentRoutine.moves.slice(currentMoveIndex + 1).reduce((sum, move) => sum + move[4], 0);
}

function renderSessionSegments() {
  if (!currentRoutine) return;
  $("#sessionSegments").innerHTML = currentRoutine.moves.map((_, index) => {
    const className = index < currentMoveIndex ? "done" : index === currentMoveIndex ? "current" : "";
    return `<span class="${className}"></span>`;
  }).join("");
}

function updateNextMoveCard() {
  if (!currentRoutine) return;
  const next = currentRoutine.moves[currentMoveIndex + 1];
  const card = $("#nextMoveCard");
  if (!next) {
    card.classList.add("hidden");
    return;
  }
  card.classList.remove("hidden");
  $("#nextMoveTitle").textContent = next[0];
  $("#nextMoveImage").src = previewForMove(next[5]);
  $("#nextMoveImage").alt = next[0];
}

function speak(text) {
  if (!settings.voice || !speechEnabledInSession || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "it-IT";
  utterance.rate = Number(settings.voiceRate || 0.9);
  utterance.pitch = 0.95;
  window.speechSynthesis.speak(utterance);
}

function loadMove(index) {
  if (!currentRoutine) return;
  if (index >= currentRoutine.moves.length) return finishSession();
  if (index < 0) index = 0;

  currentMoveIndex = index;
  const [title, instruction, breath, focus, seconds, movementClass] = currentRoutine.moves[index];
  moveSecondsLeft = seconds;
  isPaused = false;
  clearInterval(timerId);

  $("#movementTitle").textContent = title;
  $("#movementInstruction").textContent = instruction;
  $("#movementFocus").textContent = focus;
  $("#breathText").textContent = breath;
  $("#pauseIcon").textContent = "Ⅱ";
  $("#pauseLabel").textContent = "PAUSA";

  renderSessionSegments();
  updateNextMoveCard();
  updateTimerUI();
  startMovementAnimation(movementClass, `${title}: ${instruction}`);
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
  $("#timerText").textContent = formatTime(moveSecondsLeft);
  $("#sessionStepLabel").textContent = formatTime(totalRemainingSecondsForCurrentRoutine());
}

function signalChange() {
  if (settings.vibration && navigator.vibrate) navigator.vibrate(70);
}

function togglePause() {
  isPaused = !isPaused;
  $("#pauseIcon").textContent = isPaused ? "▶" : "Ⅱ";
  $("#pauseLabel").textContent = isPaused ? "RIPRENDI" : "PAUSA";
  if (isPaused) {
    window.speechSynthesis?.cancel();
  } else {
    const breath = $("#breathText").textContent;
    speak(`Riprendiamo con calma. ${breath}.`);
  }
}

function repeatCurrentInstruction() {
  if (!currentRoutine) return;
  const move = currentRoutine.moves[currentMoveIndex];
  if (!move) return;
  speak(`${move[0]}. ${move[1]}. ${move[2]}.`);
}

function toggleVoice() {
  settings.voice = !settings.voice;
  saveAll();
  renderSettings();
  if (!settings.voice) window.speechSynthesis?.cancel();
  else repeatCurrentInstruction();
}

function finishSession() {
  clearInterval(timerId);
  stopMovementAnimation();
  window.speechSynthesis?.cancel();
  const actualMinutes = currentRoutine.minutes;
  state.sessions.push({ date: localDateKey(), minutes: actualMinutes, routineId: currentRoutine.id, mood: null, completedAt: new Date().toISOString() });
  state.bestStreak = Math.max(Number(state.bestStreak || 0), calculateStreak());
  saveAll();
  $("#completionText").textContent = `${actualMinutes} minuti di movimento lento e consapevole.`;
  $("#completionMinutes").textContent = String(actualMinutes);
  $("#completionStreak").textContent = String(calculateStreak());
  $$(".mood-picker button").forEach(btn => btn.classList.remove("selected"));
  showScreen("completion");
  speak("Sessione completata. Hai scelto di prenderti cura di te.");
}

function exitSession() {
  clearInterval(timerId);
  stopMovementAnimation();
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

  $("#filterRow")?.addEventListener("click", event => {
    const chip = event.target.closest(".filter-chip");
    if (!chip) return;
    $$(".filter-chip").forEach(btn => btn.classList.toggle("active", btn === chip));
    renderTraining(chip.dataset.filter);
  });

  $("#startTodayBtn")?.addEventListener("click", event => startRoutine(event.currentTarget.dataset.routineId));
  $("#openMorningChallengeBtn")?.addEventListener("click", () => startRoutine("risveglio"));
  $("#challengeStartBtn")?.addEventListener("click", () => startRoutine("risveglio"));
  $("#startChairBtn")?.addEventListener("click", () => startRoutine("sedia"));
  $("#chairChallengeBtn")?.addEventListener("click", () => {
    state.acceptedChallenges = { ...(state.acceptedChallenges || {}), chair: true };
    saveAll();
    renderChallenges();
    startRoutine("sedia");
  });

  $("#pauseBtn")?.addEventListener("click", togglePause);
  $("#prevMoveBtn")?.addEventListener("click", () => loadMove(currentMoveIndex - 1));
  $("#nextMoveBtn")?.addEventListener("click", () => loadMove(currentMoveIndex + 1));
  $("#nextMoveCard")?.addEventListener("click", () => loadMove(currentMoveIndex + 1));
  $("#exitSessionBtn")?.addEventListener("click", exitSession);
  $("#finishBtn")?.addEventListener("click", () => showScreen("home"));
  $("#infoBtn")?.addEventListener("click", () => showConfirm("Indicazione del movimento", `${$("#movementTitle").textContent}: ${$("#movementInstruction").textContent} — ${$("#breathText").textContent}.`, null));
  $("#soundBtn")?.addEventListener("click", toggleVoice);
  $("#voiceStageBtn")?.addEventListener("click", repeatCurrentInstruction);

  $("#voiceToggle")?.addEventListener("change", event => { settings.voice = event.target.checked; saveAll(); renderSettings(); });
  $("#vibrationToggle")?.addEventListener("change", event => { settings.vibration = event.target.checked; saveAll(); });
  $("#motionToggle")?.addEventListener("change", event => { settings.reducedMotion = event.target.checked; saveAll(); renderSettings(); });
  $("#voiceRate")?.addEventListener("change", event => { settings.voiceRate = Number(event.target.value); saveAll(); speak("Questa è la nuova velocità della voce."); });

  $("#openSafetyBtn")?.addEventListener("click", () => {
    $("#safetyAccepted").checked = false;
    $("#acceptSafetyBtn").disabled = true;
    $("#safetyDialog").showModal();
  });
  $("#safetyAccepted")?.addEventListener("change", event => { $("#acceptSafetyBtn").disabled = !event.target.checked; });
  $("#acceptSafetyBtn")?.addEventListener("click", () => { settings.safetySeen = true; saveAll(); });

  $("#resetProgressBtn")?.addEventListener("click", () => showConfirm("Azzerare i progressi?", "Verranno eliminati sessioni, minuti e traguardi da questo dispositivo.", () => {
    state = { ...defaultState, sessions: [] };
    saveAll();
    renderHome();
    renderChallenges();
    renderProgress();
  }));

  $("#confirmActionBtn")?.addEventListener("click", () => {
    if (typeof confirmCallback === "function") confirmCallback();
    confirmCallback = null;
  });

  $$(".mood-picker button").forEach(btn => btn.addEventListener("click", () => applyMood(btn.dataset.mood, btn)));

  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredInstallPrompt = event;
    $("#installBtn").hidden = false;
  });
  $("#installBtn")?.addEventListener("click", async () => {
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
  renderHome();
  renderChallenges();
  showScreen("home");
  registerServiceWorker();
  if (!settings.safetySeen) setTimeout(() => $("#safetyDialog").showModal(), 300);
}

document.addEventListener("DOMContentLoaded", init);
