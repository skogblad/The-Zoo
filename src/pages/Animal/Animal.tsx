import { Link, useLoaderData } from "react-router";
import type { AnimalLoader } from "../../loaders/animalLoader";
import styles from "./Animal.module.scss";
import { useState } from "react";

export const Animal = () => {
  const { animal } = useLoaderData<AnimalLoader>();
  const placeholderUrl = "/zoozoom1.png";

  const [whenLastFed, setWhenLastFed] = useState<Date | null>(() => {
    const saved = localStorage.getItem(`lastFed-${animal.id}`);
    return saved ? new Date(JSON.parse(saved)) : animal.lastFed ? new Date(animal.lastFed) : null;
  });

  const [isFed, setIsFed] = useState<boolean>(animal.isFed);

  const feed = () => {
    const currentTime = new Date();
    setWhenLastFed(currentTime);
    setIsFed(true);

    localStorage.setItem(`lastFed-${animal.id}`, JSON.stringify(currentTime));
  }

  console.log("Är matad:", isFed)

  const btnDisabled = () => {
    if (!whenLastFed) return false;

    const timeDiff = new Date().getTime() - whenLastFed.getTime();
    const lastFedTime = timeDiff / (1000 * 60 * 60);
    
    return lastFedTime < 4 || isFed;
  }

  const hoursSinceFed = whenLastFed ? (new Date().getTime() - whenLastFed.getTime()) / (1000 * 60 * 60) : 0;

  return (
    <article key={animal.id} className={styles.animal}>
      <h2>{animal.name}</h2>
      <img 
        src={animal.imageUrl} 
        alt={animal.latinName} 
        onError={(e) => e.currentTarget.src = placeholderUrl}
      />
      <p className={styles.about}>{animal.shortDescription} Född: {animal.yearOfBirth}</p>
      <p className={styles.medicine}>Medicin: {animal.medicine}</p>
      <button 
        onClick={feed} 
        disabled={btnDisabled()} 
        className={styles.feedBtn}>Mata
      </button>
      {whenLastFed && <p className={styles.lastFedText}>Senast matad: {whenLastFed.toLocaleString()}</p>}
      {hoursSinceFed >= 3 && <span className={styles.hungryText}>Psst! {animal.name} börjar bli hunrig, behöver snart matas</span>}
      <p className={styles.theArt}>Om arten: {animal.longDescription}</p>
      <Link to={`/animals`}>
        <button className={styles.btnBack}>Tillbaka</button>
      </Link>
    </article>
  );
}