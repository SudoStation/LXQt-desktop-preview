/**
 * LXQt Desktop Preview — interactive shell
 * Modelled on upstream LXQt defaults:
 *   Clearlooks theme + Breeze icons + Fusion style
 *   lxqt-panel: fancymenu, desktopswitch, quicklaunch, taskbar,
 *               statusnotifier, tray, mount, volume, worldclock, showdesktop
 *   PCManFM-Qt file manager · QTerminal · lxqt-leave
 */

/* ---------- App catalogue (typical LXQt package set) ---------- */

const APPS = [
  { id: "files", name: "PCManFM-Qt File Manager", icon: "assets/apps/pcmanfm-qt.svg", categories: ["accessories", "system"], open: "pcm" },
  { id: "terminal", name: "QTerminal", icon: "assets/apps/qterminal.svg", categories: ["accessories", "system"], open: "term" },
  { id: "featherpad", name: "FeatherPad", icon: "assets/apps/featherpad.svg", categories: ["accessories"] },
  { id: "calculator", name: "Calculator", icon: "assets/apps/accessories-calculator.svg", categories: ["accessories"] },
  { id: "ark", name: "Ark", icon: "assets/apps/ark.svg", categories: ["accessories", "utilities"] },
  { id: "firefox", name: "Firefox Web Browser", icon: "assets/apps/firefox.svg", categories: ["internet"] },
  { id: "browser", name: "Web Browser", icon: "assets/apps/internet-web-browser.svg", categories: ["internet"] },
  { id: "mail", name: "Mail Reader", icon: "assets/apps/internet-mail.svg", categories: ["internet"] },
  { id: "gwenview", name: "Gwenview", icon: "assets/apps/gwenview.svg", categories: ["graphics"] },
  { id: "libreoffice", name: "LibreOffice", icon: "assets/apps/org.libreoffice.LibreOffice.startcenter.png", categories: ["office"] },
  { id: "writer", name: "LibreOffice Writer", icon: "assets/apps/libreoffice-writer.svg", categories: ["office"] },
  { id: "calc", name: "LibreOffice Calc", icon: "assets/apps/libreoffice-calc.svg", categories: ["office"] },
  { id: "impress", name: "LibreOffice Impress", icon: "assets/apps/libreoffice-impress.svg", categories: ["office"] },
  { id: "draw", name: "LibreOffice Draw", icon: "assets/apps/libreoffice-draw.svg", categories: ["office", "graphics"] },
  { id: "vlc", name: "Multimedia Player", icon: "assets/apps/multimedia-volume-control.svg", categories: ["multimedia"] },
  { id: "qps", name: "Qps", icon: "assets/apps/utilities-system-monitor.svg", categories: ["system"] },
  { id: "lxqt-config", name: "LXQt Configuration Center", icon: "assets/apps/preferences-system.svg", categories: ["preferences", "settings"] },
  { id: "appearance", name: "Appearance", icon: "assets/apps/preferences-desktop-theme.svg", categories: ["preferences", "settings"] },
  { id: "session", name: "Session Settings", icon: "assets/apps/preferences-system-windows.svg", categories: ["preferences", "settings"] },
  { id: "display", name: "Monitor Settings", icon: "assets/apps/preferences-desktop-display.svg", categories: ["preferences", "settings"] },
  { id: "about", name: "About LXQt", icon: "assets/status/lxqt_logo.png", categories: ["system"], open: "about" },
  { id: "help", name: "Help", icon: "assets/apps/help-browser.svg", categories: ["system"] },
];

/** Fancy Menu categories (from lxqt-applications.menu + built-ins) */
const CATEGORIES = [
  { id: "favorites", name: "Favorites", icon: "assets/menu/bookmarks.svg", special: true },
  { id: "all", name: "All Applications", icon: "assets/menu/folder.svg", special: true },
  { id: "_sep", special: true, separator: true },
  { id: "accessories", name: "Accessories", icon: "assets/menu/applications-accessories.svg", appIds: ["files", "terminal", "featherpad", "calculator", "ark"] },
  { id: "graphics", name: "Graphics", icon: "assets/menu/applications-graphics.svg", appIds: ["gwenview", "draw"] },
  { id: "internet", name: "Internet", icon: "assets/menu/applications-internet.svg", appIds: ["firefox", "browser", "mail"] },
  { id: "office", name: "Office", icon: "assets/menu/applications-office.svg", appIds: ["libreoffice", "writer", "calc", "impress", "draw"] },
  { id: "multimedia", name: "Sound & Video", icon: "assets/menu/applications-multimedia.svg", appIds: ["vlc"] },
  { id: "system", name: "System Tools", icon: "assets/menu/applications-system.svg", appIds: ["files", "terminal", "qps", "about", "help"] },
  { id: "preferences", name: "Preferences", icon: "assets/menu/preferences-desktop.svg", appIds: ["lxqt-config", "appearance", "session", "display"] },
];

