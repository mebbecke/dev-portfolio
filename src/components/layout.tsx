import React from 'react';
import Footer from './footer';
import { Header } from './header/header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="mx-8 my-6 flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
