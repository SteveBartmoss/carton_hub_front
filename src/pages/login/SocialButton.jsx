
const providers = [
  { name: "Google", icon: "G" },
  { name: "Discord", icon: "◉" },
  { name: "Steam", icon: "◈" },
];

export default function SocialLoginButtons() {
  return (
    <div className="social-buttons">
      {providers.map((provider) => (
        <button
          key={provider.name}
          type="button"
          className="social-button"
          onClick={() => {
            // Aquí iniciarás el flujo OAuth del proveedor.
            console.log(`Login con ${provider.name}`);
          }}
        >
          <span className={`social-icon ${provider.name.toLowerCase()}`}>
            {provider.icon}
          </span>
          {provider.name}
        </button>
      ))}
    </div>
  );
}
