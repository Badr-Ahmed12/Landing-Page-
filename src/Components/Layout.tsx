import React from 'react';
import Nav from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

