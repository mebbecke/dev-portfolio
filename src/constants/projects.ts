import { Project } from "../types/project"

export const projects: Project[] = [
  {
    title: "Carômetro Escolar",
    description:
      "Aplicativo web para facilitar a identificação de alunos de uma sala de aula.",
    image: "/images/carometro-image.png",
    websiteUrl: "https://carometro-escolar.vercel.app/",
    githubUrl: "https://github.com/mebbecke/carometro-escolar",
    techs: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Meu Portfólio",
    description:
      "Portfólio pessoal desenvolvido para mostrar meus projetos e artigos sobre meu aprendizado em tecnologia.",
    image: "/images/my-portfolio-image.png",
    websiteUrl: "https://marinaebbecke.dev.br/",
    githubUrl: "https://github.com/mebbecke/dev-portfolio",
    techs: ["React", "TypeScript", "TailwindCSS"],
  },
]
