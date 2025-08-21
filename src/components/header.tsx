import * as Dialog from '@radix-ui/react-dialog';
import { MenuIcon, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { scrollToSection } from '../utils/scrollToSection';
import { Button } from './button';
import ThemeToggleButton from './theme-toggle';

const Header = () => {
  const [isFloating, setIsFloating] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleFloatingHeader = useCallback(() => {
    setIsFloating(window.scrollY > 1);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleFloatingHeader);
    return () => window.removeEventListener('scroll', handleFloatingHeader);
  }, [handleFloatingHeader]);

  const handleScrollToSection = useCallback(
    (event: React.SyntheticEvent) => {
      scrollToSection(event);
      setIsSidebarOpen(false);
    },
    [setIsSidebarOpen],
  );

  return (
    <header
      className={`fixed top-0 z-20 flex h-[85px] w-full flex-row items-center justify-between rounded-xl px-8 py-6 transition-all duration-300 lg:px-36 ${isFloating && 'bg-[#E0E8F690] shadow-lg dark:bg-[#1C1C1C90]'}`}
    >
      <h1
        className={`light:text-black font-poppins text-2xl font-bold dark:text-white ${isFloating ? 'cursor-pointer' : 'cursor-default'}`}
        onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
      >
        m.e.
      </h1>

      {/* Navbar */}
      <div className="hidden flex-row items-center lg:flex">
        <nav>
          <ul
            className="flex flex-row items-center gap-9 font-poppins dark:text-lightGray"
            onClick={handleScrollToSection}
          >
            <li>
              <a href="#about" className="hover:text-sky">
                Sobre
              </a>
            </li>
            <li>
              <a href="#techs" className="hover:text-sky">
                Tecnologias
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-sky">
                Projetos
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-sky">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-row items-center gap-3">
        <ThemeToggleButton />

        {/* Sidebar */}
        <Dialog.Root open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <Dialog.Trigger className="lg:hidden">
            <Button variant="ghost" size="small">
              <MenuIcon />
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
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
                <Dialog.Close>
                  <ul
                    className="space-y-4 text-start text-gray-800 dark:text-white"
                    onClick={handleScrollToSection}
                  >
                    <li>
                      <a href="#about">Sobre</a>
                    </li>
                    <li>
                      <a href="#techs">Tecnologias</a>
                    </li>
                    <li>
                      <a href="#projects">Projetos</a>
                    </li>
                    <li>
                      <a href="#contact">Contato</a>
                    </li>
                  </ul>
                </Dialog.Close>
              </nav>
              <div className="flex justify-center p-6">
                <Button variant="primary" size="full">
                  <a href="/cv-marina-ebbecke.pdf" download>
                    Baixar meu currículo
                  </a>
                </Button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
};

export default Header;
