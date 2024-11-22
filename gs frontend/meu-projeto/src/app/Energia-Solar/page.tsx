"use client";

import React, { useState } from 'react';
import styles from './energia.module.css';
import logoIMG from '@/app/img/logo.png'
import funcionaIMG from '@/app/img/comofunciona.png'
import etapa1IMG from '@/app/img/etapa1.png'
import etapa2IMG from '@/app/img/etapa2.png'
import etapa3IMG from '@/app/img/etapa3.png'
import etapa4IMG from '@/app/img/etapa4.png'
import Image from 'next/image';
import Link from 'next/link';

export default function Home()  {
        const [showPopup, setShowPopup] = useState(false);
      
        const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault(); // Previne o comportamento padrão do formulário
          setShowPopup(true); // Mostra o popup
        };
      
        const handleClosePopup = () => {
          setShowPopup(false); // Esconde o popup
        };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
      <Image src={logoIMG} alt="Logo" className={styles.logo}  width={90} height={90}/>
                <nav className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/Impacto-Ambiental">Impacto Ambiental</Link>
                <Link href="/energy-sources">Gerenciamento Fontes Energia</Link>
                <Link href="/Aderir-Energia">Como Aderir à Energia Limpa</Link>
                <Link href="/Contato">Entre em Contato</Link>
                </nav>
            </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.infoContainer}>
            <h1><strong>Como a energia solar funciona?</strong></h1>
            <p>
              A PLS Clean Energy trabalha com sistemas de energia solar fotovoltaica residencial ou comercial.
            </p>
            <ul>
              <li>O kit de energia solar da PLS Clean Energy transforma a luz do sol em energia elétrica para sua casa.</li>
              <li>É mais completo do que os sistemas de aquecimento solar, que só esquentam água.</li>
              <li>
                Funciona com ar condicionado, geladeira, chuveiro, TV ou qualquer eletrodoméstico. Você vive com mais conforto e
                paga menos na sua conta de luz.
              </li>
            </ul>
          </div>
          <div className={styles.imageContainer}>
          <Image src={funcionaIMG} alt="Diagrama de energia solar" layout="responsive"/>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.feature}>
          <Image src={etapa1IMG} alt="Projeto personalizado" layout="responsive"/>
            <p>Projeto personalizado para a sua residência ou negócio</p>
          </div>
          <div className={styles.feature}>
          <Image src={etapa2IMG} alt="Placas solares" layout="responsive"/>
            <p>Placas e painéis solares</p>
          </div>
          <div className={styles.feature}>
          <Image src={etapa3IMG}  alt="Documentação" layout="responsive"/>
            <p>Documentação e ativação com a companhia</p>
          </div>
          <div className={styles.feature}>
          <Image src={etapa4IMG}  alt="Suporte e pós-venda" layout="responsive" />
            <p>Suporte e pós-venda</p>
          </div>
        </section>
        <section className={styles.additionalSection}>
          <div className={styles.infoBox}>
            <p>
              Sua casa continua ligada à rede elétrica e você gera créditos com a companhia, gerando economia na sua conta.
              Os créditos podem ser utilizados até 60 meses após a geração.
            </p>
          </div>
          <div className={styles.additionalFeatures}>
            <div>
              <p>
                Todos os nossos projetos são feitos por engenheiros formados, garantindo segurança e o máximo custo-benefício.
              </p>
            </div>
            <div>
              <p>
                Fazemos financiamento de 100% do projeto com pagamento em até 72 vezes.
              </p>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Preencha nosso formulário abaixo para marcarmos uma reunião</h2>
            <label>
              Nome completo:
              <input type="text" name="nome" required />
            </label>
            <label>
              Telefone:
              <input type="text" name="telefone" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Endereço:
              <input type="text" name="endereco" required />
            </label>
            <button type="submit">ENVIAR FORMULÁRIO</button>
          </form>
        </section>
      </main>

      {/* Popup */}
      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <p>
              Obrigado por preencher o formulário! Nossa equipe irá entrar em contato com você pelo telefone e email fornecidos.
            </p>
            <button onClick={handleClosePopup}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}