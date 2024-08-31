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
  {
    title: "Projeto 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste obcaecati impedit aspernatur neque velit nulla voluptatibus officia praesentium nam. Numquam labore, mollitia iusto esse assumenda voluptatum iste! Voluptates, dolorem odit.",
    image: "/images/project-2.jpg",
    websiteUrl: "#",
    githubUrl: "#",
    techs: ["Node.js", "Express", "TypeScript"],
  },
  {
    title: "Projeto 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste obcaecati impedit aspernatur neque velit nulla voluptatibus officia praesentium nam. Numquam labore, mollitia iusto esse assumenda voluptatum iste! Voluptates, dolorem odit.",
    image: "/images/project-3.jpg",
    websiteUrl: "#",
    githubUrl: "#",
    techs: ["JavaScript", "HTML5", "CSS3"],
  },
]
