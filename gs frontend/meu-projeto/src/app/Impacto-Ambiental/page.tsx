"use client";

import React, { useState } from 'react';
import styles from './Impacto.module.css';
import impIMG from '..//img/impacto-home.png'
import info1IMG from '..//img/infográfico1.png'
import info2IMG from '..//img/infográfico2.png'
import info3IMG from '..//img/infográfico3.png'
import logoIMG from '..//img/logo.png'
import Link from 'next/link'
import Image from 'next/image';

const page: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Cabeçalho */}
      <header className={styles.header}>
      <Image src={logoIMG} alt="Logo" className={styles.logo}  width={90} height={90}/>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/energy-sources">Gerenciamento Fontes Energia</Link>
          <Link href="/Aderir-Energia">Como Aderir à Energia Limpa</Link>
          <Link href="/Contato">Entre em Contato</Link>
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <div className={styles.cont}>
        <h2 className={styles.title}>Impacto Ambiental</h2>
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <p>
            As fontes de energia não renováveis, como petróleo, carvão e gás natural, têm um impacto ambiental significativo e duradouro. A queima desses combustíveis fósseis para gerar energia libera grandes quantidades de dióxido de carbono (CO₂) e outros gases de efeito estufa, que são os principais responsáveis pelo aquecimento global e pelas mudanças climáticas. Além disso, o processo de extração e transporte desses recursos naturais contribui para a degradação ambiental, resultando em desmatamento, poluição dos solos e contaminação de corpos d’água.

A poluição do ar é um dos efeitos mais visíveis, pois a queima de combustíveis fósseis libera poluentes atmosféricos, como dióxido de enxofre (SO₂), óxidos de nitrogênio (NOx) e partículas tóxicas, que causam problemas respiratórios e doenças graves em populações urbanas. A exploração dessas energias também ameaça a biodiversidade, pois muitas áreas naturais são destruídas para a criação de minas, poços de petróleo e infraestrutura de transporte, afetando habitats e colocando espécies em risco de extinção.

Em suma, o uso de energias não renováveis representa um desafio ambiental e de saúde pública. A transição para fontes de energia mais limpas e sustentáveis é essencial para reduzir esses impactos e proteger o meio ambiente e as futuras gerações.
            </p>
          </div>
          <Image src={impIMG.src} alt="Impacto Ambiental"  className={styles.image} width={600} height={600} />
        </div>
      </div>

      {/* Seção de Infográficos */}
      <div className={styles.infographicSection}>
        <h2 className={styles.infographicTitle}>Infográficos</h2>
        <div className={styles.infographicContent}>
          <div className={styles.infographicText}>
            <p>
              Aqui, você encontrará uma coleção de visualizações que facilitam a compreensão das principais tendências e dados sobre o setor energético. Desde fontes de energia renovável e não renovável até o impacto ambiental e a eficiência energética, nossos infográficos apresentam informações complexas de maneira clara e acessível.
            </p>
            <p>
              Navegue e descubra como diferentes fontes de energia influenciam o mundo, qual o papel da energia renovável para um futuro sustentável e o que as últimas pesquisas revelam sobre consumo e inovação. Este é um espaço para visualizar, aprender e se inspirar sobre o futuro da energia!
            </p>
          </div>
          <div className={styles.infographics}>
          <Image src={info1IMG} alt="Infográfico 1" className={styles.infographicImage} width={400} height={400}/>
          <Image src={info2IMG} alt="Infográfico 2" className={styles.infographicImage} width={400} height={400}/>
          <Image src={info3IMG} alt="Infográfico 3" className={styles.infographicImage} width={400} height={400} />
          </div>
        </div>
      </div>

      {/* Componente de Estatísticas de Sustentabilidade */}
      <EstatisticasSustentabilidade />
    </div>
  );
};
export default page;

// Definição do componente EstatisticasSustentabilidade
type Card = {
  title: string;
  description: string;
  details: string;
};

