import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  React.useEffect(() => {
    // Force scroll to top immediately
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Also try the modern approach as backup
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 0);
  }, []);

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="btn-outline flex items-center gap-2 mb-6"
        >
          <ArrowLeft size={16} />
          {t("back_to_menu")}
        </button>
        
        <h1 className="text-3xl font-bold mb-8">{t("privacy_policy")}</h1>
        
        <div className="space-y-6 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">{t("privacy_info_collection")}</h2>
            <p>{t("privacy_info_collection_text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">{t("privacy_info_usage")}</h2>
            <p>{t("privacy_info_usage_text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">{t("privacy_cookies")}</h2>
            <p>{t("privacy_cookies_text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">{t("privacy_whatsapp")}</h2>
            <p>{t("privacy_whatsapp_text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">{t("privacy_data_storage")}</h2>
            <p>{t("privacy_data_storage_text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">{t("privacy_user_rights")}</h2>
            <p>{t("privacy_user_rights_text")}</p>
          </section>

          <div className="pt-6 border-t border-white/10 text-sm text-white/60">
            {t("last_updated")}: 26.9.2025
          </div>
        </div>
      </div>
    </div>
  );
}
