import MainSidebar from "../components/home/MainSidebar";
import MainNavbar from "../components/home/MainNavbar";
import HomeHero from "../components/home/HomeHero";
import PopularCards from "../components/home/PopularCards";
import UpcomingEvents from "../components/home/UpcomingEvents";
import CommunityActivity from "../components/home/CommunityActivity";
import FeaturedUsers from "../components/home/FeaturedUsers";

import "../styles/home.css";

export default function HomePage() {
  return (
    <div className="cardforge-home">
      <MainNavbar />

      <div className="home-layout">
        <MainSidebar />

        <main className="home-main">
          <div className="home-top-layout">
            <HomeHero />

            <aside className="quick-actions">
              <a href="/market" className="quick-action">
                <span className="quick-action-icon">▱</span>
                <span>
                  Explorar
                  <br />
                  Mercado
                </span>
                <strong>→</strong>
              </a>

              <a href="/trades" className="quick-action">
                <span className="quick-action-icon">⇄</span>
                <span>
                  Iniciar
                  <br />
                  Intercambio
                </span>
                <strong>→</strong>
              </a>

              <a href="/community" className="quick-action">
                <span className="quick-action-icon">♙</span>
                <span>
                  Únete a la
                  <br />
                  Comunidad
                </span>
                <strong>→</strong>
              </a>
            </aside>
          </div>

          <div className="home-middle-layout">
            <PopularCards />
            <UpcomingEvents />
          </div>

          <div className="home-bottom-layout">
            <CommunityActivity />
            <FeaturedUsers />
          </div>
        </main>
      </div>
    </div>
  );
}
