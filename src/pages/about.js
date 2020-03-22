import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout/'
import SocialLinks from '../components/SocialLinks'

import { MainContent } from '../styles/base'

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre mim"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog." />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Meu nome é Marcos Olavo Silva Buganeme, nascido em Goiânia/GO e
        atualmente sou Backend Developer/DevOps no core da{' '}
        <a href="https://www.anbetec.com.br/" target="_blank" rel="noopener noreferrer">
          Anbetec
        </a>
        , além de ser sócio na DevDojo sistemas {' '}
        <a
          href="https://devdojosistemas.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Devdojo sistemas
        </a>{' '}.
      </p>

      <p>
        Já passei por empresas como{' '}
        <a
          href="http://www.totvs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Totvs
        </a>
        ,{' '}
        <a
          href="https://www.engesoftware.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Engesoftware
        </a>
        ,{' '}
        <a
          href="https://www.ibccoaching.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IBC Coaching
        </a>{' '}
        e outras mais. Cursei Segurança da Informação na Fatesg-GO (faculdade senac) concluindo em
        2012, mas curiosamente, essa escolha me levou a trilhar caminhos distintos do que eu havia escolhido…
        E por que eu trabalho com web agora?
        Ah… porque web é incrível e a facilidade em aprender cada dia mais, me
        deixa mais feliz com a escolha que fiz.
      </p>

      <p>
        Eu amo trabalhar em equipe e sou bem comunicativo. No meu tempo livre,
        gosto de ensinar meus amigos sobre alguma coisa que aprendi, acho que
        por isso nasceu esse blog.
      </p>

      <h2>Habilidades</h2>

      <ul>
        <li>ES6/7/8</li>
        <li>Javascript</li>
        <li>ReactJS / Redux / Flux</li>
        <li>Git</li>
        <li>Java</li>
        <li>Go</li>
        <li>NodeJS</li>
        <li>Python</li>
        <li>Dart + Flutter</li>
        <li>Scrum and Kanban</li>
        <li>TDD</li>
        <li>Oracle - Postgres - MySQL - MongoDB - Redis</li>
        <li>Continuous Integration (CI)</li>
        <li>Docker | Docker compose | Docker Swarm | Kubernates </li>
        <li>O que eu não sei, aprendo rápido =)</li>
      </ul>

      <h2>Contato</h2>

      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </Layout>
)

export default AboutPage