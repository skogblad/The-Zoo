import styles from "./HomePresentation.module.scss";
import { Link } from "react-router-dom";
import type { IAnimal } from "../../models/IAnimal";

interface HomePresentationProps {
  animals: IAnimal[];
  monthlyAnimal: IAnimal | null;
}

export const HomePresentation = ({ animals, monthlyAnimal }: HomePresentationProps) => {
  
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

      <article className={styles.monthlyContainer}>
        <h3>Månadens gull</h3>
        {monthlyAnimal && (
          <>
            <p>Säg hej till {monthlyAnimal.name}, vår egna minigris!</p>
            <img src={monthlyAnimal.imageUrl} alt={monthlyAnimal.latinName} />
          </>
        )}
        <Link to={`/animal/${monthlyAnimal?.id}`}>
          <button>Läs mer</button>
        </Link>
      </article>
    </>
  )
}