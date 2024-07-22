import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/login.module.css'; // Adjusted path

const Login = () => {
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();
    // Here, you can add your login logic (e.g., authentication)

    // After successful login, navigate to the restaurants page
    router.push('/restaurants');
  };

  return (
    <>
      <Head>
        <title>Login - FiveStarEat</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles.overlay}>
            <h1 className={styles.title}>FiveStarEat.com</h1>
            <form className={styles.form} onSubmit={handleLogin}>
              <div className={styles.inputContainer}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
              </div>
              <button type="submit" className={styles.signInButton}>Sign In</button>
              <a href="#" className={styles.forgotPassword}>Forgot password?</a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
