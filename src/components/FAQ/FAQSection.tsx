import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { MAIN_FAQS, FAQItem } from "../../data/faq";

interface FAQSectionProps {
  customFaqs?: FAQItem[];
  title?: string;
  subtitle?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  customFaqs = MAIN_FAQS,
  title = "Perguntas Frequentes sobre Construção e Reformas",
  subtitle = "Tire suas dúvidas sobre obras do zero, reformas, cronogramas, materiais e garantia de construtor legalizado em São Pedro da Aldeia e região.",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a2540] tracking-tight mb-2">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {customFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-sky-300"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#0a2540]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#0284c7]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                    <p>{faq.answer}</p>
                    {faq.category && (
                      <span className="inline-block mt-3 text-[10px] uppercase tracking-wider font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                        Categoria: {faq.category}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
