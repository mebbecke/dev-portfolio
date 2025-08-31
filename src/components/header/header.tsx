import * as Dialog from '@radix-ui/react-dialog';
import { MenuIcon, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { scrollToSection } from '../../utils/scrollToSection';
import { Button } from '../button';
import ThemeToggleButton from '../theme-toggle';
import * as styles from './styles';

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

  const scrollToTop = useCallback((isSidebar: boolean) => {
    scrollTo({ top: 0, behavior: 'smooth' });
    if (isSidebar) setIsSidebarOpen(false);
  }, []);

  type NavLinkProps = {
    href: string;
    children: React.ReactNode;
  };

  const NavLink = ({ href, children }: NavLinkProps) => (
    <a href={href} className="hover:text-sky">
      {children}
    </a>
  );

  const NavLinkList = () => (
    <>
      <li>
        <NavLink href="#about">Sobre</NavLink>
      </li>
      <li>
        <NavLink href="#techs">Tecnologias</NavLink>
      </li>
      <li>
        <NavLink href="#projects">Projetos</NavLink>
      </li>
      <li>
        <NavLink href="#contact">Contato</NavLink>
      </li>
    </>
  );

  return (
    <header className={styles.header({ isFloating })}>
      <h1
        className={styles.logo({ isFloating })}
        onClick={() => scrollToTop(false)}
      >
        m.e.
      </h1>

      {/* Navbar - desktop */}
      <nav className={styles.navbarLinksWrapper}>
        <ul className={styles.navbarLinks} onClick={handleScrollToSection}>
          <NavLinkList />
        </ul>
      </nav>

      <div className="flex flex-row items-center gap-3">
        <ThemeToggleButton />

        {/* Sidebar - mobile */}
        <Dialog.Root open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <Dialog.Trigger className="lg:hidden">
            <Button variant="ghost" size="small">
              <MenuIcon />
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className={styles.sidebarOverlay} />
            <Dialog.Content className={styles.sidebarContent}>
              <div className={styles.sidebarHeader}>
                <Dialog.Title
                  className={styles.sidebarTitle}
                  onClick={() => scrollToTop(true)}
                >
                  m.e.
                </Dialog.Title>
                <Dialog.Close className="flex w-full justify-end">
                  <X className="dark:text-white" />
                </Dialog.Close>
              </div>
              <nav className={styles.sidebarLinksWrapper}>
                <Dialog.Close>
                  <ul
                    className={styles.sidebarLinks}
                    onClick={handleScrollToSection}
                  >
                    <NavLinkList />
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

export { Header };
