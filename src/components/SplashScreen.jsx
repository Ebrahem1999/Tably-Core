import React from "react";

export default function SplashScreen({ setShowSplash, setDropdownOpen }) {
  return (
    <div className="fixed inset-0 z-[9999] bg-[var(--bg)]/95 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="w-full max-w-sm text-center">
        <div className="mx-auto mb-5 grid place-items-center">
          <div className="rounded-2xl bg-white/90 p-4 shadow-md">
            <img src="/logo.png" alt="Tably" className="h-12 w-12 object-contain" />
          </div>
        </div>
        <h2 className="text-xl font-extrabold text-white">טוען את המיקום שלך…</h2>
        <p className="mt-2 text-white/70 text-sm">מאתרים מסעדות קרובות אליך. זה לוקח כמה שניות.</p>
        <div className="mt-6 flex items-center justify-center">
          <div className="h-8 w-8 rounded-full border-2 border-white/30 border-t-[var(--primary)] animate-spin" />
        </div>
        <button
          className="mt-8 text-sm text-[var(--accent)] hover:underline"
          onClick={() => {
            setShowSplash(false);
            setDropdownOpen(true);
          }}
        >
          או בחר מיקום ידנית
        </button>
      </div>
    </div>
  );
}
