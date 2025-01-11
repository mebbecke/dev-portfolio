import { ArrowUpRight, Github } from "lucide-react"
import { Project } from "../types/project"
import { Button } from "./button"

interface ProjectCardProps {
  project: Project
}
export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex w-[337px] flex-col space-y-4">
      <figure>
        <img src={project.image} alt={project.title} className="rounded-xl" />
      </figure>
      <h3 className="text-lg font-semibold text-darkGray dark:text-lightGray">
        {project.title}
      </h3>
      <p className="text-darkPurple dark:text-lightGray">
        {project.description}
      </p>

      <div className="flex items-end justify-between">
        <div className="flex flex-row flex-wrap gap-2">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="text-xs text-plumber dark:text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-row gap-2">
          <Button size="small" variant="ghost">
            <a href={project.githubUrl}>
              <Github size={20} />
            </a>
          </Button>
          <Button size="small">
            <a href={project.websiteUrl} target="_blank">
              <ArrowUpRight size={20} />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
