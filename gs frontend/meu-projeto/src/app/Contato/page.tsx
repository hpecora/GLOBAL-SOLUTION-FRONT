import Head from "next/head";
import styles from "./Contato.module.css";
import hIMG from '..//img/henrique.png'
import lIMG from '..//img/livia.jpg'
import sIMG from '..//img/santhi.jpg'
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
                <Link href="/Aderir-Energia">Como Aderir à Energia Limpa</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <h1>Integrantes do projeto PLS CLEAN ENERGY</h1>
        <div className={styles.integrantes}>
          <div className={styles.card}>
          <Image src={hIMG} alt="Henrique Pecora" className={styles.image} />
            <h2>Henrique Pecora Vieira de Souza</h2>
            <p>RM 556612</p>
            <p>1TDRS</p>
            <p>
              <strong>Github:</strong>{" "}
              <a href="https://github.com/hpecora" target="_blank">https://github.com/hpecora</a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/henrique-pecora" target="_blank">
                www.linkedin.com/in/henrique-pecora
              </a>
            </p>
          </div>

          <div className={styles.card}>
          <Image src={lIMG} alt="Livia Lopes" className={styles.image}/>
            <h2>Livia de Oliveira Lopes</h2>
            <p>RM 556281</p>
            <p>1TDRS</p>
            <p>
              <strong>Github:</strong>{" "}
              <a href="https://github.com/livialopes55" target="_blank">https://github.com/livialopes55</a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/livia-lopes-808a01295" target="_blank">
                www.linkedin.com/in/livia-lopes-808a01295
              </a>
            </p>
          </div>

          <div className={styles.card}>
          <Image src={sIMG} alt="Santhiago de Gobbi" className={styles.image} />
            <h2>Santhiago de Gobbi Barros de Souza</h2>
            <p>RM 98420</p>
            <p>1TDRS</p>
            <p>
              <strong>Github:</strong>{" "}
              <a href="https://github.com/santhi" target="_blank">https://github.com/santhi</a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/santhiago-de-gobbi-a16444315" target="_blank">
                www.linkedin.com/in/santhiago-de-gobbi
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
