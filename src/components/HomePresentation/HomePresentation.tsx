import styles from "./HomePresentation.module.scss";
import { Link } from "react-router-dom";
import type { IAnimal } from "../../models/IAnimal";
import { useState } from "react";

interface HomePresentationProps {
  animals: IAnimal[];
  monthlyAnimals: {
    niceAnimal: IAnimal | null;
    badAnimal: IAnimal | null;
  }
}

export const HomePresentation = ({ animals, monthlyAnimals }: HomePresentationProps) => {
  const [loadedImages, setLoadedImages] = useState(0);

  const totalImages = animals.length + 
  (monthlyAnimals.niceAnimal ? 1 : 0) + 
  (monthlyAnimals.badAnimal ? 1 : 0);

  const handleImageLoad = () => {
    setLoadedImages(prev => prev + 1);
  }

  const isLoading = loadedImages < totalImages;

  return (
    <>
      <div className={styles.imgContainer}>
        {animals.map((a) => (
          <div key={a.id} className={styles.pictures}>
            {isLoading && <div className={styles.skeleton}></div>}
            <img src={a.imageUrl} alt={a.latinName} onLoad={handleImageLoad} className={isLoading ? styles.hidden : ""} />
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
              <div className={styles.pictures}>
                {isLoading && <div className={styles.skeleton}></div>}
                <img src={monthlyAnimals.niceAnimal.imageUrl} alt={monthlyAnimals.niceAnimal.latinName} loading="lazy" onLoad={handleImageLoad} className={isLoading ? styles.hidden : ""}/>
              </div>
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
              <div className={styles.pictures}>
                {isLoading && <div className={styles.skeleton}></div>}
                <img src={monthlyAnimals.badAnimal.imageUrl} alt={monthlyAnimals.badAnimal.latinName} loading="lazy" onLoad={handleImageLoad} className={isLoading ? styles.hidden : ""}/>
              </div>
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