
import { LoginForm } from "./LoginForm";
import { LoginHero } from "./LoginHero";
import "./styles/login.css";

export function Login() {
  return (
    <main className="login-page">
      <section className="login-hero">
        <LoginHero />
      </section>

      <section className="login-content">
        <LoginForm />
      </section>

      <footer className="login-footer">
        <span>♧ Carton Hub</span>
        <span className="footer-divider">|</span>
        <span>El lugar de los verdaderos coleccionistas</span>
      </footer>
    </main>
  );
}
