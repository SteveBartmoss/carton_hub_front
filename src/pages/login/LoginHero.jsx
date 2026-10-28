
export default function LoginHero() {
  return (
    <div className="hero-content">
      <a className="brand" href="/">
        <span className="brand-icon">♧</span>
        <span>Card<span>Forge</span></span>
      </a>

      <p className="brand-tagline">
        INTERCAMBIO · COMPRA · VENDE
      </p>

      <div className="hero-message">
        <h1>
          Tu colección,
          <br />
          <span>sin límites.</span>
        </h1>

        <p>
          Intercambia, compra y vende cartas de tus
          juegos favoritos. Conecta con otros jugadores,
          completa tu colección y dale más valor a tus cartas.
        </p>
      </div>

      <div className="hero-features">
        <article>
          <span className="feature-icon">♧</span>
          <p>Intercambios<br />seguros</p>
        </article>

        <article>
          <span className="feature-icon">♜</span>
          <p>Compra y vende<br />fácilmente</p>
        </article>

        <article>
          <span className="feature-icon">♙</span>
          <p>Comunidad de<br />jugadores</p>
        </article>
      </div>
    </div>
  );
}