/* Default favorites for Fancy Menu (empty message if none — we seed a few) */
const DEFAULT_FAVORITES = ["files", "terminal", "firefox", "featherpad"];

/* ---------- Filesystem (PCManFM-Qt places model) ---------- */

const FS = {
  home: {
    label: "user",
    path: "/home/user",
    icon: "assets/places/user-home.svg",
    parent: null,
    items: [
      { name: "Desktop", icon: "assets/places/user-desktop.svg", type: "folder", place: "desktop" },
      { name: "Documents", icon: "assets/places/folder-documents.svg", type: "folder", place: "documents" },
      { name: "Downloads", icon: "assets/places/folder-download.svg", type: "folder", place: "downloads" },
      { name: "Music", icon: "assets/places/folder-music.svg", type: "folder", place: "music" },
      { name: "Pictures", icon: "assets/places/folder-pictures.svg", type: "folder", place: "pictures" },
      { name: "Public", icon: "assets/places/folder-publicshare.svg", type: "folder", place: "public" },
      { name: "Templates", icon: "assets/places/folder-templates.svg", type: "folder", place: "templates" },
      { name: "Videos", icon: "assets/places/folder-videos.svg", type: "folder", place: "videos" },
    ],
  },
  desktop: {
    label: "Desktop",
    path: "/home/user/Desktop",
    icon: "assets/places/user-desktop.svg",
    parent: "home",
    items: [],
  },
  documents: {
    label: "Documents",
    path: "/home/user/Documents",
    icon: "assets/places/folder-documents.svg",
    parent: "home",
    items: [
      { name: "notes.txt", icon: "assets/mimetypes/text-x-generic.svg", type: "file" },
      { name: "report.odt", icon: "assets/apps/libreoffice-writer.svg", type: "file" },
      { name: "budget.ods", icon: "assets/apps/libreoffice-calc.svg", type: "file" },
    ],
  },
  downloads: {
    label: "Downloads",
    path: "/home/user/Downloads",
    icon: "assets/places/folder-download.svg",
    parent: "home",
    items: [
      { name: "lxqt-panel-2.2.0.tar.xz", icon: "assets/mimetypes/package-x-generic.svg", type: "file" },
      { name: "readme.pdf", icon: "assets/mimetypes/application-pdf.svg", type: "file" },
    ],
  },
  music: {
    label: "Music",
    path: "/home/user/Music",
    icon: "assets/places/folder-music.svg",
    parent: "home",
    items: [{ name: "Playlist", icon: "assets/places/folder.svg", type: "folder", place: "empty" }],
  },
  pictures: {
    label: "Pictures",
    path: "/home/user/Pictures",
    icon: "assets/places/folder-pictures.svg",
    parent: "home",
    items: [
      { name: "Vacation", icon: "assets/places/folder.svg", type: "folder", place: "empty" },
      { name: "photo.jpg", icon: "assets/thumbnails/photo.jpg", type: "file" },
    ],
  },
  videos: {
    label: "Videos",
    path: "/home/user/Videos",
    icon: "assets/places/folder-videos.svg",
    parent: "home",
    items: [],
  },
  public: {
    label: "Public",
    path: "/home/user/Public",
    icon: "assets/places/folder-publicshare.svg",
    parent: "home",
    items: [],
  },
  templates: {
    label: "Templates",
    path: "/home/user/Templates",
    icon: "assets/places/folder-templates.svg",
    parent: "home",
    items: [],
  },
  trash: {
    label: "Trash",
    path: "trash:///",
    icon: "assets/places/user-trash.svg",
    parent: null,
    items: [],
  },
  computer: {
    label: "Computer",
    path: "computer:///",
    icon: "assets/places/computer.svg",
    parent: null,
    items: [
      { name: "Filesystem", icon: "assets/places/drive-harddisk.svg", type: "folder", place: "filesystem" },
      { name: "user", icon: "assets/places/user-home.svg", type: "folder", place: "home" },
    ],
  },
  filesystem: {
    label: "Filesystem",
    path: "/",
    icon: "assets/places/drive-harddisk.svg",
    parent: "computer",
    items: [
      { name: "bin", icon: "assets/places/folder.svg", type: "folder", place: "empty" },
      { name: "etc", icon: "assets/places/folder.svg", type: "folder", place: "empty" },
      { name: "home", icon: "assets/places/folder.svg", type: "folder", place: "home" },
      { name: "usr", icon: "assets/places/folder.svg", type: "folder", place: "empty" },
      { name: "var", icon: "assets/places/folder.svg", type: "folder", place: "empty" },
      { name: "tmp", icon: "assets/places/folder.svg", type: "folder", place: "empty" },
    ],
  },
  applications: {
    label: "Applications",
    path: "menu://applications/",
    icon: "assets/menu/applications-accessories.svg",
    parent: null,
    items: [
      { name: "Accessories", icon: "assets/menu/applications-accessories.svg", type: "folder", place: "empty" },
      { name: "Graphics", icon: "assets/menu/applications-graphics.svg", type: "folder", place: "empty" },
      { name: "Internet", icon: "assets/menu/applications-internet.svg", type: "folder", place: "empty" },
      { name: "Office", icon: "assets/menu/applications-office.svg", type: "folder", place: "empty" },
      { name: "Sound & Video", icon: "assets/menu/applications-multimedia.svg", type: "folder", place: "empty" },
      { name: "System Tools", icon: "assets/menu/applications-system.svg", type: "folder", place: "empty" },
    ],
  },
  network: {
    label: "Network",
    path: "network:///",
    icon: "assets/places/folder-network.svg",
    parent: null,
    items: [],
  },
  empty: {
    label: "Folder",
    path: "…",
    icon: "assets/places/folder.svg",
    parent: "home",
    items: [],
  },
};

