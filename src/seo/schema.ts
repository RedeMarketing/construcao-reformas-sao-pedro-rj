/**
 * Geradores de Dados Estruturados Schema.org (JSON-LD)
 */

import { BUSINESS_DATA } from "../data/business";
import { CityData } from "../data/cities";
import { ServiceItem } from "../data/services";
import { SITE_URL } from "../constants/config";

export function generateLocalBusinessSchema(currentCity?: CityData) {
  const city = currentCity?.name || BUSINESS_DATA.address.city;
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${BUSINESS_DATA.baseUrl}/#business`,
    "name": currentCity 
      ? `Construção e Reformas em ${city} - Construtor Legalizado` 
      : BUSINESS_DATA.name,
    "alternateName": "Construção Civil e Reformas em São Pedro da Aldeia RJ",
    "description": BUSINESS_DATA.tagline,
    "url": BUSINESS_DATA.baseUrl,
    "logo": `${BUSINESS_DATA.baseUrl}/images/CONSTRU%C3%87%C3%83O%20E%20REFORMAS%20DE%20CASAS%20EM%20SAO%20PEDRO%20DA%20ALDEIA%20RJ-favicon.png`,
    "image": `${BUSINESS_DATA.baseUrl}/images/CONSTRU%C3%87%C3%83O%20E%20REFORMAS%20DE%20CASAS%20EM%20SAO%20PEDRO%20DA%20ALDEIA%20RJ.png`,
    "telephone": BUSINESS_DATA.phoneFormatted,
    "email": BUSINESS_DATA.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_DATA.address.street,
      "addressLocality": city,
      "addressRegion": BUSINESS_DATA.address.stateCode,
      "postalCode": BUSINESS_DATA.address.postalCode,
      "addressCountry": BUSINESS_DATA.address.country,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_DATA.geo.latitude,
      "longitude": BUSINESS_DATA.geo.longitude,
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "São Pedro da Aldeia",
        "sameAs": "https://pt.wikipedia.org/wiki/S%C3%A3o_Pedro_da_Aldeia"
      },
      { "@type": "City", "name": "Cabo Frio" },
      { "@type": "City", "name": "Armação dos Búzios" },
      { "@type": "City", "name": "Arraial do Cabo" },
      { "@type": "City", "name": "Iguaba Grande" },
      { "@type": "City", "name": "Araruama" },
      { "@type": "City", "name": "Saquarema" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "13:00"
      }
    ]
  };
}

export function generateServiceSchema(service: ServiceItem, cityName: string = "São Pedro da Aldeia") {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.name} em ${cityName}`,
    "serviceType": service.name,
    "description": service.shortDescription,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": BUSINESS_DATA.name,
      "url": BUSINESS_DATA.baseUrl,
    },
    "areaServed": {
      "@type": "City",
      "name": cityName
    }
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `${BUSINESS_DATA.baseUrl}${item.url}`
    }))
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": BUSINESS_DATA.name,
    "url": BUSINESS_DATA.baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${BUSINESS_DATA.baseUrl}/cidades?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}
