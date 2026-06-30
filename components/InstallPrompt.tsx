"use client";

import { useEffect, useState } from "react";

// Minimal type for the (non-standard) beforeinstallprompt event.
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const DISMISS_KEY = "pwa-prompt-dismissed";
const DISMISS_DAYS = 14;
const SHOW_DELAY_MS = 3000;

type Mode = "ios" | "android" | null;

const strings = {
  en: {
    iosTitle: "Install ImmigrationSpain on your iPhone",
    iosStep1: "Tap the Share button",
    iosStep2: "Choose “Add to Home Screen”",
    installTitle: "Install ImmigrationSpain",
    installBody: "Add our app for fast, one-tap access to immigration services.",
    install: "Install",
    close: "Close",
  },
  es: {
    iosTitle: "Instala ImmigrationSpain en tu iPhone",
    iosStep1: "Toca el botón Compartir",
    iosStep2: "Elige “Añadir a pantalla de inicio”",
    installTitle: "Instala ImmigrationSpain",
    installBody: "Añade nuestra app para acceder a los servicios de inmigración con un toque.",
    install: "Instalar",
    close: "Cerrar",
  },
};

function getLang(): "en" | "es" {
  if (typeof window === "undefined") return "en";
  return new URLSearchParams(window.location.search).get("lang") === "es"
    ? "es"
    : "en";
}

function isStandalone(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (navigator as unknown as { standalone?: boolean }).standalone === true
  );
}

function isIos(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const iPhoneish = /iPhone|iPad|iPod/.test(ua);
  // iPadOS reports as Mac but exposes touch points.
  const iPadOs =
    /Macintosh/.test(ua) && typeof navigator.maxTouchPoints === "number" && navigator.maxTouchPoints > 1;
  return iPhoneish || iPadOs;
}

function isIosSafari(): boolean {
  const ua = navigator.userAgent;
  // Exclude in-app browsers / other engines (Chrome on iOS = CriOS, Firefox = FxiOS, etc.)
  return isIos() && !/CriOS|FxiOS|EdgiOS|OPiOS|Mercury/.test(ua);
}

function recentlyDismissed(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = window.localStorage.getItem(DISMISS_KEY);
    if (!raw) return false;
    const ts = parseInt(raw, 10);
    if (Number.isNaN(ts)) return false;
    return Date.now() - ts < DISMISS_DAYS * 24 * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

export default function InstallPrompt() {
  const [mode, setMode] = useState<Mode>(null);
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState<"en" | "es">("en");
  const [deferredEvent, setDeferredEvent] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    if (isStandalone() || recentlyDismissed()) return;

    setLang(getLang());

    let revealTimer: ReturnType<typeof setTimeout> | undefined;

    const reveal = () => {
      revealTimer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    };

    // Android / desktop Chromium path.
    const onBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredEvent(e as BeforeInstallPromptEvent);
      setMode("android");
      reveal();
    };

    const onInstalled = () => {
      setVisible(false);
      setMode(null);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onInstalled);

    // iOS Safari has no beforeinstallprompt — show manual instructions.
    if (isIosSafari()) {
      setMode("ios");
      reveal();
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onInstalled);
      if (revealTimer) clearTimeout(revealTimer);
    };
  }, []);

  function dismiss() {
    try {
      window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      /* ignore storage failures */
    }
    setVisible(false);
  }

  async function handleInstall() {
    if (!deferredEvent) return;
    await deferredEvent.prompt();
    try {
      await deferredEvent.userChoice;
    } finally {
      setDeferredEvent(null);
      dismiss();
    }
  }

  if (!mode) return null;

  const t = strings[lang];

  return (
    <div
      role="dialog"
      aria-label={mode === "ios" ? t.iosTitle : t.installTitle}
      aria-hidden={!visible}
      className={`fixed z-[1000] left-1/2 -translate-x-1/2 bottom-4 w-[calc(100%-2rem)] max-w-sm
        sm:left-auto sm:right-4 sm:translate-x-0 sm:w-80
        rounded-2xl border border-slate-700 bg-slate-800 text-slate-100 shadow-2xl
        transition-all duration-300 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
            <span className="text-amber-400 font-extrabold text-lg leading-none tracking-tight">
              IS
            </span>
          </div>
          <div className="flex-1 min-w-0">
            {mode === "ios" ? (
              <>
                <p className="font-semibold text-sm text-white">{t.iosTitle}</p>
                <ol className="mt-2 space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <span className="text-amber-400 font-semibold">1.</span>
                    <span>{t.iosStep1}</span>
                    {/* iOS share glyph: square with up arrow */}
                    <svg
                      className="w-4 h-4 text-amber-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 3v12" />
                      <path d="M8 7l4-4 4 4" />
                      <path d="M6 12v6a2 2 0 002 2h8a2 2 0 002-2v-6" />
                    </svg>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-amber-400 font-semibold">2.</span>
                    <span>{t.iosStep2}</span>
                  </li>
                </ol>
              </>
            ) : (
              <>
                <p className="font-semibold text-sm text-white">{t.installTitle}</p>
                <p className="mt-1 text-xs text-slate-300">{t.installBody}</p>
                <button
                  type="button"
                  onClick={handleInstall}
                  className="mt-3 w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
                >
                  {t.install}
                </button>
              </>
            )}
          </div>
          <button
            type="button"
            onClick={dismiss}
            aria-label={t.close}
            className="flex-shrink-0 -mr-1 -mt-1 p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
