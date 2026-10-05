import React, { useState } from "react";
import { ZoomIn, X } from "lucide-react";
import { GALLERY_DATA, GalleryItem } from "../../data/gallery";

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = [
    { id: "todos", label: "Todas as Obras" },
    { id: "construcao", label: "Construção do Zero" },
    { id: "reforma", label: "Reformas Gerais" },
    { id: "telhado", label: "Telhados & Calhas" },
    { id: "acabamento", label: "Pisos & Acabamento" },
    { id: "lazer", label: "Área Gourmet & Lazer" },
  ];

  const filteredPhotos = activeCategory === "todos"
    ? GALLERY_DATA
    : GALLERY_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="galeria-obras" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a2540] tracking-tight">
              Qualidade em Cada Detalhe
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Confira registros de construções novas do zero, reformas residenciais e comerciais, telhados, pisos, porcelanatos e áreas de lazer executadas por nossa equipe em São Pedro da Aldeia e região.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs font-bold px-3.5 py-2 rounded-full transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#0284c7] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-100 border border-slate-200/80 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  width={600}
                  height={450}
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                  <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                    <ZoomIn className="w-4 h-4" />
                    Ampliar foto
                  </span>
                </div>
              </div>

              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#0a2540] group-hover:text-[#0284c7] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.alt}
                className="w-full h-full max-h-[70vh] object-contain"
              />
            </div>

            <div className="p-6 bg-slate-900">
              <h3 className="text-lg sm:text-xl font-black text-white mb-2">
                {selectedPhoto.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
