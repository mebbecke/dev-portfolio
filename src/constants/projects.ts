import { Project } from "../types/project"

export const projects: Project[] = [
  {
    title: "Portfólio Dev",
    description:
      "Portfólio pessoal desenvolvido para mostrar meus projetos e artigos sobre meu aprendizado em tecnologia.",
    image: "/images/portfolio-mockup.png",
    websiteUrl: "https://marinaebbecke.dev.br/",
    githubUrl: "https://github.com/mebbecke/dev-portfolio",
    techs: ["React", "TailwindCSS", "TypeScript"],
  },
  {
    title: "FSW Barber",
    description:
      "Sistema de agendamento de serviços de barbearias desenvolvido no bootcamp Full Stack Week da Full Stack Club.",
    image: "/images/fsw-barber-mockup.png",
    websiteUrl: "https://fsw-barber-wheat-five.vercel.app/",
    githubUrl: "https://github.com/mebbecke/fsw-barber",
    techs: [
      "React",
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "TailwindCSS",
      "TypeScript",
    ],
  },
]
