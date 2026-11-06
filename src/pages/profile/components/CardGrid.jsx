
import type { CollectionCard } from "../../data/profileData";

interface Props {
  cards: CollectionCard[];
}

export default function CardGrid({ cards }: Props) {
  if (!cards.length) {
    return (
      <div className="empty-collection">
        <span>▤</span>
        <h3>No hay cartas disponibles</h3>
        <p>Esta sección todavía no tiene cartas.</p>
      </div>
    );
  }

  return (
    <div className="card-grid">
      {cards.map((card) => (
        <article className="tcg-card" key={card.id}>
          <div className="tcg-card-image">
            <img src={card.image} alt={card.name} loading="lazy" />

            <span className={`card-status ${card.status}`}>
              {card.status === "trade"
                ? "Intercambio"
                : card.status === "sale"
                  ? "En venta"
                  : "Colección"}
            </span>
          </div>

          <div className="tcg-card-info">
            <h3 title={card.name}>{card.name}</h3>

            <div className="tcg-card-meta">
              <span>{card.game}</span>
              <span>{card.condition}</span>
            </div>

            <div className="tcg-card-footer">
              <span>{card.quantity}x</span>
              <strong>
                ${card.price.toLocaleString("es-MX")}
              </strong>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
