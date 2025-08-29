import styles from "./HomePresentation.module.scss";
import { Link } from "react-router-dom";
import type { IAnimal } from "../../models/IAnimal";

interface HomePresentationProps {
  animals: IAnimal[];
  monthlyAnimals: {
    niceAnimal: IAnimal | null;
    badAnimal: IAnimal | null;
  }
}

export const HomePresentation = ({ animals, monthlyAnimals }: HomePresentationProps) => {
  
  return (
    <>
      <div className={styles.imgContainer}>
        {animals.map((a) => (
          <div key={a.id} className={styles.pictures}>
            <img src={a.imageUrl} alt={a.latinName} />
          </div>
        ))}
      </div>

      <article className={styles.aboutContainer}>
        <h2>Upptäck vår lilla djurvärld på ZooZoom</h2>
        <p>Hos oss zoomar du in på en värld full av gosiga katter, busiga kaniner och spännande småkryp som spindlar och vandrande pinnar. Kom nära djuren, lek, mata och upptäck deras små hemligheter. Här finns roliga överraskningar för både stora och små på varje steg av äventyret!</p>
      </article>

      <article className={styles.feedContainer}>
        <h3>Visste du att du kan mata alla våra djur?</h3> 
        <Link to={`/animals`}>
          <button>Till djuren</button>
        </Link>
      </article>

      <section className={styles.monthlyContainer}>
        <article className={styles.monthlyAnimal}>
          <h3>Månadens gull</h3>
          {monthlyAnimals.niceAnimal && (
            <>
              <p>Säg hej till {monthlyAnimals.niceAnimal.name}, vår egna minigris!</p>
              <img src={monthlyAnimals.niceAnimal.imageUrl} alt={monthlyAnimals.niceAnimal.latinName} />
            </>
          )}
          <Link to={`/animal/${monthlyAnimals.niceAnimal?.id}`}>
            <button>Läs mer</button>
          </Link>
        </article>
        
        <article className={styles.monthlyAnimal}>
          <h3>Månadens bus</h3>
          {monthlyAnimals.badAnimal && (
            <>
              <p>Se upp för {monthlyAnimals.badAnimal.name}, vår busiga kameleont!</p>
              <img src={monthlyAnimals.badAnimal.imageUrl} alt={monthlyAnimals.badAnimal.latinName} />
            </>
          )}
          <Link to={`/animal/${monthlyAnimals.badAnimal?.id}`}>
            <button>Läs mer</button>
          </Link>
        </article>
      </section>
    </>
  )
}