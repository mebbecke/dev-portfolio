import { Button } from "../components/button"
import SectionTitle from "../components/section-title"
import GradientSubtitle from "../components/gradient-subtitle"
import { projects } from "../constants/projects"
import { techs } from "../constants/techs"
import { ArrowUpRight } from "lucide-react"

// TODO:
// [] Escrever textos
// [] Estruturar 1 projeto
// [] Implementar formulário de contato
// [] Botão do menu fixado?

const Home = () => {
  return (
    <main className="space-y-24">
      {/* HERO */}
      <section id="hero" className="flex flex-col items-center space-y-8">
        <div className="relative h-[197px] w-[202px] rounded-full">
          <img
            src="/images/hero.jpg"
            alt="hero"
            className="absolute rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-poppins text-4xl font-bold tracking-tight text-darkGray dark:text-white">
            Marina Ebbecke
          </h1>
          <GradientSubtitle className="font-poppins text-lg">
            Desenvolvedora web
          </GradientSubtitle>
        </div>
        <p className="text-center font-poppins text-darkGray dark:text-lightGray">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi hic
          unde nesciunt ad modi illum pariatur quidem eum, mollitia qui itaque
          commodi harum beatae accusantium nihil eius ut! Eius, facilis!
        </p>
        <Button variant="primary">
          <a href="mailto:m.ebbecke@gmail.com">Fale comigo</a>
        </Button>
      </section>

      {/* SOBRE MIM */}
      <section id="about" className="flex flex-col items-center space-y-8">
        <SectionTitle>Sobre mim</SectionTitle>
        <div className="space-y-8 text-center text-darkPurple dark:text-lightGray">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            obcaecati impedit aspernatur neque velit nulla voluptatibus officia
            praesentium nam. Numquam labore, mollitia iusto esse assumenda
            voluptatum iste! Voluptates, dolorem odit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            obcaecati impedit aspernatur neque velit nulla voluptatibus officia
            praesentium nam. Numquam labore, mollitia iusto esse assumenda
            voluptatum iste! Voluptates, dolorem odit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            obcaecati impedit aspernatur neque velit nulla voluptatibus officia
            praesentium nam. Numquam labore, mollitia iusto esse assumenda
            voluptatum iste! Voluptates, dolorem odit.
          </p>
        </div>
        <Button variant="primary">Baixar meu currículo</Button>
      </section>

      {/* TECNOLOGIAS */}
      <section id="techs" className="flex flex-col items-center space-y-8">
        <div className="flex flex-col items-center">
          <SectionTitle>Tecnologias</SectionTitle>
          <GradientSubtitle>Minha stack</GradientSubtitle>
        </div>
        {/* ícones das techs */}
        <div className="flex flex-col items-center space-y-8">
          <h3 className="text-darkPurple dark:text-lightGray">
            Usando atualmente
          </h3>
          <div className="grid grid-cols-3 flex-row items-center gap-6">
            {techs.map(
              (tech) =>
                tech.status === "using" && (
                  <figure
                    key={tech.name}
                    className="flex flex-col items-center space-y-1"
                  >
                    <div className="relative h-14 w-14">
                      <img src={tech.icon} alt={tech.name} />
                    </div>
                    {/* <figcaption className="text-xs dark:text-lightGray">
			                {tech.name}
		                </figcaption> */}
                  </figure>
                ),
            )}
          </div>

          <h3 className="text-darkPurple dark:text-lightGray">Estudando</h3>
          <div className="grid grid-cols-3 flex-row items-center gap-6">
            {techs.map(
              (tech) =>
                tech.status === "learning" && (
                  <figure
                    key={tech.name}
                    className="flex flex-col items-center space-y-1"
                  >
                    <div className="relative h-14 w-14">
                      <img src={tech.icon} alt={tech.name} />
                    </div>
                    {/* <figcaption className="text-xs dark:text-lightGray">
			                {tech.name}
		                </figcaption> */}
                  </figure>
                ),
            )}
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projects" className="flex flex-col items-center space-y-8">
        <div className="flex flex-col items-center">
          <SectionTitle>Projetos</SectionTitle>
          <GradientSubtitle>Meus trabalhos</GradientSubtitle>
        </div>

        {projects.map((project) => (
          <div key={project.title} className="flex flex-col space-y-4">
            <figure>
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl"
              />
            </figure>
            <h3 className="text-lg font-semibold text-darkGray dark:text-lightGray">
              {project.title}
            </h3>
            <p className="text-darkPurple dark:text-lightGray">
              {project.description}
            </p>

            <div className="flex flex-row items-end justify-between">
              <div className="flex flex-row gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-plumber dark:text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button size="small">
                <a href={project.link}>
                  <ArrowUpRight size={20} />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </section>

      {/* CONTATO */}
      <section id="contact" className="flex flex-col items-center space-y-8">
        <div className="flex flex-col items-center">
          <SectionTitle>Contato</SectionTitle>
          <GradientSubtitle>Me envie uma mensagem</GradientSubtitle>
        </div>

        {/* Formulário de contato */}
        <form className="flex w-full flex-col space-y-3 text-darkPurple dark:text-white">
          <label htmlFor="name" className="text-sm font-semibold">
            Nome
          </label>
          <input id="name" type="text" name="name" />
          <label htmlFor="email" className="text-sm font-semibold">
            Email
          </label>
          <input id="email" type="email" name="email" />
          <label htmlFor="message" className="text-sm font-semibold">
            Mensagem
          </label>
          <textarea id="message" name="message" />
          <Button variant="secondary">Enviar mensagem</Button>
        </form>

        <div className="flex flex-row gap-1 rounded-xl border-2 border-darkGray p-3">
          <img src="Gmail.svg" alt="Gmail" />
          <p className="text-sm text-darkGray dark:text-gray-400">
            m.ebbecke@gmail.com
          </p>
        </div>
      </section>
    </main>
  )
}

export default Home
