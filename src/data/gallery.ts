/**
 * Dados da Galeria de Imagens de Obras e Reformas
 * Construtor legalizado em São Pedro da Aldeia RJ com mais de 35 anos de experiência
 */

export interface GalleryItem {
  id: string;
  title: string;
  category: "construcao" | "reforma" | "telhado" | "acabamento" | "lazer";
  description: string;
  imageUrl: string;
  alt: string;
}

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "obra-casa-alto-padrao-sao-pedro",
    title: "Construção Residencial em Alvenaria Estrutural",
    category: "construcao",
    description: "Execução completa de fundações, alvenaria de vedação, lajes e cintamento em condomínio fechado em São Pedro da Aldeia RJ.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80",
    alt: "Construção de casa residencial do zero com alvenaria e fundação em São Pedro da Aldeia RJ"
  },
  {
    id: "reforma-geral-cobertura-telhado",
    title: "Reforma Estrutural de Telhado e Calhas",
    category: "telhado",
    description: "Substituição de vigamento, madeiramento de lei tratado, manta térmica aluminizada e telhas esmaltadas com acabamento impecável.",
    imageUrl: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&w=800&q=80",
    alt: "Reforma e montagem de telhado residencial com estrutura de madeira e telhas em São Pedro da Aldeia"
  },
  {
    id: "assentamento-porcelanato-sala",
    title: "Assentamento de Porcelanato Polido e Retificado",
    category: "acabamento",
    description: "Nivelamento a laser de contrapiso e assentamento milimétrico de porcelanato de grandes formatos em Cabo Frio e região.",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    alt: "Acabamento fino e assentamento de porcelanato polido em piso residencial"
  },
  {
    id: "area-gourmet-churrasqueira-pergolado",
    title: "Construção de Piscinas e Áreas Gourmet com Churrasqueira",
    category: "lazer",
    description: "Execução especializada de piscinas, áreas gourmet integradas, churrasqueiras em alvenaria e pergolados com acabamento de alto padrão em São Pedro da Aldeia e região.",
    imageUrl: "/images/construção de Area gourmet-piscina-pergolado.jpg",
    alt: "Construção de Piscinas e Áreas Gourmet com Churrasqueira e Pergolado em São Pedro da Aldeia"
  },
  {
    id: "reforma-ampliacao-fachada",
    title: "Reforma e Modernização de Fachada Comercial",
    category: "reforma",
    description: "Revitalização completa de fachada com revestimento 3D, nova rede elétrica, pintura emborrachada e iluminação LED embutida.",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    alt: "Reforma de fachada e ampliação predial com construtor legalizado"
  },
  {
    id: "muros-concreto-impermeabilizacao",
    title: "Muros de Fechamento e Impermeabilização Dupla",
    category: "construcao",
    description: "Construção de muros de contenção e fechamento com brocas armadas, cintamento e impermeabilização contra umidade litorânea.",
    imageUrl: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80",
    alt: "Construção de alvenaria e muros reforçados com ferragem protegida contra maresia"
  }
];
