
export type SettingsSection =
  | "profile"
  | "security"
  | "notifications"
  | "privacy"
  | "preferences"
  | "connections"
  | "verification";

interface Props {
  activeSection: SettingsSection;
  onChange: (section: SettingsSection) => void;
}

const sections: {
  id: SettingsSection;
  label: string;
  icon: string;
}[] = [
  { id: "profile", label: "Perfil", icon: "♙" },
  { id: "security", label: "Seguridad", icon: "♢" },
  { id: "notifications", label: "Notificaciones", icon: "♧" },
  { id: "privacy", label: "Privacidad", icon: "♙" },
  { id: "preferences", label: "Preferencias", icon: "⚙" },
  { id: "connections", label: "Conexiones", icon: "⇄" },
  { id: "verification", label: "Verificación", icon: "✓" },
];

export default function SettingsSidebar({
  activeSection,
  onChange,
}: Props) {
  return (
    <aside className="settings-sidebar">
      <nav>
        {sections.map((section) => (
          <button
            key={section.id}
            className={
              activeSection === section.id ? "active" : ""
            }
            onClick={() => onChange(section.id)}
          >
            <span className="settings-nav-icon">
              {section.icon}
            </span>
            {section.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
