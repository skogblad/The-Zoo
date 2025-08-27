import { useEffect, useState } from "react";
import type { IAnimal } from "../../models/IAnimal";
import { getAnimals } from "../../services/animalService";
import { Link } from "react-router";
import styles from "./AnimalApp.module.scss";

export const AnimalApp = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const placeholderUrl = "/zoozoom1.png";

  useEffect(() => {
    const getData = async () => {
      const animals = await getAnimals();
      setAnimals(animals);
    }

    getData();
  }, []);
  
  return (
    <>
      <h2>Djuren hos oss</h2>
      <div className={styles.animalsGrid}>
        {animals.map((a) => (
          <article key={a.id} className={styles.animal}>
            <Link to={`/animal/${a.id}`}>
              <h3>{a.name}</h3>
              <img src={a.imageUrl} alt={a.latinName} onError={(e) => e.currentTarget.src = placeholderUrl}/>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}