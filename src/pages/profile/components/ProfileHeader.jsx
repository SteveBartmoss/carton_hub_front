
import type { ProfileUser } from "../../data/profileData";

interface Props {
  user: ProfileUser;
  isOwner: boolean;
  onEdit: () => void;
  onTrade: () => void;
}

export default function ProfileHeader({
  user,
  isOwner,
  onEdit,
  onTrade,
}: Props) {
  return (
    <section className="profile-header">
      <div
        className="profile-banner"
        style={{ backgroundImage: `url(${user.banner})` }}
      />

      <div className="profile-header-content">
        <div className="profile-avatar-wrapper">
          <img
            src={user.avatar}
            alt={`Avatar de ${user.nickname}`}
            className="profile-avatar"
          />
          <span className="online-indicator" />
        </div>

        <div className="profile-identity">
          <div className="profile-name">
            <h1>{user.nickname}</h1>
            <span className="verified-badge" title="Usuario verificado">
              ✓
            </span>
          </div>

          <span className="profile-username">@{user.username}</span>

          <p className="profile-description">
            {user.description}
          </p>

          <div className="profile-stats">
            <div>
              <strong>{user.cards}</strong>
              <span>Cartas</span>
            </div>

            <div>
              <strong>{user.trades}</strong>
              <span>Intercambios</span>
            </div>

            <div>
              <strong>{user.sales}</strong>
              <span>Ventas</span>
            </div>

            <div>
              <strong>{user.rating}%</strong>
              <span>Valoración</span>
            </div>
          </div>
        </div>

        <div className="profile-actions">
          {isOwner ? (
            <button className="secondary-button" onClick={onEdit}>
              ✎ Editar perfil
            </button>
          ) : (
            <button className="primary-button" onClick={onTrade}>
              ⇄ Proponer intercambio
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
