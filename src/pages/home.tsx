import { Button } from "../components/button"
import SectionTitle from "../components/section-title"
import GradientSubtitle from "../components/gradient-subtitle"
import { projects } from "../constants/projects"
import { techs } from "../constants/techs"
import { ArrowUpRight, BookOpenText, Briefcase } from "lucide-react"
import GradientBox from "../components/gradient-box"

// TODO:
// [x] Escrever textos
// [] Implementar formulário de contato
// [] Estruturar 1 projeto
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
        <p className="text-center font-poppins leading-loose text-darkGray dark:text-lightGray">
          Desenvolvedora web apaixonada por aprender e trilhando o caminho para
          se tornar fullstack. Não tenho medo de novos desafios e vejo neles
          ótimas oportunidades para aprimorar meu conhecimento.
        </p>
        <Button variant="primary">Baixar meu currículo</Button>
      </section>

      {/* SOBRE MIM */}
      <section id="about" className="flex flex-col items-center space-y-8">
        <SectionTitle>Sobre mim</SectionTitle>
        <div className="space-y-8 text-center text-darkPurple dark:text-lightGray">
          <p className="text-sm">
            Olá, sou desenvolvedora de software e estudante de Análise e
            Desenvolvimento de Sistemas, buscando me tornar desenvolvedora
            fullstack. Atualmente estou trabalhando como desenvolvedora
            frontend, desenvolvendo interfaces acessíveis, escaláveis e
            amigáveis ao usuário. Curiosamente, meu primeiro contato com o
            desenvolvimento web foi ainda criança, quando criava páginas usando
            HTML e CSS para mostrar meus desenhos e quadrinhos sobre jogos que
            eu jogava na época.
          </p>
          <p className="text-sm">
            Sou movida pela resolução de problemas e gosto de entender o
            funcionamento das coisas, e por isso, amo estudar, fazer anotações e
            buscar novos projetos para colocar o estudo em prática. Me considero
            perfeccionista, então estou sempre buscando melhorar e aprimorar meu
            código. Trabalhei por mais de 10 anos na área cultural como
            musicista e educadora musical, e isso me trouxe habilidades de
            comunicação, organização e principalmente a disciplina, que
            considero muito importante para o trabalho com tecnologia.
          </p>
          <p className="text-sm">
            No meu tempo livre, gosto de jogar no computador (principalmente
            Fortnite), sair com amigos ou estudar algum assunto de interesse.
            Fique à vontade para me procurar em minhas redes ou e-mail. Vamos
            conversar!
          </p>
        </div>
        <Button variant="primary">
          <a href="mailto:m.ebbecke@gmail.com">Fale comigo</a>
        </Button>
      </section>

      {/* TECNOLOGIAS */}
      <section id="techs" className="flex flex-col items-center space-y-8">
        <div className="flex flex-col items-center">
          <SectionTitle>Tecnologias</SectionTitle>
          <GradientSubtitle>Minha stack</GradientSubtitle>
        </div>

        {/* ícones das techs */}
        <div className="flex flex-col items-center space-y-8">
          <GradientBox className="space-y-4">
            <div className="w-12 rounded-lg bg-[#BCE7FA] p-3 text-plumber dark:bg-[#F5F8FF]">
              <Briefcase />
            </div>
            <h3 className="font-semibold text-darkGray dark:text-white">
              Usando atualmente
            </h3>
            <div className="grid grid-cols-3 items-center gap-6">
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
          </GradientBox>

          <GradientBox className="space-y-4">
            <div className="w-12 rounded-lg bg-[#BCE7FA] p-3 text-plumber dark:bg-[#F5F8FF]">
              <BookOpenText />
            </div>
            <h3 className="font-semibold text-darkGray dark:text-white">
              Estudando
            </h3>
            <div className="grid grid-cols-3 items-center gap-6">
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
          </GradientBox>
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
