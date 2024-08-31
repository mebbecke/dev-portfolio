interface ProjectProps {
  title: string
  description: string
  image: string
  websiteUrl: string
  githubUrl: string
  techs: string[]
}

export const projects: ProjectProps[] = [
  {
    title: "Portfólio Dev",
    description:
      "Portfólio pessoal desenvolvido para mostrar meus projetos e artigos sobre meu aprendizado em tecnologia.",
    image: "/images/project-1.jpg",
    websiteUrl: "https://marinaebbecke.dev.br/",
    githubUrl: "https://github.com/mebbecke/dev-portfolio",
    techs: ["React", "TypeScript", "TailwindCSS"],
  },
]
