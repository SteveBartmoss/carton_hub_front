const navigation = [
  { icon: "⌂", label: "Inicio", active: true, href: "/" },
  { icon: "▣", label: "Mercado", href: "/market" },
  { icon: "⇄", label: "Intercambios", href: "/trades" },
  { icon: "♙", label: "Comunidad", href: "/community" },
  { icon: "♟", label: "Mi Perfil", href: "/profile" },
  { icon: "⚙", label: "Configuración", href: "/settings" },
];

export default function MainSidebar() {
  return (
    <aside className="main-sidebar">
      <nav className="sidebar-navigation">
        {navigation.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`sidebar-link ${item.active ? "active" : ""}`}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <a href="/logout" className="sidebar-link">
          <span className="sidebar-icon">⇥</span>
          <span>Cerrar sesión</span>
        </a>
      </div>
    </aside>
  );
}