/** PCManFM-Qt PlacesModel order (libfm-qt placesmodel.cpp) */
const SIDEBAR = [
  { heading: "Places" },
  { id: "home", label: "user", icon: "assets/places/user-home.svg" },
  { id: "desktop", label: "Desktop", icon: "assets/places/user-desktop.svg" },
  { id: "trash", label: "Trash", icon: "assets/places/user-trash.svg" },
  { id: "computer", label: "Computer", icon: "assets/places/computer.svg" },
  { id: "applications", label: "Applications", icon: "assets/menu/applications-accessories.svg" },
  { id: "network", label: "Network", icon: "assets/places/folder-network.svg" },
  { heading: "Devices" },
  { id: "filesystem", label: "Filesystem", icon: "assets/places/drive-harddisk.svg" },
  { heading: "Bookmarks" },
];

/* ---------- DOM ---------- */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const menuBtn = $("#menu-btn");
const fancyMenu = $("#fancy-menu");
const fancySearch = $("#fancy-search");
const fancyApps = $("#fancy-apps");
const fancyCats = $("#fancy-cats");
const fancyFavEmpty = $("#fancy-fav-empty");
const pcmWindow = $("#pcm-window");
const termWindow = $("#term-window");
const leaveDialog = $("#leave-dialog");
const aboutDialog = $("#about-dialog");
const volumePopup = $("#volume-popup");
const clockPopup = $("#clock-popup");
const toastEl = $("#toast");
const taskbar = $("#taskbar");
const clockText = $("#clock-text");

/* ---------- State ---------- */

let menuOpen = false;
let currentCategory = "favorites";
let favorites = [...DEFAULT_FAVORITES];
let searchQuery = "";
let pcmPlace = "home";
let pcmHistory = ["home"];
let pcmHistIndex = 0;
let volume = 65;
let toastTimer = null;
let windows = {
  pcm: {
    open: false,
    minimized: false,
    maximized: false,
    title: "File Manager",
    icon: "assets/apps/pcmanfm-qt.svg",
  },
  term: {
    open: false,
    minimized: false,
    maximized: false,
    title: "QTerminal",
    icon: "assets/apps/qterminal.svg",
  },
};
let dragState = null;
let activeWin = null;

/* ---------- Utils ---------- */

function appById(id) {
  return APPS.find((a) => a.id === id);
}

function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.hidden = true;
  }, 2200);
}

