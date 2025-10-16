import React from "react";
import { distanceKm } from "../utils/geoUtils";
import { useTranslation } from "react-i18next";
import MenuModal from "./MenuModal";

export default function RestaurantGrid({ base, filtered, selectedMood, displayedCity }) {
  const { t } = useTranslation();
  const [selectedRestaurant, setSelectedRestaurant] = React.useState(null);


  if (!base)
    return <div className="text-center text-white/60 py-8">{t("chooseLocation")}</div>;
  if (filtered.length === 0)
    return (
      <div className="text-center text-white/60 py-8">
        😔 {t("noRestaurants", "No restaurants found near")} {displayedCity}
      </div>
    );

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {filtered.map((r) => {
          const dist = distanceKm(base.lat, base.lon, r.lat, r.lon).toFixed(1);
          return (
            <div
              key={r.id}
              onClick={() => setSelectedRestaurant(r)}
              className="cursor-pointer card overflow-hidden hover:scale-[1.02] transition block"
            >
              <div className="w-full bg-black/20">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-full h-36 sm:h-44 md:h-48 object-cover bg-white"
                />
              </div>
              <div className="p-3 sm:p-4 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-semibold">{r.name}</h3>
                </div>
                <p className="text-xs sm:text-sm text-white/70">{t(`cuisine_${r.cuisineKey}`)}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Menu Modal */}
      {selectedRestaurant && (
        <MenuModal
          url={selectedRestaurant.href}
          name={selectedRestaurant.name}
          onClose={() => setSelectedRestaurant(null)}
        />
      )}
    </>
  );
}
