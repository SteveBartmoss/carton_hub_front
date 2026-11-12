
import type { ChangeEvent } from "react";
import type { UserProfileSettings } from "../../data/profileSettings";

interface Props {
  profile: UserProfileSettings;
  onChange: (profile: UserProfileSettings) => void;
}

const availableGames = [
  "Magic: The Gathering",
  "Pokémon",
  "Yu-Gi-Oh!",
  "One Piece",
  "Digimon",
  "Lorcana",
];

export default function ProfileSettingsForm({
  profile,
  onChange,
}: Props) {
  function update<K extends keyof UserProfileSettings>(
    field: K,
    value: UserProfileSettings[K]
  ) {
    onChange({ ...profile, [field]: value });
  }

  function handleImage(
    field: "avatar" | "banner",
    event: ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Selecciona un archivo de imagen.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("La imagen no debe superar los 10 MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        update(field, reader.result);
      }
    };

    reader.readAsDataURL(file);
  }

  function toggleGame(game: string) {
    const games = profile.favoriteGames.includes(game)
      ? profile.favoriteGames.filter((item) => item !== game)
      : [...profile.favoriteGames, game];

    update("favoriteGames", games);
  }

  return (
    <section className="settings-panel profile-form-panel">
      <div className="settings-panel-heading">
        <h2>Información del perfil</h2>
        <p>Modifica los datos que otros jugadores verán en tu perfil.</p>
      </div>

      <div className="image-settings">
        <div className="avatar-upload">
          <div className="avatar-preview">
            <img src={profile.avatar} alt="Avatar" />
          </div>

          <div className="upload-info">
            <strong>Foto de perfil</strong>
            <span>JPG, PNG o WEBP. Máx. 5 MB.</span>

            <div className="upload-actions">
              <label className="outline-button">
                ✉ Cambiar imagen
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  hidden
                  onChange={(event) =>
                    handleImage("avatar", event)
                  }
                />
              </label>

              <button
                className="text-button"
                type="button"
                onClick={() =>
                  update(
                    "avatar",
                    "https://api.dicebear.com/9.x/adventurer/svg?seed=CardForge"
                  )
                }
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>

        <div className="banner-upload">
          <div className="banner-preview">
            <img src={profile.banner} alt="Banner" />
            <label className="image-camera">
              📷
              <input
                type="file"
                accept="image/png,image/jpeg,image/webp"
                hidden
                onChange={(event) =>
                  handleImage("banner", event)
                }
              />
            </label>
          </div>

          <div className="upload-info">
            <strong>Banner de perfil</strong>
            <span>JPG, PNG o WEBP. Máx. 10 MB.</span>

            <div className="upload-actions">
              <label className="outline-button">
                ✉ Cambiar imagen
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  hidden
                  onChange={(event) =>
                    handleImage("banner", event)
                  }
                />
              </label>

              <button
                className="text-button"
                type="button"
                onClick={() =>
                  update(
                    "banner",
                    "https://images.unsplash.com/photo-1519608487953-e999c86e7455"
                  )
                }
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="settings-fields two-columns">
        <div className="settings-field">
          <label htmlFor="username">Nombre de usuario</label>
          <div className="input-with-icon">
            <input
              id="username"
              value={profile.username}
              disabled
              readOnly
            />
            <span>♙</span>
          </div>
        </div>

        <div className="settings-field">
          <label htmlFor="displayName">Nombre para mostrar</label>
          <input
            id="displayName"
            value={profile.displayName}
            onChange={(event) =>
              update("displayName", event.target.value)
            }
            maxLength={40}
          />
        </div>

        <div className="settings-field">
          <label htmlFor="email">Correo electrónico</label>
          <div className="input-with-icon">
            <input
              id="email"
              type="email"
              value={profile.email}
              readOnly
            />
            <span>✉</span>
          </div>
        </div>

        <div className="settings-field">
          <label>Contraseña</label>
          <button
            type="button"
            className="password-change-button"
          >
            🔒 ••••••••• <span>Cambiar</span>
          </button>
        </div>
      </div>

      <div className="settings-field description-field">
        <label htmlFor="description">Descripción</label>
        <textarea
          id="description"
          value={profile.description}
          onChange={(event) =>
            update("description", event.target.value)
          }
          maxLength={500}
          rows={3}
        />
        <span className="character-count">
          {profile.description.length}/500
        </span>
      </div>

      <div className="settings-field games-field">
        <label>Juegos favoritos</label>

        <div className="game-selector">
          <div className="game-chips">
            {profile.favoriteGames.map((game) => (
              <button
                type="button"
                className="game-chip"
                key={game}
                onClick={() => toggleGame(game)}
              >
                {game} <span>×</span>
              </button>
            ))}
          </div>

          <select
            aria-label="Agregar juego favorito"
            value=""
            onChange={(event) =>
              event.target.value && toggleGame(event.target.value)
            }
          >
            <option value="">Agregar juego...</option>
            {availableGames
              .filter(
                (game) => !profile.favoriteGames.includes(game)
              )
              .map((game) => (
                <option key={game} value={game}>
                  {game}
                </option>
              ))}
          </select>
        </div>
      </div>
    </section>
  );
}
