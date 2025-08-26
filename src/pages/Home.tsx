import { useEffect, useState } from "react";
import type { IAnimal } from "../models/IAnimal";
import { getAnimalById } from "../services/animalService";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

export const Home = () => {
  const [animal, setAnimal] = useState<IAnimal[]>([]);
  const [monthlyAnimal, setMonthlyAnimal] = useState<IAnimal | null>(null)

  useEffect(() => {
    const getData = async () => {
      const firstAnimal = await getAnimalById(3)
      const secondAnimal = await getAnimalById(5);
      const thirdAnimal = await getAnimalById(2)
      
      setAnimal([firstAnimal, secondAnimal, thirdAnimal])
    }

    getData();
  }, []);

  useEffect(() => {
    const getMonthlyAnimal = async () => {
      const animal = await getAnimalById(6);

      setMonthlyAnimal(animal);
    }

    getMonthlyAnimal();
  })
  
  return (
    <>
      <div className={styles.imgContainer}>
        {animal.map((a) => (
          <div key={a.id} className={styles.pictures}>
            <img src={a.imageUrl} alt={a.latinName} />
          </div>
        ))}
      </div>

      <article className={styles.aboutContainer}>
        <h2>Upptäck vår lilla djurvärld på ZooZoom</h2>
        <p>Hos oss zoomar du in på en värld full av gosiga katter, busiga kaniner och spännande småkryp som spindlar och vandrande pinnar. Kom nära djuren, lek, mata och upptäck deras små hemligheter – här finns roliga överraskningar för både stora och små på varje steg av äventyret!</p>
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