import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const contact = () => {
  return (
    <div>
      <Hero
        heading="Contato"
        message="Mande um zap agora mesmo, e faça seu orçamento."
      />
      <Footer />
    </div>
  );
};

export default contact;
