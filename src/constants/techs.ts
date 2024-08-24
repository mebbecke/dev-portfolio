export type Tech = {
  name: string
  icon: string
  category: string
}

export const techs = [
  {
    status: "using",
    techs: [
      { name: "JavaScript", icon: "/JavaScript.svg" },
      { name: "TypeScript", icon: "/TypeScript.svg" },
      { name: "React", icon: "/React.svg" },
      { name: "TailwindCSS", icon: "/TailwindCSS.svg" },
      { name: "Node.js", icon: "/Nodejs.svg" },
      { name: "Git", icon: "/Git.svg" },
    ],
  },
  {
    status: "learning",
    techs: [
      { name: "Express", icon: "/Express.svg" },
      { name: "Next.js", icon: "/Nextjs.svg" },
      { name: "PostgreSQL", icon: "/PostgreSQL.svg" },
      { name: "Docker", icon: "/Docker.svg" },
    ],
  },
]
