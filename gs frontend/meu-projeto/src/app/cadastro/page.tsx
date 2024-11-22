"use client";


import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Cadastro.module.css';
import logoIMG from '..//img/logo.png'
import Link from 'next/link';
import Image from 'next/image';


const Cadastro = () => {
  const router = useRouter();

  // Estados para armazenar os valores dos campos e mensagens de erro
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Função para validar o email com regex
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Função chamada ao tentar fazer o cadastro
  const handleCadastro = () => {
    // Resetar mensagem de erro
    setError('');

    // Validação dos campos
    if (!email || !isValidEmail(email)) {
      setError('Por favor, insira um email válido.');
      return;
    }

    if (!password || password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    // Lógica para realizar o cadastro (exemplo simplificado)
    console.log("Usuário cadastrado:", { email, password });


    // Redirecionar para a página de login após o cadastro
    router.push('/login');
  };

  const goBack = () => {
    router.push('/'); // Redireciona para a página principal
  };

  return (
    <div className={styles.container}>
      <button onClick={goBack} className={styles.backButton}>
        &#x21A9; Voltar para início
      </button>
      <div className={styles.cadastroBox}>
        <Image src={logoIMG} alt="logo" width={90} height={90} className={styles.logo}/>
        <h2>Cadastre-se</h2>
        
        {/* Mensagem de erro */}
        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.inputGroup}>
          <label>Email:</label>
          <input 
            type="email" 
            placeholder="Digite seu email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        
        <div className={styles.inputGroup}>
          <label>Senha:</label>
          <input 
            type="password" 
            placeholder="Digite sua senha" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Repita sua Senha:</label>
          <input 
            type="password" 
            placeholder="Repita sua senha" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
        </div>

        <button onClick={handleCadastro} className={styles.cadastroButton}>Cadastrar</button>
      </div>
    </div>
  );
};

export default Cadastro;