const EstatisticasSustentabilidade: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const cards: Card[] = [
    {
      title: 'Redução de Carbono',
      description: 'Clique aqui para saber sobre as estatísticas',
      details: 'A adoção de energias renováveis no Brasil ajuda a evitar aproximadamente 25 milhões de toneladas de emissões de CO₂ por ano. No mundo, a utilização de energia solar e eólica evitou cerca de 2,4 bilhões de toneladas de CO₂ em 2022, segundo a Agência Internacional de Energia (IEA).',
    },
    {
      title: 'Uso de Energias Renováveis no Brasil',
      description: 'Clique aqui para saber sobre as estatísticas',
      details: 'O Brasil possui uma das matrizes energéticas mais limpas do mundo, com cerca de 83% de sua eletricidade gerada a partir de fontes renováveis. A energia hidrelétrica representa 63% da geração elétrica no Brasil, seguida por biomassa (8%) e eólica (11%).',
    },
    {
      title: 'Crescimento da Energia Solar e Eólica',
      description: 'Clique aqui para saber sobre as estatísticas',
      details: 'A capacidade instalada de energia solar no Brasil ultrapassou 32 GW em 2023, suficiente para abastecer mais de 16 milhões de residências. A energia eólica cresceu rapidamente no país, chegando a mais de 23 GW de capacidade instalada, o que representa cerca de 13% da matriz.',
    },
    {
      title: 'Impacto da Biomassa no Brasil',
      description: 'Clique aqui para saber sobre as estatísticas',
      details: 'A biomassa, especialmente derivada da cana-de-açúcar, corresponde a cerca de 9% da matriz energética nacional e ajuda a evitar o uso de combustíveis fósseis.',
    },
    {
      title: 'Redução de Emissões no Setor de Transportes',
      description: 'Clique aqui para saber sobre as estatísticas',
      details: 'No Brasil, o uso de etanol e biodiesel contribuiu para a redução de cerca de 45 milhões de toneladas de CO₂ por ano.',
    },
    {
      title: 'Cenário Global de Energias Renováveis',
      description: 'Clique aqui para saber sobre as estatísticas',
      details: 'No mundo, aproximadamente 30% da eletricidade é gerada a partir de fontes renováveis, com a maior parte proveniente de hidrelétricas, solar e eólica. A energia solar global cresceu cerca de 22% em 2022, e a energia eólica cerca de 12%.',
    },
    {
      title: 'Projeções Futuras',
      description: 'Clique aqui para saber sobre as nossas projeções para o futuro',
      details: 'Até 2030, espera-se que 50% da geração de eletricidade no mundo venha de fontes renováveis, impulsionada pelo crescimento solar e eólico. No Brasil, as energias renováveis podem ultrapassar 90% da matriz elétrica até 2030, com investimentos em eólica offshore, solar e biomassa.',
    },
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className={styles.containerStats}>
      <h1>Estatísticas de Sustentabilidade</h1>
      <div className={styles.cardRow}>
        {cards.slice(0, 3).map((card, index) => (
          <div
            key={index}
            className={`${styles.card} ${expandedCard === index ? styles.expanded : ''}`}
            onClick={() => toggleCard(index)}
          >
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            {expandedCard === index && <div className={styles.details}>{card.details}</div>}
          </div>
        ))}
      </div>
      <div className={styles.cardRow}>
        {cards.slice(3, 6).map((card, index) => (
          <div
            key={index + 3}
            className={`${styles.card} ${expandedCard === index + 3 ? styles.expanded : ''}`}
            onClick={() => toggleCard(index + 3)}
          >
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            {expandedCard === index + 3 && <div className={styles.details}>{card.details}</div>}
          </div>
        ))}
      </div>
      <div className={styles.centerCard}>
        <div
          className={`${styles.card} ${expandedCard === 6 ? styles.expanded : ''}`}
          onClick={() => toggleCard(6)}
        >
          <h2>{cards[6].title}</h2>
          <p>{cards[6].description}</p>
          {expandedCard === 6 && <div className={styles.details}>{cards[6].details}</div>}
        </div>
      </div>
    </div>
  );
};