function pad2(n) {
  return String(n).padStart(2, "0");
}

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function updateClock() {
  const now = new Date();
  clockText.textContent = `${pad2(now.getHours())}:${pad2(now.getMinutes())}`;
  const popTime = $("#clock-popup-time");
  const popDate = $("#clock-popup-date");
  if (popTime) {
    popTime.textContent = `${pad2(now.getHours())}:${pad2(now.getMinutes())}:${pad2(now.getSeconds())}`;
  }
  if (popDate) {
    popDate.textContent = `${WEEKDAYS[now.getDay()]}, ${now.getDate()} ${MONTHS[now.getMonth()]} ${now.getFullYear()}`;
  }
}

function closeAllPopovers({ keepMenu = false } = {}) {
  if (!keepMenu) closeMenu();
  volumePopup.hidden = true;
  $("#volume-btn")?.setAttribute("aria-expanded", "false");
  clockPopup.hidden = true;
  $("#clock-btn")?.setAttribute("aria-expanded", "false");
}

/* ---------- Fancy Menu ---------- */

function appsForCategory(catId) {
  if (catId === "favorites") {
    return favorites.map(appById).filter(Boolean);
  }
  if (catId === "all") {
    return [...APPS].sort((a, b) => a.name.localeCompare(b.name));
  }
  const cat = CATEGORIES.find((c) => c.id === catId);
  if (!cat || !cat.appIds) return [];
  return cat.appIds.map(appById).filter(Boolean);
}

function filteredApps() {
  const q = searchQuery.trim().toLowerCase();
  if (q) {
    return APPS.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.id.toLowerCase().includes(q) ||
        (a.categories || []).some((c) => c.includes(q))
    );
  }
  return appsForCategory(currentCategory);
}

function renderFancyCategories() {
  fancyCats.innerHTML = "";
  for (const cat of CATEGORIES) {
    if (cat.separator) {
      const sep = document.createElement("div");
      sep.className = "fancy-cat-sep";
      sep.setAttribute("role", "separator");
      fancyCats.appendChild(sep);
      continue;
    }
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "fancy-cat" + (cat.id === currentCategory && !searchQuery ? " active" : "");
    btn.dataset.cat = cat.id;
    btn.setAttribute("role", "option");
    btn.innerHTML = `<img src="${cat.icon}" alt="" draggable="false" /><span>${cat.name}</span>`;
    fancyCats.appendChild(btn);
  }
}

function renderFancyApps() {
  const apps = filteredApps();
  fancyApps.innerHTML = "";

  const showEmptyFav =
    !searchQuery &&
    currentCategory === "favorites" &&
    favorites.length === 0;

  fancyFavEmpty.hidden = !showEmptyFav;

  for (const app of apps) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "fancy-app";
    btn.dataset.app = app.id;
    btn.setAttribute("role", "listitem");
    btn.title = app.name;
    btn.innerHTML = `<img src="${app.icon}" alt="" draggable="false" /><span>${app.name}</span>`;
    fancyApps.appendChild(btn);
  }
}

function setCategory(id) {
  currentCategory = id;
  searchQuery = "";
  fancySearch.value = "";
  renderFancyCategories();
  renderFancyApps();
}

function openMenu() {
  closeAllPopovers({ keepMenu: true });
  menuOpen = true;
  fancyMenu.hidden = false;
  menuBtn.setAttribute("aria-expanded", "true");
  currentCategory = "favorites";
  searchQuery = "";
  fancySearch.value = "";
  renderFancyCategories();
  renderFancyApps();
  requestAnimationFrame(() => fancySearch.focus());
}

function closeMenu() {
  menuOpen = false;
  fancyMenu.hidden = true;
  menuBtn.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  if (menuOpen) closeMenu();
  else openMenu();
}

/* ---------- Windows / taskbar ---------- */

function setWindowActive(id) {
  activeWin = id;
  pcmWindow.classList.toggle("active", id === "pcm");
  termWindow.classList.toggle("active", id === "term");
  pcmWindow.style.zIndex = id === "pcm" ? 40 : 30;
  termWindow.style.zIndex = id === "term" ? 40 : 30;
  refreshTaskbar();
}

