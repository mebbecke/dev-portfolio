import { Button } from "../components/button"
import { techs } from "../constants/techs"

const Home = () => {
  return (
    <main className="space-y-24">
      <section className="flex flex-col items-center space-y-8">
        <div className="relative h-[197px] w-[202px] rounded-full">
          <img
            src="/images/hero.jpg"
            alt="hero"
            className="absolute rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold tracking-tight text-darkGray dark:text-white">
            Marina Ebbecke
          </h1>
          <p className="bg-gradient-to-r from-sky to-darkGray bg-clip-text text-lg font-semibold text-transparent dark:to-white">
            Desenvolvedora web
          </p>
        </div>
        <p className="text-center text-darkGray dark:text-lightGray">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi hic
          unde nesciunt ad modi illum pariatur quidem eum, mollitia qui itaque
          commodi harum beatae accusantium nihil eius ut! Eius, facilis!
        </p>
        <Button variant="primary">
          <a href="mailto:m.ebbecke@gmail.com">Fale comigo</a>
        </Button>
      </section>
      <section className="flex flex-col items-center space-y-8">
        <h2 className="text-3xl font-bold text-darkGray dark:text-white">
          Sobre mim
        </h2>
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
      <section className="flex flex-col items-center space-y-8">
        <h2 className="text-3xl font-bold text-darkGray dark:text-white">
          Tecnologias
        </h2>

        {/* ÍCONES DAS TECHS */}
        <div className="flex flex-col items-center space-y-8">
          <h3 className="bg-gradient-to-r from-sky to-darkGray bg-clip-text text-lg font-semibold text-transparent dark:to-white">
            Usando atualmente
          </h3>
          <div className="grid grid-cols-3 flex-row items-center gap-6">
            {techs
              .find((tech) => tech.status === "using")
              ?.techs.map((tech) => (
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
              ))}
          </div>

          <h3 className="bg-gradient-to-r from-sky to-darkGray bg-clip-text text-lg font-semibold text-transparent dark:to-white">
            Estudando
          </h3>
          <div className="grid grid-cols-3 flex-row items-center gap-6">
            {techs
              .find((tech) => tech.status === "learning")
              ?.techs.map((tech) => (
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
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
