export default function MainNavbar() {
  return (
    <header className="main-navbar">
      <a href="/" className="navbar-brand">
        <span className="brand-icon">▱</span>
        <span>
          Card<span className="brand-purple">Forge</span>
        </span>
      </a>

      <div className="navbar-search">
        <span className="search-icon">⌕</span>

        <input
          type="search"
          placeholder="Buscar cartas, usuarios o sets..."
        />
      </div>

      <div className="navbar-actions">
        <button className="navbar-action notification-button">
          ♧
          <span className="notification-dot" />
        </button>

        <button className="navbar-action">▤</button>

        <button className="navbar-profile">
          <img
            src="https://api.dicebear.com/9.x/adventurer/svg?seed=Steve"
            alt="Perfil"
          />
          <span className="online-dot" />
          <span className="profile-arrow">⌄</span>
        </button>
      </div>
    </header>
  );
}