function refreshTaskbar() {
  taskbar.innerHTML = "";
  for (const [id, win] of Object.entries(windows)) {
    if (!win.open) continue;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "task-btn";
    if (activeWin === id && !win.minimized) btn.classList.add("active");
    if (win.minimized) btn.classList.add("minimized");
    btn.dataset.win = id;
    btn.title = win.title;
    const label = win.minimized ? `[${win.title}]` : win.title;
    btn.innerHTML = `<img src="${win.icon}" alt="" draggable="false" /><span>${label}</span>`;
    taskbar.appendChild(btn);
  }
}

function openWindow(id) {
  const win = windows[id];
  if (!win) return;
  win.open = true;
  win.minimized = false;
  const el = id === "pcm" ? pcmWindow : termWindow;
  el.hidden = false;
  el.classList.remove("minimized");
  setWindowActive(id);
  if (id === "pcm") renderPcm();
  refreshTaskbar();
}

function closeWindow(id) {
  const win = windows[id];
  if (!win) return;
  win.open = false;
  win.minimized = false;
  win.maximized = false;
  const el = id === "pcm" ? pcmWindow : termWindow;
  el.hidden = true;
  el.classList.remove("maximized", "minimized", "active");
  if (activeWin === id) activeWin = null;
  refreshTaskbar();
}

function minimizeWindow(id) {
  const win = windows[id];
  if (!win || !win.open) return;
  win.minimized = true;
  const el = id === "pcm" ? pcmWindow : termWindow;
  el.classList.add("minimized");
  refreshTaskbar();
}

function restoreWindow(id) {
  const win = windows[id];
  if (!win) return;
  win.minimized = false;
  const el = id === "pcm" ? pcmWindow : termWindow;
  el.hidden = false;
  el.classList.remove("minimized");
  setWindowActive(id);
  refreshTaskbar();
}

function toggleMaximize(id) {
  const win = windows[id];
  if (!win || !win.open) return;
  win.maximized = !win.maximized;
  const el = id === "pcm" ? pcmWindow : termWindow;
  el.classList.toggle("maximized", win.maximized);
}

function showDesktop() {
  for (const id of Object.keys(windows)) {
    if (windows[id].open && !windows[id].minimized) {
      minimizeWindow(id);
    }
  }
}

/* ---------- PCManFM-Qt ---------- */

function renderSidebar() {
  const side = $("#pcm-sidebar");
  side.innerHTML = "";
  for (const entry of SIDEBAR) {
    if (entry.heading) {
      const h = document.createElement("div");
      h.className = "pcm-side-heading";
      h.textContent = entry.heading;
      side.appendChild(h);
      continue;
    }
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "pcm-side-item" + (entry.id === pcmPlace ? " active" : "");
    btn.dataset.place = entry.id;
    btn.innerHTML = `<img src="${entry.icon}" alt="" draggable="false" /><span>${entry.label}</span>`;
    side.appendChild(btn);
  }
}

function renderPcm() {
  const place = FS[pcmPlace] || FS.home;
  $("#pcm-path").value = place.path;
  $("#pcm-title").textContent = place.label || "File Manager";
  windows.pcm.title = place.label || "File Manager";
  $("#pcm-tab-text").textContent = place.label || "user";
  const tabIcon = $("#pcm-tab-label img");
  if (tabIcon) tabIcon.src = place.icon || "assets/places/folder.svg";

  const content = $("#pcm-content");
  content.innerHTML = "";
  const items = place.items || [];
  for (const item of items) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "pcm-item";
    btn.dataset.name = item.name;
    if (item.place) btn.dataset.place = item.place;
    btn.dataset.type = item.type;
    btn.innerHTML = `<img src="${item.icon}" alt="" draggable="false" /><span>${item.name}</span>`;
    content.appendChild(btn);
  }

  const n = items.length;
  $("#pcm-status").textContent = n === 1 ? "1 item" : `${n} items`;
  renderSidebar();

  $("#pcm-back").disabled = pcmHistIndex <= 0;
  $("#pcm-forward").disabled = pcmHistIndex >= pcmHistory.length - 1;
  $("#pcm-up").disabled = !place.parent;
  refreshTaskbar();
}

function navigatePcm(place, { push = true } = {}) {
  if (!FS[place]) place = "empty";
  pcmPlace = place;
  if (push) {
    pcmHistory = pcmHistory.slice(0, pcmHistIndex + 1);
    pcmHistory.push(place);
    pcmHistIndex = pcmHistory.length - 1;
  }
  renderPcm();
}

