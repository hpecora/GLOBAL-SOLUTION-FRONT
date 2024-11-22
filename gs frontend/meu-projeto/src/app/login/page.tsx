"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Login.module.css';
import logoIMG from '..//img/logo.png'
import Link from 'next/link';
import Image from 'next/image';

const Login = () => {
  const router = useRouter();

  // Estados para armazenar os valores dos campos e mensagens de erro
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Função para validar o email com regex
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Função chamada ao tentar fazer login
  const handleLogin = () => {
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

    // Redirecionar para a página principal após login válido
    router.push('/Home-Login');
  };

  const handleSignup = () => {
    router.push('/cadastro'); // Redireciona para a página de cadastro
  };

  const goBack = () => {
    router.push('Home-Login'); // Redireciona para a página principal
  };

  return (
    <div className={styles.container}>
      <button onClick={goBack} className={styles.backButton}>
        &#x21A9; Voltar para início
      </button>
      <div className={styles.loginBox}>
        <Image src={logoIMG} alt="logo" width={50} height={50} className={styles.logo}  />
        <h2>Faça seu Login</h2>
        
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

        <button onClick={handleLogin} className={styles.loginButton}>Entrar</button>
        
        <p>Se você não tem uma conta, faça seu cadastro abaixo:</p>
        <button onClick={handleSignup} className={styles.signupButton}>Cadastre-se</button>
      </div>
    </div>
  );
};

export default Login;