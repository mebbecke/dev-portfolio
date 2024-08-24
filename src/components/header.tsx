import { MenuIcon, X } from "lucide-react"
import { Button } from "./button"
import ThemeToggleButton from "./theme-toggle"
import * as Dialog from "@radix-ui/react-dialog"

// TODO:
// [x] Sidebar da versão mobile
// [] Links para as seções
// [] Download do CV

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between px-8 py-6">
      <h1 className="light:text-black font-poppins text-2xl font-bold dark:text-white">
        m.e.
      </h1>
      <div className="flex flex-row items-center gap-3">
        <ThemeToggleButton />
        <Dialog.Root>
          <Dialog.Trigger>
            <Button variant="ghost" size="small">
              <MenuIcon />
            </Button>
          </Dialog.Trigger>
          <Dialog.Overlay className="fixed inset-0 z-40 bg-black opacity-30" />
          <Dialog.Content className="fixed bottom-0 right-0 top-0 z-50 flex w-80 flex-col bg-ice dark:bg-plumber lg:w-96">
            <div className="flex flex-row items-center justify-between p-6">
              <Dialog.Title className="font-poppins text-2xl font-bold dark:text-white">
                m.e.
              </Dialog.Title>
              <Dialog.Close className="flex w-full justify-end">
                <X className="dark:text-white" />
              </Dialog.Close>
            </div>
            <nav className="border-y border-y-gray-400 p-6 dark:border-y-darkGray">
              <ul className="space-y-4 text-gray-800 dark:text-white">
                <li>Sobre</li>
                <li>Tecnologias</li>
                <li>Projetos</li>
                <li>Contato</li>
              </ul>
            </nav>
            <div className="flex justify-center p-6">
              <Button variant="primary" size="full">
                Baixar CV
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Root>
      </div>
    </header>
  )
}

export default Header
