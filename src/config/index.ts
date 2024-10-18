export const PRODUCT_CATEGORIES = [
  {
    label: "UI Kits",
    value: "ui-kits" as const,
    featured: [
      {
        name: "Figma UI Kit",
        href: "#",
        imageSrc: "/ui-kit.png",
      },
      {
        name: "Shadcn UI Kit",
        href: "#",
        imageSrc: "/shadcn-ui.png",
      },
      {
        name: "Magic UI Kit",
        href: "#",
        imageSrc: "/magic-ui.png",
      },
    ],
  },
  {
    label: "Starter Kits",
    value: "starter-kits" as const,
    featured: [
      {
        name: "Figma UI Kit",
        href: "#",
        imageSrc: "/ui-kit.png",
      },
      {
        name: "Shadcn UI Kit",
        href: "#",
        imageSrc: "/shadcn-ui.png",
      },
      {
        name: "Magic UI Kit",
        href: "#",
        imageSrc: "/magic-ui.png",
      },
    ],
  },
];

export type Category = (typeof PRODUCT_CATEGORIES)[number];