function openPcm(place = "home") {
  pcmPlace = place;
  pcmHistory = [place];
  pcmHistIndex = 0;
  openWindow("pcm");
  renderPcm();
}

/* ---------- Apps ---------- */

function launchApp(id) {
  const app = appById(id);
  if (!app) {
    showToast("Application not available in this preview");
    return;
  }
  closeMenu();
  if (app.open === "pcm") {
    openPcm("home");
    return;
  }
  if (app.open === "term") {
    openWindow("term");
    return;
  }
  if (app.open === "about") {
    openAbout();
    return;
  }
  showToast(`Launching ${app.name}…`);
}

/* ---------- Dialogs ---------- */

function openLeave() {
  closeMenu();
  closeAllPopovers();
  leaveDialog.hidden = false;
}

function closeLeave() {
  leaveDialog.hidden = true;
}

function openAbout() {
  closeMenu();
  aboutDialog.hidden = false;
}

function closeAbout() {
  aboutDialog.hidden = true;
}

/* ---------- Volume ---------- */

function volumeIconFor(v) {
  if (v <= 0) return "assets/status/audio-volume-muted.svg";
  if (v < 30) return "assets/status/audio-volume-low.svg";
  if (v < 70) return "assets/status/audio-volume-medium.svg";
  return "assets/status/audio-volume-high.svg";
}

function setVolume(v) {
  volume = Math.max(0, Math.min(100, v));
  $("#volume-slider").value = volume;
  $("#volume-label").textContent = `${volume}%`;
  const src = volumeIconFor(volume);
  $("#volume-icon").src = src;
  $("#volume-popup-icon").src = src;
}

/* ---------- Drag windows ---------- */

function startDrag(e, winId) {
  if (windows[winId]?.maximized) return;
  const el = winId === "pcm" ? pcmWindow : termWindow;
  const rect = el.getBoundingClientRect();
  dragState = {
    id: winId,
    ox: e.clientX - rect.left,
    oy: e.clientY - rect.top,
  };
  setWindowActive(winId);
  e.preventDefault();
}

function onPointerMove(e) {
  if (!dragState) return;
  const el = dragState.id === "pcm" ? pcmWindow : termWindow;
  const panelH = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--panel-height"), 10) || 32;
  let x = e.clientX - dragState.ox;
  let y = e.clientY - dragState.oy;
  x = Math.max(-rectW(el) + 80, Math.min(window.innerWidth - 40, x));
  y = Math.max(0, Math.min(window.innerHeight - panelH - 24, y));
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
}

function rectW(el) {
  return el.getBoundingClientRect().width;
}

function endDrag() {
  dragState = null;
}

/* ---------- Event wiring ---------- */

