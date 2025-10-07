import { Link } from "react-router";
import styles from "./AnimalPresentation.module.scss"
import type { IAnimal } from "../../models/IAnimal";
import { useState } from "react";

interface AnimalPresentationProps {
  animal: IAnimal;
  whenLastFed: Date | null;
  hoursSinceFed: number;
  feed: () => void;
  btnDisabled: boolean;
}

export const AnimalPresentation = ({ animal, whenLastFed, hoursSinceFed, feed, btnDisabled }: AnimalPresentationProps) => {
  const placeholderUrl = "/zoozoom1.png";
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <article key={animal.id} className={styles.animal}>
      <h2>{animal.name}</h2>

      {!isLoaded && <div className={styles.skeleton}></div>}
      <img 
        src={animal.imageUrl} 
        alt={animal.latinName} 
        onLoad={() => setIsLoaded(true)}
        onError={(e) => e.currentTarget.src = placeholderUrl}
        className={!isLoaded ? styles.hidden : ""}
      />
      <p className={styles.about}>{animal.shortDescription} Född: {animal.yearOfBirth}</p>
      <p className={styles.medicine}>Medicin: {animal.medicine}</p>
      <button 
        onClick={feed} 
        disabled={btnDisabled} 
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