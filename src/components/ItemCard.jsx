import React from "react";
import { useTranslation } from "react-i18next";
import { PlusCircle } from "lucide-react";

export default function ItemCard({ item, currency, onAdd, onPreview }) {
  const { t } = useTranslation();
  return (
    <div className="card w-full md:w-full text-left overflow-hidden flex flex-col min-w-[280px] md:min-w-0 min-h-[320px]">
      {/* CLICKABLE IMAGE */}
      <div
        className="aspect-[16/10] w-full overflow-hidden bg-black/30 relative group cursor-zoom-in"
        role="button"
        tabIndex={0}
        onClick={() => onPreview?.(item)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onPreview?.(item);
          }
        }}
        aria-label={item.name}
        title={item.name}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
        />
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between gap-4">
          <div className="text-lg font-semibold">{item.name}</div>
          <div className="text-white/90 font-semibold">
            {item.price}
            {item.price > 0 && currency}
          </div>
        </div>
        <div className="text-sm text-white/70 line-clamp-2">{item.desc}</div>
        
        {/* Size options display */}
        {item.options?.size && (
          <div className="text-xs text-white/60">
            <div className="flex flex-wrap gap-1">
              {item.options.size.choices.map((choice, index) => {
                const choiceName = typeof choice === 'string' ? choice : choice.name
                const choicePrice = typeof choice === 'object' ? choice.price : 0
                const totalPrice = item.price + choicePrice
                return (
                  <span key={index} className="bg-white/10 px-2 py-1 rounded text-xs">
                    {choiceName} {totalPrice}{totalPrice > 0 && currency}
                  </span>
                )
              })}
            </div>
          </div>
        )}
        {!item.noCart && (
          <div className="pt-2 mt-auto">
            <button className="btn w-full" onClick={() => onAdd(item)}>
              <PlusCircle size={18} /> {t("add_to_cart")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
