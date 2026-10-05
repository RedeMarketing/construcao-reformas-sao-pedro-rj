import React from "react";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Navegação estrutural (Breadcrumb)" className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 font-medium">
        <li>
          <button
            onClick={() => onNavigate("/")}
            className="flex items-center gap-1 hover:text-[#0284c7] transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Início</span>
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <li className="text-slate-300">
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li>
                {isLast || !item.path ? (
                  <span className="text-slate-800 font-bold" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <button
                    onClick={() => item.path && onNavigate(item.path)}
                    className="hover:text-[#0284c7] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
