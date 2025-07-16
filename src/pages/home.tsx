import { BookOpenText, Briefcase } from "lucide-react"
import { Button } from "../components/button"
import GradientBox from "../components/gradient-box"
import GradientSubtitle from "../components/gradient-subtitle"
import { ProjectCard } from "../components/project-card.tsx"
import SectionTitle from "../components/section-title"
import { projects } from "../constants/projects.ts"
import { techs } from "../constants/techs"

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
        <p className="text-center font-poppins leading-loose text-darkGray dark:text-lightGray lg:w-[793px]">
          Desenvolvedora web apaixonada por aprender e trilhando o caminho para
          se tornar fullstack. Não tenho medo de novos desafios e vejo neles
          ótimas oportunidades para aprimorar meu conhecimento.
        </p>
        <Button variant="primary">
          <a href="/cv-marina-ebbecke.pdf" download>
            Baixar meu currículo
          </a>
        </Button>
      </section>

      {/* ABOUT */}
      <section id="about" className="flex flex-col items-center space-y-8">
        <SectionTitle>Sobre mim</SectionTitle>
        <div className="space-y-8 text-center text-base text-darkPurple dark:text-lightGray lg:w-[793px]">
          <p>
            Olá, sou desenvolvedora de software e estudante de Análise e
            Desenvolvimento de Sistemas, buscando me aprimorar como
            desenvolvedora fullstack. Atualmente estou trabalhando como
            <span className="font-bold"> Front-End</span>, criando interfaces
            acessíveis, escaláveis e amigáveis ao usuário. Curiosamente, meu
            primeiro contato com o desenvolvimento web foi ainda criança, quando
            criava páginas no Neopets usando HTML e CSS para mostrar meus
            desenhos e quadrinhos.
          </p>
          <p>
            Sou{" "}
            <span className="font-bold">
              movida pela resolução de problemas
            </span>{" "}
            e gosto de entender o funcionamento das coisas, e por isso,{" "}
            <span className="font-bold">amo estudar</span>, fazer anotações e
            buscar novos projetos para colocar o estudo em prática. Me considero
            perfeccionista, então estou sempre buscando melhorar e aprimorar meu
            código. Trabalhei por mais de 10 anos na área cultural como
            musicista e educadora musical, e isso me trouxe habilidades de
            <span className="font-bold"> comunicação</span>,{" "}
            <span className="font-bold">organização</span> e principalmente a{" "}
            <span className="font-bold">disciplina</span>, que considero muito
            importante para o trabalho com tecnologia.
          </p>
          <p>
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

      {/* SKILLS */}
      <section id="techs" className="flex flex-col items-center space-y-8">
        <div className="flex flex-col items-center">
          <SectionTitle>Tecnologias</SectionTitle>
          <GradientSubtitle>Minha stack</GradientSubtitle>
        </div>

        {/* ícones das techs */}
        <div className="flex flex-col items-center space-y-8">
          <GradientBox className="space-y-4 lg:space-y-8">
            <div className="flex flex-row items-center gap-3">
              <div className="w-12 rounded-lg bg-[#BCE7FA] p-3 text-plumber dark:bg-[#F5F8FF]">
                <Briefcase />
              </div>
              <h3 className="font-semibold text-darkGray dark:text-white">
                Usando atualmente
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-around gap-6">
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
            <div className="flex flex-row items-center gap-3">
              <div className="w-12 rounded-lg bg-[#BCE7FA] p-3 text-plumber dark:bg-[#F5F8FF]">
                <BookOpenText />
              </div>
              <h3 className="font-semibold text-darkGray dark:text-white">
                Estudando
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-around gap-6">
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

      {/* PROJECTS */}
      <section id="projects" className="flex flex-col items-center space-y-8">
        <div className="flex flex-col items-center">
          <SectionTitle>Projetos</SectionTitle>
          <GradientSubtitle>Meus trabalhos</GradientSubtitle>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="flex flex-col items-center space-y-8">
        <div className="flex flex-col items-center">
          <SectionTitle>Contato</SectionTitle>
          <GradientSubtitle>Me envie uma mensagem</GradientSubtitle>
        </div>

        {/* Formulário de contato */}
        {/* <form className="flex w-full flex-col space-y-3 text-darkPurple dark:text-white lg:w-[600px]">
          <label htmlFor="name" className="text-sm font-semibold">
            Nome
          </label>
          <input id="name" type="text" name="name" placeholder="Em breve" />
          <label htmlFor="email" className="text-sm font-semibold">
            Email
          </label>
          <input id="email" type="email" name="email" placeholder="Em breve" />
          <label htmlFor="message" className="text-sm font-semibold">
            Mensagem
          </label>
          <textarea id="message" name="message" placeholder="Em breve" />
          <Button variant="secondary">Enviar mensagem</Button>
        </form> */}

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
