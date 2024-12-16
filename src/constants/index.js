import {
  css,
  html,
  javascript,
  reactjs,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Über mich",
  },
  {
    id: "work",
    title: "Projekte",
  },
  {
    id: "contact",
    title: "Kontakt",
  },
];

export const services = [
  {
    title: "Web Entwickler",
    icon: html,
  },
  {
    title: "React Native Entwickler",
    icon: reactjs,
  },
  {
    title: "Backend Entwickler",
    icon: javascript,
  },
  {
    title: "Content Creator",
    icon: threejs,
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

export const testimonials = [
  {
    testimonial:
      "Ich dachte, es wäre unmöglich, eine Website zu erstellen, die so gut wie unser Produkt aussieht, aber sie haben mich eines Besseren belehrt.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Ich habe noch nie einen Webentwickler getroffen, der sich so sehr um den Erfolg seiner Kunden kümmert wie sie.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Nach der Optimierung unserer Website durch sie ist unser Verkehr um 50% gestiegen. Wir können ihnen nicht genug danken!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export const projects = [
  {
    name: "Portfolio Website",
    description:
      "Eine moderne Portfolio-Website mit 3D-Animationen, interaktiven Elementen und responsivem Design. Entwickelt mit React, Three.js und Tailwind CSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: reactjs,
    source_code_link: "https://github.com/",
  }
]; 