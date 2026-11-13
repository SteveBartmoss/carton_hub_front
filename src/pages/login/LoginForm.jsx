
import { useState } from "react";
import { SocialButtons } from "./SocialButton";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Ingresa tu correo y contraseña.");
      return;
    }

    // Conectar aquí con tu servicio de autenticación.
    console.log({ email, password, remember });
  }

  return (
    <div className="login-card">
      <header className="form-header">
        <h2>Bienvenido de nuevo</h2>
        <p>Inicia sesión para continuar con tu colección.</p>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="password">Contraseña</label>

          <div className="password-wrapper">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />

            <button
              className="password-toggle"
              type="button"
              aria-label={
                showPassword
                  ? "Ocultar contraseña"
                  : "Mostrar contraseña"
              }
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Ocultar" : "Ver"}
            </button>
          </div>
        </div>

        <div className="form-options">
          <label className="remember-option">
            <input
              type="checkbox"
              checked={remember}
              onChange={(event) => setRemember(event.target.checked)}
            />
            <span>Recordarme</span>
          </label>

          <a href="/forgot-password">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}

        <button className="login-button" type="submit">
          Iniciar sesión <span>→</span>
        </button>
      </form>

      <div className="separator">
        <span>o continúa con</span>
      </div>

      <SocialButtons />

      <p className="register-prompt">
        ¿No tienes una cuenta?{" "}
        <a href="/register">Regístrate</a>
      </p>
    </div>
  );
}

