interface ProjectProps {
  title: string
  description: string
  image: string
  link: string
  techs: string[]
}

export const projects: ProjectProps[] = [
  {
    title: "Projeto 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste obcaecati impedit aspernatur neque velit nulla voluptatibus officia praesentium nam. Numquam labore, mollitia iusto esse assumenda voluptatum iste! Voluptates, dolorem odit.",
    image: "/images/project-1.jpg",
    link: "#",
    techs: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Projeto 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste obcaecati impedit aspernatur neque velit nulla voluptatibus officia praesentium nam. Numquam labore, mollitia iusto esse assumenda voluptatum iste! Voluptates, dolorem odit.",
    image: "/images/project-2.jpg",
    link: "#",
    techs: ["Node.js", "Express", "TypeScript"],
  },
  {
    title: "Projeto 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste obcaecati impedit aspernatur neque velit nulla voluptatibus officia praesentium nam. Numquam labore, mollitia iusto esse assumenda voluptatum iste! Voluptates, dolorem odit.",
    image: "/images/project-3.jpg",
    link: "#",
    techs: ["JavaScript", "HTML5", "CSS3"],
  },
]
