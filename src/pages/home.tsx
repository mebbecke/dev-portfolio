import { Button } from "../components/button"

const Home = () => {
  return (
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
        <h2 className="bg-gradient-to-r from-sky to-white bg-clip-text text-lg font-semibold text-transparent">
          Desenvolvedora web
        </h2>
      </div>
      <p className="dark:text-lightGray text-center text-darkGray">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi hic
        unde nesciunt ad modi illum pariatur quidem eum, mollitia qui itaque
        commodi harum beatae accusantium nihil eius ut! Eius, facilis!
      </p>
      <Button variant="primary">
        <a href="mailto:m.ebbecke@gmail.com">Fale comigo</a>
      </Button>
    </section>
  )
}

export default Home
