import React from "react";
import { Truck, Zap, Wrench, Droplet, Home } from "lucide-react";
import { SERVICES_DATA } from "../../data/services";

interface ServicesBarProps {
  onSelectService: (slug: string) => void;
}

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case "Truck":
      return <Truck className="w-10 h-10 text-[#0284c7] stroke-[1.6]" />;
    case "Zap":
      return <Zap className="w-10 h-10 text-[#0284c7] stroke-[1.6]" />;
    case "Wrench":
      return <Wrench className="w-10 h-10 text-[#0284c7] stroke-[1.6]" />;
    case "Droplet":
      return <Droplet className="w-10 h-10 text-[#0284c7] stroke-[1.6]" />;
    default:
      return <Home className="w-10 h-10 text-[#0284c7] stroke-[1.6]" />;
  }
};

export const ServicesBar: React.FC<ServicesBarProps> = ({ onSelectService }) => {
  return (
    <section id="services-bar" className="w-full bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {SERVICES_DATA.map((service) => (
            <button
              key={service.slug}
              onClick={() => onSelectService(service.slug)}
              className="group py-6 px-4 text-center flex flex-col items-center justify-center hover:bg-white transition-all cursor-pointer focus:outline-none"
            >
              <div className="mb-3 flex items-center justify-center text-[#0284c7] group-hover:scale-110 transition-transform">
                {getServiceIcon(service.iconName)}
              </div>
              <h3 className="text-xs sm:text-[13px] font-extrabold text-[#0a2540] group-hover:text-[#0284c7] transition-colors leading-snug max-w-[170px]">
                {service.name}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
