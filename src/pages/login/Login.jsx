
import "../styles/login.css";
import LoginHero from "../components/auth/LoginHero";
import LoginForm from "../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="login-page">
      <section className="login-hero">
        <LoginHero />
      </section>

      <section className="login-content">
        <LoginForm />
      </section>

      <footer className="login-footer">
        <span>♧ CardForge</span>
        <span className="footer-divider">|</span>
        <span>El lugar de los verdaderos coleccionistas</span>
      </footer>
    </main>
  );
}
