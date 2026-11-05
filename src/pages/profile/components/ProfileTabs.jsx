
export type ProfileTab =
  | "collection"
  | "sales"
  | "purchases"
  | "trades"
  | "activity";

interface Props {
  activeTab: ProfileTab;
  onChange: (tab: ProfileTab) => void;
}

const tabs: { id: ProfileTab; label: string; icon: string }[] = [
  { id: "collection", label: "Colección", icon: "▤" },
  { id: "sales", label: "Ventas", icon: "◇" },
  { id: "purchases", label: "Compras", icon: "🛒" },
  { id: "trades", label: "Intercambios", icon: "⇄" },
  { id: "activity", label: "Actividad", icon: "⌁" },
];

export default function ProfileTabs({
  activeTab,
  onChange,
}: Props) {
  return (
    <nav className="profile-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`profile-tab ${
            activeTab === tab.id ? "active" : ""
          }`}
          onClick={() => onChange(tab.id)}
        >
          <span>{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
