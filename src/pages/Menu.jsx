import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import config from "../data/config.json";
import CategoryTabs from "../components/CategoryTabs";
import SearchBar from "../components/SearchBar";
import ItemCard from "../components/ItemCard";
import OptionModal from "../components/OptionModal";
import ImageLightbox from "../components/ImageLightbox";
import { useCart } from "../store/cart";
import { isRestaurantOpen } from "../utils/timeUtils";

export default function MenuPage({ menuData }) {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const [category, setCategory] = React.useState("all");
  const [search, setSearch] = React.useState("");
  const [selected, setSelected] = React.useState(null);
  const [preview, setPreview] = React.useState(null);
  const [showClosedOnLoad, setShowClosedOnLoad] = React.useState(false);
  const { dispatch } = useCart();

  React.useEffect(() => {
    try {
      if (config.hours && !isRestaurantOpen(config.hours)) {
        setShowClosedOnLoad(true);
      }
    } catch (e) {
      // Don’t block UI if parsing fails
    }
  }, []);

  const menu = menuData?.[i18n.language] || menuData?.ar || { items: [], categories: [] };
  const filteredItems = menu.items.filter((it) =>
    (it.name + " " + it.desc).toLowerCase().includes(search.toLowerCase())
  );
  
  // Group items by category when in "all" mode
  const items = category === "all" 
    ? filteredItems.reduce((groups, item) => {
        const cat = item.category;
        if (!groups[cat]) groups[cat] = [];
        groups[cat].push(item);
        return groups;
      }, {})
    : filteredItems.filter((it) => it.category === category);

  const handleAdd = (item) => setSelected(item);
  const handleConfirm = ({ quantity, options }) => {
    dispatch({ type: "ADD", payload: { item: selected, quantity, options } });
  };

  return (
    <div className="py-8">
      {/* Action Buttons - First thing on page */}
      <div className="mb-6 flex gap-3 overflow-x-auto pb-2 no-scrollbar">
        {config.reservation.enabled && (
          <button 
            onClick={() => navigate('/reservation')}
            className="btn-outline flex items-center gap-2 flex-shrink-0"
          >
            <span>🍽️</span>
            {t("book_table")}
          </button>
        )}
        <a
          href={config.coords
            ? `https://waze.com/ul?ll=${config.coords.lat},${config.coords.lng}&navigate=yes`
            : `https://waze.com/ul?q=${encodeURIComponent(config.waze_name || config.name)}&navigate=yes`}
          target="_blank"
          rel="noreferrer"
          className="btn-outline flex items-center gap-2 flex-shrink-0"
        >
          <span>📍</span>
          {t("location")}
        </a>
        <a
          href={`tel:${config.phone}`}
          className="btn-outline flex items-center gap-2 flex-shrink-0"
        >
          <span>📞</span>
          {t("call")}
        </a>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
        <h1 className="text-3xl font-bold tracking-tight flex-1">
          {t("menu")}
        </h1>
        <div className="md:w-64">
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </div>

      <CategoryTabs
        categories={menu.categories}
        current={category}
        onChange={setCategory}
      />

      {category === "all" ? (
        // Render grouped items with category headers
        Object.entries(items).map(([categoryName, categoryItems]) => (
          <div key={categoryName} className="mb-8 mt-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1"></div>
              <div className="bg-[var(--card)] border border-white/10 rounded-full px-4 py-2">
                {(() => {
                  const categoryData = menu.categories.find(cat => cat.id === categoryName);
                  return (
                    <div className="flex flex-col items-center gap-1">
                      <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                        {categoryData?.emoji && <span>{categoryData.emoji}</span>}
                        <span>{categoryData?.title || categoryName}</span>
                      </h2>
                      {categoryName === 'breakfast' && (
                        <div className="text-xs text-white/60 bg-white/5 rounded-full px-2 py-1">
                          {t('served_until_13')}
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1"></div>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar items-stretch md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:overflow-x-visible md:pb-0">
              {categoryItems.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  currency={config.currency}
                  onAdd={handleAdd}
                  onPreview={(it) => setPreview({ src: it.image, alt: it.name })}
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        // Render single category items with header
        <div className="mt-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1"></div>
            <div className="bg-[var(--card)] border border-white/10 rounded-full px-4 py-2">
              {(() => {
                const categoryData = menu.categories.find(cat => cat.id === category);
                return (
                  <div className="flex flex-col items-center gap-1">
                    <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                      {categoryData?.emoji && <span>{categoryData.emoji}</span>}
                      <span>{categoryData?.title || category}</span>
                    </h2>
                    {category === 'breakfast' && (
                      <div className="text-xs text-white/60 bg-white/5 rounded-full px-2 py-1">
                        {t('served_until_13')}
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            {items.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                currency={config.currency}
                onAdd={handleAdd}
                onPreview={(it) => setPreview({ src: it.image, alt: it.name })}
              />
            ))}
          </div>
        </div>
      )}

      <OptionModal
        open={!!selected}
        item={selected}
        onClose={() => setSelected(null)}
        onConfirm={handleConfirm}
      />
      <ImageLightbox
        open={!!preview}
        src={preview?.src}
        alt={preview?.alt}
        onClose={() => setPreview(null)}
      />

      {showClosedOnLoad && (
        <div className="fixed inset-0 z-[9000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative bg-[var(--card)] border border-white/10 rounded-xl p-6 max-w-md w-full shadow-2xl">
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold">{t("important_notice_cart")}</h3>
              <p className="text-sm text-white/80">{t("closed_popup_message")}</p>
              <button className="btn w-full" onClick={() => setShowClosedOnLoad(false)}>
                {t("got_it_button")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
