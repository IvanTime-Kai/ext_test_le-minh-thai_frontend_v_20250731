import React from 'react';
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import ScrollToTopButton from '../_components/ScrollTopButton';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
      <ScrollToTopButton />
    </main>
  );
};

export default HomeLayout;
