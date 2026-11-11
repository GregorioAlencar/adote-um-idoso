import Image from "next/image";
import BackToTop from "./components/BackToTop";
import { idosos } from "../data/idosos";

// Coloque o número da responsável no formato 55 + DDD + número, sem símbolos.
// Exemplo fictício de formato: "5511999999999". Não publique um número inventado.
const whatsappResponsavel = "5511993023322";

function linkAdocao(nome: string) {
  const mensagem = `Olá! Vi a campanha apadrinhe um Idoso neste Natal e gostaria de apadrinhar ${nome}. Poderia confirmar se ainda está disponível e me orientar sobre a entrega do presente?`;
  return whatsappResponsavel
    ? `https://wa.me/${whatsappResponsavel}?text=${encodeURIComponent(mensagem)}`
    : null;
}

export default function Home() {
  const disponiveis = idosos.filter((idoso) => !idoso.adotado).length;
  return (
    <main>
      <div className="lights" aria-hidden="true">
        ✦ · ✨ · ✦ · ✨ · ✦ · ✨ · ✦
      </div>
      <header className="hero">
        <div className="eyebrow">
          🎄 UMA CAMPANHA DE CARINHO E SOLIDARIEDADE 🎄
        </div>
        <h1>
          Apadrinhe um Idoso <span>neste Natal</span>
        </h1>
        <p>
          Neste Natal, você pode fazer a diferença na vida de um dos nossos
          idosos. Escolha alguém para presentear e ajude a tornar essa data
          ainda mais especial.
        </p>
        <div className="deadline">
          🎁 Prazo para entrega: <strong>18/12/2026</strong>
        </div>
        <a href="#idosos" className="hero-cta">
          Conheça os idosos <span aria-hidden="true">↓</span>
        </a>
      </header>
      <section id="idosos" className="content" aria-labelledby="titulo-idosos">
        <div className="section-heading">
          <div>
            <span className="section-kicker">UM GESTO, MUITOS SORRISOS</span>
            <h2 id="titulo-idosos">Escolha quem presentear ❤️</h2>
            <p>
              Conheça os pedidos de cada idoso e ajude a realizar um desejo
              neste Natal.
            </p>
          </div>
          <div className="counter">
            <strong>{disponiveis}</strong>
            <span>disponíveis</span>
          </div>
        </div>
        <div className="cards">
          {idosos.map((idoso) => {
            const link = linkAdocao(idoso.nome);
            return (
              <article
                className={`person-card ${idoso.adotado ? "adopted" : ""}`}
                key={idoso.id}
              >
                <div className="portrait" style={{ height: "450px" }}>
                  <Image
                    src={idoso.foto}
                    alt={`Foto de ${idoso.nome}`}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="person-body">
                  <h3>{idoso.nome}</h3>
                  <div className="gift-section">
                    <span className="gift-label">💚 O que precisa</span>
                    <ul>
                      {idoso.precisa.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="gift-section">
                    <span className="gift-label">
                      🎁 O que gostaria de ganhar
                    </span>
                    <ul>
                      {idoso.gostaria.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {idoso.observacao && (
                    <p className="note">{idoso.observacao}</p>
                  )}
                  {idoso.adotado ? (
                    <div className="disabled-action">
                      Já recebeu um padrinho ou madrinha ❤️
                    </div>
                  ) : link ? (
                    <a
                      className="adopt-button"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quero apadrinhar ♥
                    </a>
                  ) : (
                    <div className="disabled-action">
                      Contato da organização em breve
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
        <div className="coming-soon">
          <span>✨</span>
          <div>
            <strong>Mais idosos em breve!</strong>
            <p>Novos participantes poderão ser adicionados à campanha.</p>
          </div>
        </div>
      </section>
      <section className="closing">
        <span>🎄 🎁 🎄</span>
        <h2>Um pequeno gesto pode transformar um Natal.</h2>
        <p>Contamos com a sua solidariedade para espalhar carinho e alegria.</p>
        <a href="#idosos">Ver idosos disponíveis ↑</a>
      </section>
      <footer>
        Feito com ❤️ para o Natal de 2026 · Confirme a disponibilidade e os
        detalhes de entrega com a organização.
      </footer>
      <BackToTop />
    </main>
  );
}
