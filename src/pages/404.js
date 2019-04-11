import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

const NotFoundPage = (props) => {
  return (
    <Layout>
      <div className="container">
        <Hero title="Página não encontrada." subtitle="404" meta={{}}></Hero>
      </div>
    </Layout>
  )
}

export default NotFoundPage;
