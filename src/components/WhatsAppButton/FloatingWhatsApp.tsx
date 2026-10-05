import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { buildWhatsAppUrl, buildGeneralWhatsAppMessage } from "../../utils/whatsapp";
import { trackEvent } from "../../utils/analytics";
import whatsappIcon from "../../assets/images/whatsapp-icon.png";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    trackEvent("whatsapp_clicked", { source: "floating_button" });
    const url = buildWhatsAppUrl(buildGeneralWhatsAppMessage("Botão Flutuante do Site"));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-20 sm:bottom-24 right-5 sm:right-6 z-40 flex items-center gap-3">
      {/* Tooltip / Speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 py-2 px-3.5 rounded-2xl shadow-xl border border-slate-100 animate-in fade-in slide-in-from-right-2 duration-300">
          <div className="text-left leading-tight">
            <p className="text-xs font-bold text-[#0a2540]">Vai construir ou reformar?</p>
            <p className="text-[11px] text-slate-500">Fale direto com o construtor</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 p-0.5 rounded cursor-pointer"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleClick}
        id="floating-whatsapp-btn"
        aria-label="Falar conosco pelo WhatsApp"
        className="relative w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-0 focus:outline-none"
      >
        {/* Pulse effect rings */}
        <span className="absolute inset-0 rounded-full bg-emerald-400/40 animate-ping pointer-events-none" />

        {/* WhatsApp Icon Image */}
        <img
          src={whatsappIcon}
          alt="WhatsApp Oficial"
          width={56}
          height={56}
          referrerPolicy="no-referrer"
          className="w-14 h-14 object-contain relative z-10 drop-shadow-xl select-none pointer-events-none"
        />
      </button>
    </div>
  );
};