function initEvents() {
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  fancySearch.addEventListener("input", () => {
    searchQuery = fancySearch.value;
    renderFancyCategories();
    renderFancyApps();
  });

  fancyCats.addEventListener("click", (e) => {
    const cat = e.target.closest(".fancy-cat");
    if (!cat) return;
    setCategory(cat.dataset.cat);
  });

  fancyApps.addEventListener("click", (e) => {
    const app = e.target.closest(".fancy-app");
    if (!app) return;
    launchApp(app.dataset.app);
  });

  $("#fancy-leave").addEventListener("click", openLeave);
  $("#fancy-settings").addEventListener("click", () => {
    closeMenu();
    showToast("Opening LXQt Configuration Center…");
  });
  $("#fancy-about").addEventListener("click", openAbout);

  $("#leave-cancel").addEventListener("click", closeLeave);
  leaveDialog.addEventListener("click", (e) => {
    if (e.target === leaveDialog) closeLeave();
  });
  $("#leave-grid").addEventListener("click", (e) => {
    const item = e.target.closest(".leave-item");
    if (!item) return;
    const action = item.dataset.leave;
    closeLeave();
    const labels = {
      logout: "Logging out…",
      shutdown: "Shutting down…",
      suspend: "Suspending…",
      lock: "Locking screen…",
      reboot: "Rebooting…",
      hibernate: "Hibernating…",
    };
    showToast(labels[action] || "Done");
  });

  $("#about-ok").addEventListener("click", closeAbout);
  aboutDialog.addEventListener("click", (e) => {
    if (e.target === aboutDialog) closeAbout();
  });
  $$("[data-close='about']").forEach((b) => b.addEventListener("click", closeAbout));

  // Desktop icons
  $("#desktop-icons").addEventListener("click", (e) => {
    const icon = e.target.closest(".desk-icon");
    if (!icon) return;
    openPcm(icon.dataset.place || "home");
  });
  $("#desktop-icons").addEventListener("dblclick", (e) => {
    const icon = e.target.closest(".desk-icon");
    if (!icon) return;
    openPcm(icon.dataset.place || "home");
  });

  // Quick launch
  $$(".panel-launch[data-app]").forEach((btn) => {
    btn.addEventListener("click", () => launchApp(btn.dataset.app));
  });

  // Taskbar
  taskbar.addEventListener("click", (e) => {
    const btn = e.target.closest(".task-btn");
    if (!btn) return;
    const id = btn.dataset.win;
    const win = windows[id];
    if (!win) return;
    if (win.minimized) restoreWindow(id);
    else if (activeWin === id) minimizeWindow(id);
    else {
      restoreWindow(id);
      setWindowActive(id);
    }
  });

  // Window chrome
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".qt-btn-win[data-win]");
    if (!btn) return;
    const id = btn.dataset.win;
    const act = btn.dataset.act;
    if (act === "close") closeWindow(id);
    else if (act === "min") minimizeWindow(id);
    else if (act === "max") toggleMaximize(id);
  });

  $("#pcm-titlebar").addEventListener("pointerdown", (e) => {
    if (e.target.closest(".qt-btn-win")) return;
    startDrag(e, "pcm");
  });
  $("#term-titlebar").addEventListener("pointerdown", (e) => {
    if (e.target.closest(".qt-btn-win")) return;
    startDrag(e, "term");
  });
  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", endDrag);

  pcmWindow.addEventListener("mousedown", () => setWindowActive("pcm"));
  termWindow.addEventListener("mousedown", () => setWindowActive("term"));

  // PCManFM navigation
  $("#pcm-sidebar").addEventListener("click", (e) => {
    const item = e.target.closest(".pcm-side-item");
    if (!item) return;
    navigatePcm(item.dataset.place);
  });

  $("#pcm-content").addEventListener("dblclick", (e) => {
    const item = e.target.closest(".pcm-item");
    if (!item) return;
    if (item.dataset.type === "folder" && item.dataset.place) {
      navigatePcm(item.dataset.place);
    } else {
      showToast(`Opening ${item.dataset.name}…`);
    }
  });
  $("#pcm-content").addEventListener("click", (e) => {
    const item = e.target.closest(".pcm-item");
    $$(".pcm-item.selected").forEach((el) => el.classList.remove("selected"));
    if (item) item.classList.add("selected");
  });

  $("#pcm-back").addEventListener("click", () => {
    if (pcmHistIndex <= 0) return;
    pcmHistIndex -= 1;
    pcmPlace = pcmHistory[pcmHistIndex];
    renderPcm();
  });
  $("#pcm-forward").addEventListener("click", () => {
    if (pcmHistIndex >= pcmHistory.length - 1) return;
    pcmHistIndex += 1;
    pcmPlace = pcmHistory[pcmHistIndex];
    renderPcm();
  });
  $("#pcm-up").addEventListener("click", () => {
    const place = FS[pcmPlace];
    if (place?.parent) navigatePcm(place.parent);
  });
  $("#pcm-home").addEventListener("click", () => navigatePcm("home"));
  $("#pcm-reload").addEventListener("click", () => renderPcm());
  $("#pcm-new-tab").addEventListener("click", () => showToast("New tab (preview)"));
  $("#pcm-go").addEventListener("click", () => showToast("Go to location…"));
  ["pcm-view-icon", "pcm-view-thumb", "pcm-view-list"].forEach((id) => {
    const el = $(`#${id}`);
    if (!el) return;
    el.addEventListener("click", () => {
      $$(".pcm-tb-btn.active-view").forEach((b) => b.classList.remove("active-view"));
      el.classList.add("active-view");
    });
  });

  // Volume
  $("#volume-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    const open = volumePopup.hidden;
    closeAllPopovers();
    if (open) {
      volumePopup.hidden = false;
      $("#volume-btn").setAttribute("aria-expanded", "true");
    }
  });
  $("#volume-slider").addEventListener("input", (e) => setVolume(Number(e.target.value)));

  // Clock
  $("#clock-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    const open = clockPopup.hidden;
    closeAllPopovers();
    if (open) {
      updateClock();
      clockPopup.hidden = false;
      $("#clock-btn").setAttribute("aria-expanded", "true");
    }
  });

  // Show desktop
  $("#show-desktop-btn").addEventListener("click", showDesktop);

  // Desktop switcher
  $("#deskswitch").addEventListener("click", (e) => {
    const btn = e.target.closest(".desk-btn");
    if (!btn) return;
    $$(".desk-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    showToast(`Switched to Desktop ${btn.dataset.desk}`);
  });

  // Tray stubs
  $("#net-btn").addEventListener("click", () => showToast("Network: Connected (Wired)"));
  $("#mount-btn").addEventListener("click", () => showToast("No removable media"));

  // Global click / escape
  document.addEventListener("click", (e) => {
    if (menuOpen && !fancyMenu.contains(e.target) && e.target !== menuBtn && !menuBtn.contains(e.target)) {
      closeMenu();
    }
    if (!volumePopup.hidden && !volumePopup.contains(e.target) && e.target !== $("#volume-btn") && !$("#volume-btn").contains(e.target)) {
      volumePopup.hidden = true;
      $("#volume-btn").setAttribute("aria-expanded", "false");
    }
    if (!clockPopup.hidden && !clockPopup.contains(e.target) && e.target !== $("#clock-btn") && !$("#clock-btn").contains(e.target)) {
      clockPopup.hidden = true;
      $("#clock-btn").setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
    if (typeof startOverlay !== "undefined" && startOverlay && !startOverlay.hidden) {
      /* Keep overlay until they choose fullscreen or continue */
      return;
    }
      if (!leaveDialog.hidden) closeLeave();
      else if (!aboutDialog.hidden) closeAbout();
      else if (menuOpen) closeMenu();
      else closeAllPopovers();
    }
  });

  // Prevent menu close when clicking inside
  fancyMenu.addEventListener("click", (e) => e.stopPropagation());
  volumePopup.addEventListener("click", (e) => e.stopPropagation());
  clockPopup.addEventListener("click", (e) => e.stopPropagation());
}

