import React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function ImageLightbox({ open, src, alt, onClose }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const sideClass = document.dir === "rtl" ? "left-3" : "right-3";

  return createPortal(
    <div
      className="fixed inset-0 z-[11000] bg-black/80 p-4 flex items-center justify-center cursor-zoom-out"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt || ""}
          className="w-full h-auto rounded-2xl shadow-2xl select-none"
          draggable="false"
        />
        <button
          aria-label="Close"
          className={`absolute top-3 ${sideClass} bg-black/60 hover:bg-black/80 text-white rounded-full p-2 cursor-pointer`}
          onClick={onClose}
        >
          <X size={18} />
        </button>
      </div>
    </div>,
    document.body
  );
}
