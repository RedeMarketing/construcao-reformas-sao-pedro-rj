/**
 * Utilitário de Rastreamento e Eventos de Conversão (GA4, GTM, Meta Pixel)
 * Fornece interface padronizada sem bloquear a execução caso scripts externos não estejam carregados.
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export type ConversionEvent =
  | "calculator_started"
  | "calculator_completed"
  | "whatsapp_clicked"
  | "quote_requested"
  | "contact_form_submitted"
  | "city_page_viewed"
  | "service_viewed"
  | "benefits_modal_opened"
  | "service_photo_clicked";

export function trackEvent(eventName: ConversionEvent, params?: Record<string, any>) {
  try {
    // 1. Google Tag Manager / DataLayer
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: eventName,
        timestamp: new Date().toISOString(),
        ...params,
      });

      // 2. Google Analytics 4 direto se gtag existir
      if (typeof window.gtag === "function") {
        window.gtag("event", eventName, params);
      }

      // 3. Meta Pixel se fbq existir
      if (typeof window.fbq === "function") {
        if (eventName === "quote_requested" || eventName === "whatsapp_clicked") {
          window.fbq("track", "Lead", params);
        } else {
          window.fbq("trackCustom", eventName, params);
        }
      }
    }
  } catch (err) {
    // Falha silenciosa para não quebrar a UX
    console.debug(`[Analytics Event] ${eventName}`, params);
  }
}
