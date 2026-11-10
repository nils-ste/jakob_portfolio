export interface Project {
  slug: string;
  title: string;
  year: string;
  description?: string;
  cover?: string;
  images?: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "globalFascism",
    title: "Global Fascism",
    year: "2026",
    description:
      "Jakob Grüner ist Producer und Researcher für Wissenschafts-, Digital- und Medienpraktiken am Haus der Kulturen der Welt (HKW) Berlin. 2026 war er Gastkurator am CCA Berlin – Center for Contemporary Arts. Zwischen 2021 und 2024 lehrte er am Institut für Kulturwissenschaft der Humboldt-Universität zu Berlin. Er veröffentlichte Aufsätze in unterschiedlichen Sammelbänden, zuletzt im Global Fascisms Reader (2025).",
    cover: "/images/globalFacism.jpg",
  },
  {
    slug: "reisende",
    title: "HKW Reisende",
    year: "2025",
    description:
      "Jakob Grüner ist Producer und Researcher für Wissenschafts-, Digital- und Medienpraktiken am Haus der Kulturen der Welt (HKW) Berlin. 2026 war er Gastkurator am CCA Berlin – Center for Contemporary Arts. Zwischen 2021 und 2024 lehrte er am Institut für Kulturwissenschaft der Humboldt-Universität zu Berlin. Er veröffentlichte Aufsätze in unterschiedlichen Sammelbänden, zuletzt im Global Fascisms Reader (2025).",
    cover: "/images/reisende.jpg",
    images: ["/images/reisende.jpg", "/images/globalFacism.jpg"],
  },
];
