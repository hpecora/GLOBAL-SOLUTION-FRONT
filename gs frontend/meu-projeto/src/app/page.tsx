import React from 'react';
import styles from './Home.module.css';
import logoIMG from './img/logo.png';
import homeIMG from './img/tela-home.png';
import Link from 'next/link';
import Image from 'next/image';

 const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Image src={logoIMG} alt="Logo" className={styles.logo}  width={90} height={90}/>
                <nav className={styles.nav}>
                <Link href="/Impacto-Ambiental">Impacto Ambiental</Link>
                <Link href="/energy-sources">Gerenciamento Fontes Energia</Link>
                <Link href="/Aderir-Energia">Como Aderir à Energia Limpa</Link>
                <Link href="/Contato">Entre em Contato</Link>
                </nav>
            </header>

            <main className={styles.main}>
                {/* Conteúdo principal existente */}
                <section className={styles.hero}>
                    <div className={styles.heroColuna}>
                        <h1>Energia limpa para um futuro mais sustentável</h1>
                        <p>
                            A PLS Clean Energy é a chave para um futuro mais sustentável. Ao optar por fontes de energia limpa, como solar, eólica e hídrica, reduzimos o impacto ambiental e combatemos as mudanças climáticas. Essas fontes renováveis não emitem gases poluentes, garantem maior segurança energética e promovem um planeta mais saudável para as próximas gerações. Junte-se a nós na busca por soluções energéticas inovadoras e sustentáveis.
                        </p>
                    </div>
                    <div className={styles.heroImage}>
                    <Image src={homeIMG} alt="home" className={styles.heroImageContent} layout="responsive"/>
                    </div>
                </section>

                 {/* Nova seção de energia PLS Clean Energy */}
                 <section className={styles.main}>
                    <div className={styles.textContainer}>
                        <h1>Economize com a <span className={styles.highlight}>PLS Clean Energy!</span></h1>
                        <p>
                            Diga adeus às altas contas de energia! Com a PLS Clean Energy, você pode gerar sua própria energia limpa e renovável. 
                            Nossos sistemas solares são projetados para atender às suas necessidades específicas, garantindo máxima eficiência e economia.
                        </p>
                        <div className={styles.benefits}>
                            <h3>Por que escolher a PLS Clean Energy:</h3>
                            <ul>
                                <li>Energia limpa e renovável</li>
                                <li>Maior autonomia</li>
                                <li>Aumento do valor do seu imóvel</li>
                                <li>Suporte técnico especializado</li>
                            </ul>
                        </div>
                        <div className={styles.ctaButton}>
                        <Link href="/login">INSTALE ENERGIA SOLAR</Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
