import React from "react";
import { createPortal } from "react-dom";
import { useCart, cartTotal } from "../store/cart";
import { Trash2, Plus, Minus, X, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import config from "../data/config.json";
import { trackOrder } from "../utils/analytics";
import { isRestaurantOpen } from "../utils/timeUtils";

// Helper function to get current language item data
function getCurrentItemData(itemId, language, menuData) {
  const menu = menuData?.[language] || menuData?.en || { items: [] };
  return menu.items.find(item => item.id === itemId);
}

// ---- WhatsApp formatting with robust RTL handling ----
function formatWhatsApp(state, t, i18n, menuData) {
  const labelForKey = (k, itemData) => {
    const optionConfig = itemData?.options?.[k];
    return optionConfig?.label || 
      ({
        size: t("opt_size"),
        extras: t("opt_extras"),
        notes: t("opt_notes"),
        doneness: t("opt_doneness"),
        sugar: t("opt_sugar"),
        pasta_type: t("opt_pasta_type"),
        bread: t("opt_bread"),
        wrap: t("opt_wrap"),
      }[k] || k);
  };

  const isRTL = i18n.language === "ar" || i18n.language === "he";

  // Get current language item data for each cart item
  const cartItemsWithData = state.items.map(cartItem => {
    const itemData = getCurrentItemData(cartItem.id, i18n.language, menuData);
    return {
      ...cartItem,
      name: itemData?.name || `Item ${cartItem.id}`,
      image: itemData?.image || '/placeholder.jpg',
      desc: itemData?.desc || ''
    };
  });

  // Simple RTL handling - just use the text as is for better WhatsApp compatibility
  const rtlLine = (s) => s;

  const lines = [];

  if (isRTL) {
    // Header with emoji at end for RTL
    const headerText = t("wa_order_header").replace(/[🍽️📋👤🙏]/g, "").trim();
    lines.push(rtlLine(`${headerText} 🍽️`));
    lines.push("");

    // Items with emoji at end for RTL
    const itemsText = t("wa_order_items").replace(/[🍽️📋👤🙏]/g, "").trim();
    lines.push(rtlLine(`${itemsText} 📋`));

    cartItemsWithData.forEach((i, index) => {
      const opts = [];
      if (i.options) {
        // Get current language item data to find option choices
        const itemData = getCurrentItemData(i.id, i18n.language, menuData);
        
        for (const [k, v] of Object.entries(i.options)) {
          if (v == null || v === "" || (Array.isArray(v) && v.length === 0)) continue;
          const label = labelForKey(k, itemData);
          const optionConfig = itemData?.options?.[k];
          
          // Translate option values using current language choices
          let translatedValue = v;
          if (optionConfig && optionConfig.choices) {
            if (Array.isArray(v)) {
              // Multi-select options - v contains indices
              translatedValue = v.map(index => {
                const choice = optionConfig.choices[index];
                return typeof choice === 'string' ? choice : choice?.name || `Choice ${index}`;
              }).join(", ");
            } else {
              // Single-select options - v is an index
              if (typeof v === 'number' && optionConfig.choices[v]) {
                const choice = optionConfig.choices[v];
                translatedValue = typeof choice === 'string' ? choice : choice?.name || `Choice ${v}`;
              } else {
                // Fallback for old data that might still have string values
                const choice = optionConfig.choices.find(c => 
                  (typeof c === 'string' ? c : c.name) === v
                );
                translatedValue = typeof choice === 'string' ? choice : choice?.name || v;
              }
            }
          }
          
          opts.push(`${label}: ${translatedValue}`);
        }
      }

      // More readable format for RTL
      lines.push(rtlLine(`${index + 1}. ${i.name}`));
      lines.push(rtlLine(`   ${t("wa_quantity")}: ${i.quantity}`));
      if (opts.length > 0) {
        opts.forEach(opt => {
          lines.push(rtlLine(`   ${opt}`));
        });
      }
      lines.push("");
    });

    // Customer info with emoji at end for RTL
    const customerText = t("wa_customer_info").replace(/[🍽️📋👤🙏]/g, "").trim();
    lines.push(rtlLine(`${customerText} 👤`));

    if (state.customer?.name) {
      lines.push(`${t("wa_customer_name")}: ${state.customer.name}`);
      lines.push(""); // Add line break after name
    }
    if (state.customer?.phone) {
      lines.push(`${t("wa_customer_phone")}: ${state.customer.phone}`);
    }
    if (state.customer?.type) {
      const typeLabel = state.customer.type === "delivery" ? t("delivery") : t("pickup");
      const typeEmoji = state.customer.type === "delivery" ? "🚚" : "🏪";
      lines.push(`${t("wa_order_type")}:`);
      lines.push(`• ${typeLabel} ${typeEmoji}`);
      lines.push(""); // Add line break after order type
    }

    lines.push("");
    // Confirm message with emoji at end for RTL
    const confirmText = t("wa_confirm_order").replace(/[🍽️📋👤🙏]/g, "").trim();
    lines.push(rtlLine(`${confirmText} 🙏`));

    return lines.join("\n");
  }

  // LTR (English) – with emojis and delivery indicators
  const headerText = t("wa_order_header").replace(/[🍽️📋👤🙏]/g, "").trim();
  lines.push(`🍽️ ${headerText}`);
  lines.push("");

  const itemsText = t("wa_order_items").replace(/[🍽️📋👤🙏]/g, "").trim();
  lines.push(`📋 ${itemsText}`);

  cartItemsWithData.forEach((i, index) => {
    const opts = [];
    if (i.options) {
      // Get current language item data to find option choices
      const itemData = getCurrentItemData(i.id, i18n.language, menuData);
      
      for (const [k, v] of Object.entries(i.options)) {
        if (v == null || v === "" || (Array.isArray(v) && v.length === 0)) continue;
        const label = labelForKey(k, itemData);
        const optionConfig = itemData?.options?.[k];
        
        // Translate option values using current language choices
        let translatedValue = v;
        if (optionConfig && optionConfig.choices) {
          if (Array.isArray(v)) {
            // Multi-select options - v contains indices
            translatedValue = v.map(index => {
              const choice = optionConfig.choices[index];
              return typeof choice === 'string' ? choice : choice?.name || `Choice ${index}`;
            }).join(", ");
          } else {
            // Single-select options - v is an index
            if (typeof v === 'number' && optionConfig.choices[v]) {
              const choice = optionConfig.choices[v];
              translatedValue = typeof choice === 'string' ? choice : choice?.name || `Choice ${v}`;
            } else {
              // Fallback for old data that might still have string values
              const choice = optionConfig.choices.find(c => 
                (typeof c === 'string' ? c : c.name) === v
              );
              translatedValue = typeof choice === 'string' ? choice : choice?.name || v;
            }
          }
        }
        
        opts.push(`${label}: ${translatedValue}`);
      }
    }

    // More readable format for English
    lines.push(`${index + 1}. ${i.name}`);
    lines.push(`   ${t("wa_quantity")}: ${i.quantity}`);
    if (opts.length > 0) {
      opts.forEach(opt => {
        lines.push(`   ${opt}`);
      });
    }
    lines.push("");
  });

  const customerText = t("wa_customer_info").replace(/[🍽️📋👤🙏]/g, "").trim();
  if (isRTL) {
    lines.push(`${customerText} 👤`);
  } else {
    lines.push(`👤 ${customerText}`);
  }

  if (state.customer?.name) {
    lines.push(`${t("wa_customer_name")}: ${state.customer.name}`);
    lines.push(""); // Add line break after name
  }
  if (state.customer?.phone) {
    lines.push(`${t("wa_customer_phone")}: ${state.customer.phone}`);
  }
  if (state.customer?.type) {
    const typeLabel = state.customer.type === "delivery" ? t("delivery") : t("pickup");
    const typeEmoji = state.customer.type === "delivery" ? "🚚" : "🏪";
    lines.push(`${t("wa_order_type")}:`);
    lines.push(`• ${typeLabel} ${typeEmoji}`);
    lines.push(""); // Add line break after order type
  }

  lines.push("");
  const confirmText = t("wa_confirm_order").replace(/[🍽️📋👤🙏]/g, "").trim();
  if (isRTL) {
    lines.push(`${confirmText} 🙏`);
  } else {
    lines.push(`${confirmText} 🙏`);
  }

  return lines.join("\n");
}

export function CartDrawer({ open, onClose, menuData }) {
  const { state, dispatch } = useCart();
  const { t, i18n } = useTranslation();

  const total = cartTotal(state.items);
  const message = formatWhatsApp(state, t, i18n, menuData);
  const [showPopup, setShowPopup] = React.useState(false);
  const [showNameError, setShowNameError] = React.useState(false);
  const [showClosedNotice, setShowClosedNotice] = React.useState(false);

  React.useEffect(() => {
    if (!open) {
      setShowPopup(false);
      setShowClosedNotice(false);
    }
  }, [open]);

  // Get current language item data for each cart item
  const cartItemsWithData = state.items.map(cartItem => {
    const itemData = getCurrentItemData(cartItem.id, i18n.language, menuData);
    return {
      ...cartItem,
      name: itemData?.name || `Item ${cartItem.id}`,
      image: itemData?.image || '/placeholder.jpg',
      desc: itemData?.desc || ''
    };
  });

  const isRTL = document.dir === "rtl";
  const sideClass = isRTL ? "left-0" : "right-0";
  const borderClass = isRTL ? "border-r" : "border-l";
  const closedTransform = isRTL ? "-translate-x-full" : "translate-x-full";

  const handleSendClick = () => {
    if (config.hours && !isRestaurantOpen(config.hours)) {
      setShowClosedNotice(true);
      return;
    }

    // Check if name is required and provided
    if (!state.customer.name || state.customer.name.trim() === '') {
      setShowNameError(true);
      return;
    }
    setShowNameError(false);
    setShowPopup(true);
  };

  const send = async () => {
    try {
      // Track the order before sending to WhatsApp
      const items = state.items || [];
      const totalAmount = cartTotal(items);
      const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
      
      // Don't await - fire and forget, so it doesn't block the WhatsApp redirect
      trackOrder({
        orderType: state.customer?.type || 'unknown',
        itemCount: itemCount,
        totalAmount: totalAmount,
        customerName: state.customer?.name || 'anonymous',
        customerPhone: state.customer?.phone || 'not provided',
        items: items.map(item => ({
          id: item.id,
          name: item.name || `Item ${item.id}`,
          quantity: item.quantity,
          price: item.price || 0,
          totalPrice: item.totalPrice || item.price || 0,
          options: item.options || {}
        })),
        whatsappMessage: message // This contains the full formatted WhatsApp message
      }).catch(error => {
        console.warn('Failed to track order, but continuing with WhatsApp:', error);
      });
      
    } catch (error) {
      console.warn('Error in order tracking, but continuing with WhatsApp:', error);
    }
    
    // Always proceed with WhatsApp regardless of tracking success
    const url = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setShowPopup(false);
  };

  // Render into <body> so nothing on the page can sit above it
  return createPortal(
    <div className={`fixed inset-0 z-[10000] ${open ? "" : "pointer-events-none"}`}>
      {/* overlay (under the drawer) */}
      <div
        className={`absolute inset-0 z-0 bg-black/60 transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* drawer */}
      <aside
        className={`absolute top-0 ${sideClass} z-10
        h-full w-full sm:w-[430px]
        bg-[var(--card)] shadow-2xl overflow-hidden
        flex flex-col
        ${borderClass} border-white/10
        transform transition-transform ${open ? "translate-x-0" : closedTransform}`}
      >
        {/* header */}
        <div className="p-4 flex items-center justify-between border-b border-white/10">
          <div className="text-lg font-semibold">{t("cart")}</div>
          <button className="tab" onClick={onClose}>
            <X />
          </button>
        </div>

        {/* content (fills the drawer) */}
        <div className="flex-1 p-4 space-y-3 overflow-auto">
          {cartItemsWithData.length === 0 ? (
            <div className="h-full flex items-center justify-center text-white/60 text-lg font-medium">
              {t("empty_cart")}
            </div>
          ) : (
            cartItemsWithData.map((i) => (
              <div key={i.key} className="card p-3">
                <div className="flex gap-3">
                  <img
                    src={i.image}
                    alt={i.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">{i.name}</div>
                      <button
                        className="text-red-400"
                        onClick={() => dispatch({ type: "REMOVE", key: i.key })}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    {(() => {
                      // Get current language item data to find all available options
                      const itemData = getCurrentItemData(i.id, i18n.language, menuData);
                      const allOptions = itemData?.options || {};
                      const selectedOptions = i.options || {};
                      
                      // Create a combined view of all options (selected + defaults)
                      const optionsToShow = {};
                      
                      // Add selected options
                      Object.entries(selectedOptions).forEach(([k, v]) => {
                        if (v !== null && v !== "" && (!Array.isArray(v) || v.length > 0)) {
                          optionsToShow[k] = v;
                        }
                      });
                      
                      // Add default options that aren't already selected
                      Object.entries(allOptions).forEach(([k, optionConfig]) => {
                        if (!optionsToShow[k] && optionConfig.choices && optionConfig.choices.length > 0) {
                          // For select options, show the first choice (default)
                          if (optionConfig.type === 'select') {
                            optionsToShow[k] = 0; // First choice is default
                          }
                        }
                      });
                      
                      return (
                        <div className="text-xs text-white/60">
                          {Object.entries(optionsToShow).map(([k, v]) => {
                            if (!v && v !== 0) return null;
                            
                            const optionConfig = itemData?.options?.[k];
                          
                          // Use the actual label from the menu data, fallback to translation
                          const label = optionConfig?.label || 
                            {
                              size: t("opt_size"),
                              extras: t("opt_extras"),
                              notes: t("opt_notes"),
                              doneness: t("opt_doneness"),
                              sugar: t("opt_sugar"),
                              pasta_type: t("opt_pasta_type"),
                              bread: t("opt_bread"),
                              wrap: t("opt_wrap"),
                            }[k] || k;
                          
                          // Translate option values using current language choices
                          let translatedValue = v;
                          let totalOptionCharge = 0;
                          
                          if (optionConfig && optionConfig.choices) {
                            if (Array.isArray(v)) {
                              // Multi-select options - v contains indices
                              translatedValue = v.map(index => {
                                const choice = optionConfig.choices[index];
                                if (choice && typeof choice === 'object' && choice.price) {
                                  totalOptionCharge += choice.price;
                                }
                                return typeof choice === 'string' ? choice : choice?.name || `Choice ${index}`;
                              }).join(", ");
                            } else {
                              // Single-select options - v is an index
                              if (typeof v === 'number' && optionConfig.choices[v]) {
                                const choice = optionConfig.choices[v];
                                if (choice && typeof choice === 'object' && choice.price) {
                                  totalOptionCharge = choice.price;
                                }
                                translatedValue = typeof choice === 'string' ? choice : choice?.name || `Choice ${v}`;
                              } else {
                                // Fallback for old data that might still have string values
                                const choice = optionConfig.choices.find(c => 
                                  (typeof c === 'string' ? c : c.name) === v
                                );
                                if (choice && typeof choice === 'object' && choice.price) {
                                  totalOptionCharge = choice.price;
                                }
                                translatedValue = typeof choice === 'string' ? choice : choice?.name || v;
                              }
                            }
                          }
                          
                            return (
                              <div key={k}>
                                <span className="text-white/70">{label}:</span>{" "}
                                {translatedValue}
                                {totalOptionCharge > 0 && (
                                  <span className="text-green-400 ml-1">
                                    +{totalOptionCharge}{config.currency}
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      );
                    })()}

                    <div className="flex items-center gap-2 pt-2">
                      <button
                        className="tab"
                        onClick={() => dispatch({ type: "DEC", key: i.key })}
                      >
                        <Minus size={14} />
                      </button>
                      <div className="min-w-[2rem] text-center">{i.quantity}</div>
                      <button
                        className="tab"
                        onClick={() => dispatch({ type: "INC", key: i.key })}
                      >
                        <Plus size={14} />
                      </button>
                      <div className="flex-1" />
                      <div className="font-semibold">
                        {(i.totalPrice || i.price) * i.quantity}
                        {((i.totalPrice || i.price) * i.quantity) > 0 && config.currency}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* footer only when items exist */}
        {cartItemsWithData.length > 0 && (
          <div className="p-4 border-t border-white/10 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <label className="text-sm">
                <div className="text-white/70">
                  {t("customer_name")} <span className="text-red-400">*</span>
                </div>
                <input
                  value={state.customer.name}
                  onChange={(e) => {
                    dispatch({ type: "SET_CUSTOMER", payload: { name: e.target.value } });
                    if (showNameError && e.target.value.trim()) {
                      setShowNameError(false);
                    }
                  }}
                  className={`w-full bg-[var(--card)] border rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-green-400/30 transition-all duration-200 ${
                    showNameError || (!state.customer.name || state.customer.name.trim() === '') 
                      ? 'border-red-400/50 focus:border-red-400' 
                      : 'border-white/10 focus:border-green-400/50'
                  }`}
                  placeholder={t("customer_name")}
                />
                {showNameError && (
                  <div className="text-red-400 text-xs mt-1">
                    {t("name_required")}
                  </div>
                )}
              </label>
              <label className="text-sm">
                <div className="text-white/70">{t("order_type")}</div>
                <select
                  value={state.customer.type}
                  onChange={(e) =>
                    dispatch({ type: "SET_CUSTOMER", payload: { type: e.target.value } })
                  }
                >
                  <option value="pickup">{t("pickup")}</option>
                  <option value="delivery">{t("delivery")}</option>
                </select>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <button className="btn-outline" onClick={() => dispatch({ type: "CLEAR" })}>
                {t("clear_cart")}
              </button>
              <div className="text-lg font-bold">
                {t("total")}: {total}
                {total > 0 && config.currency}
              </div>
            </div>

            {/* Delivery Notice */}
            {state.customer.type === "delivery" && (
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3 text-sm">
                <div className="font-medium text-orange-400 mb-1">🚚 {t("delivery_notice")}</div>
              </div>
            )}

            <button className="btn w-full" onClick={handleSendClick}>
              {t("checkout")}
            </button>
          </div>
        )}
      </aside>

      {showClosedNotice && (
        <div className="absolute inset-0 z-30 flex items-center justify-center p-4">
          <div className="bg-[var(--card)] border border-red-500/30 rounded-xl p-6 max-w-md w-full shadow-2xl">
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold">{t("important_notice_cart")}</h3>
              <p className="text-sm text-white/80">{t("restaurant_closed_message")}</p>
              <button className="btn w-full" onClick={() => setShowClosedNotice(false)}>
                {t("close")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Important Notice Popup */}
      {showPopup && (
        <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
          <div className="bg-[var(--card)] border border-white/10 rounded-xl p-6 max-w-md w-full shadow-2xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={32} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t("important_notice_cart")}</h3>
              <div className="text-sm text-white/80 space-y-2 mb-6">
                <p>• {t("order_wait")}</p>
                <p>• {t("order_no_response")}</p>
              </div>
              <div className="flex gap-3">
                <button className="btn-outline flex-1" onClick={() => setShowPopup(false)}>
                  {t("cancel")}
                </button>
                <button className="btn flex-1" onClick={send}>
                  {t("continue_to_whatsapp")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
}
