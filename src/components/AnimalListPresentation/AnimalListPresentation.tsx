import { Link } from "react-router";
import styles from "./AnimalListPresentation.module.scss"
import type { IAnimal } from "../../models/IAnimal";

interface AnimalListPresentationProps {
  animal: IAnimal;
}

export const AnimalListPresentation = ({ animal }: AnimalListPresentationProps) => {
  const placeholderUrl = "/zoozoom1.png";
  
  const feedStatus = (id: number, lastFed: string | null) => {
    const saved = localStorage.getItem(`lastFed-${id}`)
    const lastFedTime = saved ? new Date(JSON.parse(saved)) : lastFed ? new Date(lastFed) : null;

    if (!lastFedTime) {
      return {text: "Behöver matas", className: "hungry"};
    }

    const hoursSinceFed = (new Date().getTime() - lastFedTime.getTime()) / (1000 * 60 * 60);

    if (hoursSinceFed >= 5) {
      return {text: "Behöver matas", className: "hungry"};
    } else if (hoursSinceFed >= 3) {
      return {text: "Börjar bli hungrig", className: "gettingHungry"};
    } else {
      return {text: "Mätt och belåten", className: "notHungry"};
    }
  }

  const status = feedStatus(animal.id, animal.lastFed);

  return (
    <>
      <article key={animal.id} className={styles.animal}>
        <Link to={`/animal/${animal.id}`}>
          <h3>{animal.name}</h3>
          <img 
            src={animal.imageUrl} 
            alt={animal.latinName} 
            onError={(e) => e.currentTarget.src = placeholderUrl}
          />
          {status.text && (
            <p className={styles[status.className]}>
              - {status.text} -
            </p>
          )}
        </Link>
      </article>
    </>
  );
}