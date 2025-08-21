import React from 'react';
import Footer from './footer';
import Header from './header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const handleScrollToSection = useCallback((event: React.SyntheticEvent) => {
  //   scrollToSection(event);
  //   setIsSidebarOpen(false);
  // }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header
      // scrollToSection={handleScrollToSection}
      // isSidebarOpen={isSidebarOpen}
      // setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="mx-8 my-6 flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
