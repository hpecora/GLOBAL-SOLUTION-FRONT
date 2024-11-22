import React from 'react';
import styles from './ComoAderirEnergia.module.css';
import logoIMG from '..//img/logo.png'
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div className={styles.container}>
        <header className={styles.header}>
        <Image src={logoIMG} alt="Logo" className={styles.logo}  width={90} height={90}/>
                <nav className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/Impacto-Ambiental">Impacto Ambiental</Link>
                <Link href="/energy-sources">Gerenciamento Fontes Energia</Link>
                <Link href="/Contato">Entre em Contato</Link>
                </nav>
            </header>

      <section className={styles.head}>
        <h1>Como Aderir à Energia Limpa</h1>
        <p>Entenda os tipos de energia sustentável e veja como você pode adotar cada um deles.</p>
      </section>
      
      <section className={styles.introduction}>
        <h2>O que é Energia Limpa?</h2>
        <p>Energia limpa é gerada a partir de fontes que não prejudicam o meio ambiente, como solar, eólica, hidrelétrica e biomassa. Além de ajudar na preservação ambiental, essas fontes são sustentáveis a longo prazo.</p>
      </section>

      <section className={styles.energytypes}>
        <h2>Tipos de Energias Limpas</h2>

        <div className={styles.energytype}>
          <h3>Energia Solar</h3>
          <p>A energia solar é gerada através de painéis fotovoltaicos que convertem a luz do sol em eletricidade. É uma fonte abundante e sustentável, ideal para residências e empresas.</p>
          <p><strong>Vantagens:</strong> Redução de custos a longo prazo, fácil instalação e independência energética.</p>
        </div>

        <div className={styles.energytype}>
          <h3>Energia Eólica</h3>
          <p>A energia eólica é gerada a partir do vento, utilizando turbinas que convertem a força dos ventos em energia elétrica. Essa forma de energia é muito eficiente em locais com ventos constantes.</p>
          <p><strong>Vantagens:</strong> Redução de emissões de CO₂ e possibilidade de uso em áreas rurais.</p>
        </div>

        <div className={styles.energytype}>
          <h3>Energia Hidrelétrica</h3>
          <p>A energia hidrelétrica é gerada pela movimentação de grandes volumes de água, geralmente em barragens de rios, transformando a força da água em eletricidade. É uma das fontes mais utilizadas no Brasil.</p>
          <p><strong>Vantagens:</strong> Alta capacidade de geração e menor custo de produção.</p>
        </div>

        <div className={styles.energytype}>
          <h3>Biomassa</h3>
          <p>A biomassa usa materiais orgânicos, como resíduos agrícolas, florestais e lixo orgânico, para gerar energia. É uma opção sustentável, pois utiliza resíduos que, de outra forma, seriam descartados.</p>
          <p><strong>Vantagens:</strong> Reduz o desperdício e promove o uso eficiente de recursos naturais.</p>
        </div>

        <div className={styles.energytype}>
          <h3>Energia Geotérmica</h3>
          <p>A energia geotérmica é gerada pelo calor da Terra, aproveitando o vapor de águas subterrâneas para gerar eletricidade. É mais comum em áreas com atividade geotérmica, como Islândia e Estados Unidos.</p>
          <p><strong>Vantagens:</strong> Emissões de carbono muito baixas e fornecimento contínuo de energia.</p>
        </div>
      </section>
      
      <section className={styles.advantages}>
        <h2>Benefícios da Energia Limpa</h2>
        <ul>
          <li>Preservação ambiental e redução da poluição</li>
          <li>Fonte renovável e sustentável</li>
          <li>Redução de custos energéticos a longo prazo</li>
          <li>Criação de empregos e desenvolvimento econômico sustentável</li>
        </ul>
      </section>
    </div>
  );
};

export default page;
