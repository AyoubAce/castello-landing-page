import About from "./About";

const Featured = () => {
  return (
    <section className="featured-section">
      <About />
      <div className="featured-container">
        <div className="featured-item featured-item-pizza">
          <div className="item-img " data-aos="zoom-in">
            <img src="./assets/cast-pizza.jpg" alt="pizza" className="pizza" />
          </div>
          <div className="item-title" data-aos="fade-up">
            <h3>
              Pizza<span></span>
            </h3>
            <p>
              Nicht einfach nur eine Pizza...es ist die Pizza! Eine leckere
              Pizza nach traditionellem italienischem Rezept
            </p>
          </div>
        </div>
        <div className="featured-item featured-item-pasta">
          <div className="item-img " data-aos="zoom-in">
            <img src="./assets/pasta.png" alt="pasta" className="pasta" />
          </div>
          <div className="item-title" data-aos="fade-up">
            <h3>
              Pasta<span></span>
            </h3>
            <p>
              Ob Penne, Spaghetti, Makkaroni oder Tortellini, die Vielfalt an
              Nudelsorten ist groß, bei uns hast du die Auswahl
            </p>
          </div>
        </div>
        <div className="featured-item featured-item-more">
          <div className="item-img " data-aos="zoom-in">
            <img src="./assets/restaurant.jpg" alt="wine" className="wine" />
          </div>
          <div className="item-title" data-aos="fade-up">
            <h3>
              & mehr<span></span>
            </h3>
            <p>
              Mit einer großen Auswahl an frischen hausgemachten Gerichten, die
              mit italienischem Geschmack verfeinert sind, laden wir Sie
              herzlich ein, unsere Speisen zu probieren
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Featured;
