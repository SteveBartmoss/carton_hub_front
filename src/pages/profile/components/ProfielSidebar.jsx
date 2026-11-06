
import type { ProfileUser } from "../../data/profileData";

interface Props {
  user: ProfileUser;
}

const achievements = [
  { icon: "🏆", name: "Coleccionista", description: "100+ cartas" },
  { icon: "🤝", name: "Buen comerciante", description: "50 intercambios" },
  { icon: "✦", name: "Veterano", description: "Miembro activo" },
  { icon: "♛", name: "Elite", description: "Reputación destacada" },
];

const activities = [
  { icon: "◇", text: "Vendiste 1x Jace, the Mind Sculptor", time: "Hace 2 h" },
  { icon: "⇄", text: "Realizaste un intercambio con DarkRider", time: "Hace 1 día" },
  { icon: "🛒", text: "Compraste 1x Force of Will", time: "Hace 2 días" },
];

export default function ProfileSidebar({ user }: Props) {
  return (
    <aside className="profile-sidebar">
      <section className="sidebar-panel">
        <div className="panel-heading">
          <h2>Sobre mí</h2>
        </div>

        <p className="about-description">
          {user.description}
        </p>

        <div className="game-tags">
          {user.favoriteGames.map((game) => (
            <span key={game}>{game}</span>
          ))}
        </div>
      </section>

      <section className="sidebar-panel">
        <div className="panel-heading">
          <h2>Logros</h2>
          <button className="text-button">Ver todos →</button>
        </div>

        <div className="achievement-grid">
          {achievements.map((achievement) => (
            <div
              key={achievement.name}
              className="achievement"
              title={`${achievement.name}: ${achievement.description}`}
            >
              {achievement.icon}
            </div>
          ))}
        </div>
      </section>

      <section className="sidebar-panel">
        <div className="panel-heading">
          <h2>Actividad reciente</h2>
          <button className="text-button">Ver todos →</button>
        </div>

        <div className="activity-list">
          {activities.map((activity, index) => (
            <div className="activity-item" key={index}>
              <span className="activity-icon">{activity.icon}</span>

              <div>
                <p>{activity.text}</p>
                <span>{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}
