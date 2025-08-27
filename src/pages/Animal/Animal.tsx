import { Link, useLoaderData } from "react-router";
import type { AnimalLoader } from "../../loaders/animalLoader";
import styles from "./Animal.module.scss";

export const Animal = () => {
  const { animal } = useLoaderData<AnimalLoader>();

  return (
    <article key={animal.id} className={styles.animal}>
      <h2>{animal.name}</h2>
      <img src={animal.imageUrl} alt={animal.latinName} />
      <p className={styles.about}>{animal.shortDescription} Född: {animal.yearOfBirth}</p>
      <p className={styles.medicine}>Medicin: {animal.medicine}</p>
      <button>Mata</button>
      <p>{animal.lastFed}</p>
      <p className={styles.theArt}>Om arten: {animal.longDescription}</p>
      <Link to={`/animals`}>
        <button className={styles.btnBack}>Tillbaka</button>
      </Link>
    </article>
  );
}