/* ---------- Boot ---------- */

/* ---------- Theme switcher (preview chrome) ---------- */

const THEME_MENU_ICONS = {
  clearlooks: "assets/status/mainmenu.svg",
  ambiance: "assets/status/mainmenu-ambiance.svg",
  dark: "assets/status/mainmenu-dark.svg",
};

function setTheme(theme) {
  if (!THEME_MENU_ICONS[theme]) theme = "clearlooks";
  document.documentElement.setAttribute("data-theme", theme);
  const logo = $("#menu-logo");
  if (logo) logo.src = THEME_MENU_ICONS[theme];
  $$("#theme-chooser .theme-opt").forEach((btn) => {
    const active = btn.dataset.theme === theme;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

function init() {
  initEvents();
  setVolume(65);
  updateClock();
  setInterval(updateClock, 1000);

  const params = new URLSearchParams(location.search);
  const initial =
    params.get("theme") ||
    document.documentElement.getAttribute("data-theme") ||
    "clearlooks";
  setTheme(initial);

  $$("#theme-chooser .theme-opt").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      setTheme(btn.dataset.theme);
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

/* ---------- Start overlay / fullscreen ---------- */

const startOverlay = document.getElementById("start-overlay");
const startFullscreenBtn = document.getElementById("start-fullscreen-btn");
const startSkipBtn = document.getElementById("start-skip-btn");

function dismissStartOverlay() {
  if (startOverlay) startOverlay.hidden = true;
}

async function enterFullscreenPreview() {
  const target = document.documentElement;
  try {
    if (target.requestFullscreen) await target.requestFullscreen();
    else if (target.webkitRequestFullscreen) await target.webkitRequestFullscreen();
    else if (target.msRequestFullscreen) await target.msRequestFullscreen();
  } catch {
    /* Browser denied or unsupported — still enter the mockup */
  }
  dismissStartOverlay();
}

if (startFullscreenBtn) {
  startFullscreenBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    enterFullscreenPreview();
  });
}

if (startSkipBtn) {
  startSkipBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dismissStartOverlay();
  });
}

if (startOverlay) {
  startOverlay.addEventListener("click", (e) => e.stopPropagation());
  startOverlay.querySelector(".start-overlay-card")?.addEventListener("click", (e) => e.stopPropagation());
}
