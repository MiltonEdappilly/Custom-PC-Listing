export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  image: string;
  images: string[];
  gpu: string;
  cpu: string;
  ram: string;
  storage: string;
  motherboard: string;
  cooler: string;
  psu: string;
  case: string;
  os: string;
  highlights: string[];
  description: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

export const products: Product[] = [
  {
    id: "1033728",
    slug: "anigma-ultra-flagship-intel-ultra9-285k-rtx5080",
    name: "ANIGMA Pre-built Gaming Desktop Intel Ultra 9 285K / 96GB RAM / 2TB NVMe M.2 SSD / GeForce RTX 5080 16GB / ASUS PRIME Z890-P WIFI / ASUS TUF GAMING GT502 HORIZON / Lian Li Hydro-Shift LCD 360 RGB / Windows 11 Pro",
    shortName: "ANIGMA ULTRA FLAGSHIP — RTX 5080 + Intel Ultra 9 285K",
    price: 18999,
    badge: "New",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80",
      "https://images.unsplash.com/photo-1593640408182-31c228b32e4e?w=600&q=80",
      "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600&q=80",
    ],
    gpu: "NVIDIA GeForce RTX 5080 16GB",
    cpu: "Intel Core Ultra 9 285K",
    ram: "96GB DDR5",
    storage: "2TB NVMe M.2 SSD",
    motherboard: "ASUS PRIME Z890-P WIFI",
    cooler: "Lian Li Hydro-Shift LCD 360 RGB Liquid CPU Cooler",
    psu: "1000W 80 Plus Gold",
    case: "ASUS TUF GAMING GT502 HORIZON TG ARGB Black",
    os: "Windows 11 Pro",
    highlights: [
      "Intel Core Ultra 9 285K processor",
      "NVIDIA GeForce RTX 5080 16GB",
      "96GB DDR5 High-Speed RAM",
      "2TB NVMe M.2 Gen 5 SSD",
      "360mm LCD AIO Liquid Cooler",
      "ASUS PRIME Z890-P WIFI Motherboard",
      "Wi-Fi 7 & Bluetooth 5.4",
      "Windows 11 Pro pre-installed",
    ],
    description:
      "The ultimate gaming and creative powerhouse. Built with Intel's latest Core Ultra 9 285K and the flagship NVIDIA GeForce RTX 5080, this machine handles anything you throw at it — 4K gaming, AI workloads, content creation, and beyond. Features 96GB of blazing-fast DDR5 RAM and a 2TB Gen5 NVMe SSD.",
    inStock: true,
    rating: 4.9,
    reviewCount: 12,
  },
  {
    id: "1033727",
    slug: "anigma-x3d-pro-elite-ryzen9800x3d-rtx5070ti",
    name: "ANIGMA Pre-built Gaming Desktop Ryzen 7 9800X3D / 64GB DDR5 RAM / 2TB NVMe M.2 SSD / GeForce RTX 5070 Ti 16GB / Asus PRIME X870-P WIFI / Acegeek MERCURY R425 Pro Black / DeepCool LD360 ARGB AIO / Windows 11 Pro",
    shortName: "ANIGMA X3D PRO ELITE — RTX 5070 Ti + Ryzen 7 9800X3D",
    price: 14999,
    badge: "New",
    image: "https://images.unsplash.com/photo-1593640408182-31c228b32e4e?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1593640408182-31c228b32e4e?w=600&q=80",
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80",
      "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600&q=80",
    ],
    gpu: "NVIDIA GeForce RTX 5070 Ti 16GB",
    cpu: "AMD Ryzen 7 9800X3D",
    ram: "64GB DDR5",
    storage: "2TB NVMe M.2 SSD",
    motherboard: "ASUS PRIME X870-P WIFI",
    cooler: "DeepCool LD360 ARGB AIO 360mm Liquid CPU Cooler",
    psu: "850W 80 Plus Gold",
    case: "Acegeek MERCURY R425 Pro Black",
    os: "Windows 11 Pro",
    highlights: [
      "AMD Ryzen 7 9800X3D with 3D V-Cache",
      "NVIDIA GeForce RTX 5070 Ti 16GB",
      "64GB DDR5 RAM",
      "2TB NVMe M.2 SSD",
      "360mm ARGB AIO Cooler",
      "ASUS PRIME X870-P WIFI Motherboard",
      "Wi-Fi 7 & Bluetooth 5.4",
      "Windows 11 Pro pre-installed",
    ],
    description:
      "Engineered for elite 1440p and 4K gaming, the X3D Pro Elite pairs AMD's 3D V-Cache technology with the RTX 5070 Ti. The Ryzen 7 9800X3D's massive L3 cache gives it an edge in gaming that clock-speed alone can't match. 64GB DDR5 and a 2TB NVMe SSD ensure zero bottlenecks.",
    inStock: true,
    rating: 4.8,
    reviewCount: 8,
  },
  {
    id: "1000128",
    slug: "anigma-titan-white-i9-14900kf-rtx4080super",
    name: "ANIGMA Pre-built Gaming PC Intel Core i9-14900KF / Z790 WIFI Motherboard / 64GB RAM / 3TB SSD / GeForce RTX 4080 SUPER 16GB / 360mm LCD Display AIO RGB / RGB Cables / 1000W PSU / Hyte Y40 Case Black / Windows 11 Pro — White",
    shortName: "ANIGMA TITAN WHITE — RTX 4080 SUPER + i9-14900KF",
    price: 12999,
    originalPrice: 14499,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600&q=80",
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80",
      "https://images.unsplash.com/photo-1593640408182-31c228b32e4e?w=600&q=80",
    ],
    gpu: "NVIDIA GeForce RTX 4080 SUPER 16GB",
    cpu: "Intel Core i9-14900KF",
    ram: "64GB DDR5",
    storage: "3TB SSD",
    motherboard: "Z790 WIFI Motherboard",
    cooler: "360mm LCD Display AIO RGB",
    psu: "1000W 80 Plus Gold",
    case: "Hyte Y40 Black",
    os: "Windows 11 Pro",
    highlights: [
      "Intel Core i9-14900KF 24-core processor",
      "NVIDIA GeForce RTX 4080 SUPER 16GB",
      "64GB DDR5 RAM",
      "3TB SSD storage",
      "360mm LCD AIO with RGB Cables",
      "Z790 WIFI Motherboard",
      "Hyte Y40 panoramic glass case",
      "Windows 11 Pro pre-installed",
    ],
    description:
      "A statement piece as much as a gaming rig. The Titan White features a stunning Hyte Y40 panoramic glass case paired with Intel's flagship i9-14900KF and RTX 4080 SUPER — delivering top-tier 4K performance with immersive RGB aesthetics and a 3TB SSD for your entire library.",
    inStock: true,
    rating: 4.7,
    reviewCount: 21,
  },
  {
    id: "1000127",
    slug: "anigma-titan-black-i7-14700k-rtx4070tisuper",
    name: "ANIGMA Pre-built Gaming PC Intel Core i7-14700K / B760 A Gaming WIFI Motherboard / 64GB RAM / 2TB SSD / GeForce RTX 4070 Ti SUPER 16GB / 360mm LCD Display AIO RGB / 6x 120mm ARGB Fans / 850W PSU / Lian Li 011 Vision Case Black / Windows 11 Pro — Black",
    shortName: "ANIGMA TITAN BLACK — RTX 4070 Ti SUPER + i7-14700K",
    price: 10999,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
      "https://images.unsplash.com/photo-1593640408182-31c228b32e4e?w=600&q=80",
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80",
    ],
    gpu: "NVIDIA GeForce RTX 4070 Ti SUPER 16GB",
    cpu: "Intel Core i7-14700K",
    ram: "64GB DDR5",
    storage: "2TB SSD",
    motherboard: "B760 A Gaming WIFI Motherboard",
    cooler: "360mm LCD Display AIO RGB",
    psu: "850W 80 Plus Gold",
    case: "Lian Li 011 Vision Black",
    os: "Windows 11 Pro",
    highlights: [
      "Intel Core i7-14700K 20-core processor",
      "NVIDIA GeForce RTX 4070 Ti SUPER 16GB",
      "64GB DDR5 RAM",
      "2TB SSD storage",
      "6x 120mm ARGB Fans + 360mm AIO",
      "Lian Li 011 Vision iconic case",
      "B760 A Gaming WIFI Motherboard",
      "Windows 11 Pro pre-installed",
    ],
    description:
      "The Titan Black is the complete package for serious gamers. The RTX 4070 Ti SUPER handles every game at max settings, while the i7-14700K's 20-core architecture breezes through streaming and content creation simultaneously. Six ARGB fans and a 360mm AIO keep everything cool and looking fierce.",
    inStock: true,
    rating: 4.8,
    reviewCount: 34,
  },
  {
    id: "1024637",
    slug: "anigma-x3d-core-ryzen9800x3d-rtx4070super",
    name: "ANIGMA Pre-built Gaming Desktop AMD Ryzen 7-9800X3D / B650M-A WIFI Motherboard / 32GB RAM / 1TB SSD / RTX 4070 Super / 360mm AIO Liquid Cooler / 750W 80 Plus Gold PSU / ASUS A23 Plus TG / Windows 11 Pro",
    shortName: "ANIGMA X3D CORE — RTX 4070 Super + Ryzen 7 9800X3D",
    price: 8499,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
      "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600&q=80",
    ],
    gpu: "NVIDIA GeForce RTX 4070 Super",
    cpu: "AMD Ryzen 7 9800X3D",
    ram: "32GB DDR5",
    storage: "1TB NVMe SSD",
    motherboard: "ASUS B650M-A WIFI",
    cooler: "360mm AIO Liquid Cooler",
    psu: "750W 80 Plus Gold",
    case: "ASUS A23 Plus TG",
    os: "Windows 11 Pro",
    highlights: [
      "AMD Ryzen 7 9800X3D with 3D V-Cache",
      "NVIDIA GeForce RTX 4070 Super",
      "32GB DDR5 RAM",
      "1TB NVMe SSD",
      "360mm AIO Liquid Cooler",
      "ASUS B650M-A WIFI Motherboard",
      "ASUS A23 Plus TG Case",
      "Windows 11 Pro pre-installed",
    ],
    description:
      "The X3D CORE brings AMD's legendary 3D V-Cache gaming advantage at a more accessible price point. Paired with the RTX 4070 Super, it dominates 1440p gaming and holds its own in 4K. Perfect for gamers who want maximum FPS without compromise.",
    inStock: true,
    rating: 4.9,
    reviewCount: 17,
  },
  {
    id: "1024636",
    slug: "anigma-elite-ryzen9700x-rtx4070super",
    name: "ANIGMA Pre-built Gaming Desktop AMD Ryzen 7-9700X / B650M-A WIFI Motherboard / 32GB RAM / 1TB SSD / RTX 4070 Super / AG620 CPU Air Cooler / 750W 80 Plus Gold PSU / DEEPCOOL CASE CH360 / Windows 11 Pro",
    shortName: "ANIGMA ELITE — RTX 4070 Super + Ryzen 7 9700X",
    price: 7499,
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600&q=80",
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    ],
    gpu: "NVIDIA GeForce RTX 4070 Super",
    cpu: "AMD Ryzen 7 9700X",
    ram: "32GB DDR5",
    storage: "1TB NVMe SSD",
    motherboard: "ASUS B650M-A WIFI",
    cooler: "DeepCool AG620 CPU Air Cooler",
    psu: "750W 80 Plus Gold",
    case: "DEEPCOOL CH360",
    os: "Windows 11 Pro",
    highlights: [
      "AMD Ryzen 7 9700X 8-core processor",
      "NVIDIA GeForce RTX 4070 Super",
      "32GB DDR5 RAM",
      "1TB NVMe SSD",
      "DeepCool AG620 Dual-tower Air Cooler",
      "ASUS B650M-A WIFI Motherboard",
      "DEEPCOOL CH360 Compact Case",
      "Windows 11 Pro pre-installed",
    ],
    description:
      "The ANIGMA ELITE delivers outstanding 1440p gaming performance in a compact form. The Ryzen 7 9700X's efficient Zen 5 architecture pairs beautifully with the RTX 4070 Super, while the DeepCool AG620 provides excellent thermal headroom in a clean, understated build.",
    inStock: true,
    rating: 4.7,
    reviewCount: 29,
  },
  {
    id: "1047912",
    slug: "anigma-nexgen-ryzen9700x-rtx5060ti",
    name: "ANIGMA Pre-built Gaming Desktop AMD Ryzen 7 9700X / 32GB RAM / 1TB M.2 SSD / NVIDIA GeForce RTX 5060 Ti / ASUS PRIME B860M-A WIFI Motherboard / Deep Cool CG530 4F Black Case / AIO RGB 360mm Liquid Cooler / Windows 11 Pro",
    shortName: "ANIGMA NEXGEN — RTX 5060 Ti + Ryzen 7 9700X",
    price: 6499,
    badge: "New",
    image: "https://images.unsplash.com/photo-1562976540-1502c2145851?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1562976540-1502c2145851?w=600&q=80",
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600&q=80",
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=80",
    ],
    gpu: "NVIDIA GeForce RTX 5060 Ti",
    cpu: "AMD Ryzen 7 9700X",
    ram: "32GB DDR5",
    storage: "1TB M.2 SSD",
    motherboard: "ASUS PRIME B860M-A WIFI",
    cooler: "AIO RGB 360mm Liquid Cooler",
    psu: "650W 80 Plus Gold",
    case: "DeepCool CG530 4F Black",
    os: "Windows 11 Pro",
    highlights: [
      "AMD Ryzen 7 9700X Zen 5 processor",
      "NVIDIA GeForce RTX 5060 Ti (next-gen architecture)",
      "32GB DDR5 RAM",
      "1TB M.2 NVMe SSD",
      "360mm RGB AIO Liquid Cooler",
      "ASUS PRIME B860M-A WIFI Motherboard",
      "DeepCool CG530 4F compact case",
      "Windows 11 Pro pre-installed",
    ],
    description:
      "The NEXGEN brings next-generation GPU architecture to the mainstream. The RTX 5060 Ti's Blackwell architecture delivers exceptional 1080p and 1440p performance with DLSS 4 support. Combined with the Ryzen 7 9700X, this is the best entry point into next-gen gaming.",
    inStock: true,
    rating: 4.6,
    reviewCount: 6,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
