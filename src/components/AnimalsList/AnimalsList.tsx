import { Link } from "react-router";
import styles from "./AnimalsList.module.scss";
import type { IAnimal } from "../../models/IAnimal";

interface AnimalListProps {
  animals: IAnimal[];
}

export const AnimalsList = ({ animals }: AnimalListProps) => {
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
      return {text: "", className: "notHungry"};
    }
  }

  return (
    <div className={styles.animalsGrid}>
      {animals.map((a) => {
        const status = feedStatus(a.id, a.lastFed);

        return (
          <article key={a.id} className={styles.animal}>
            <Link to={`/animal/${a.id}`}>
              <h3>{a.name}</h3>
              <img 
                src={a.imageUrl} 
                alt={a.latinName} 
                onError={(e) => e.currentTarget.src = placeholderUrl}
              />
              {status.text && <p className={styles[status.className]}>- {status.text} -</p>}
            </Link>
          </article>
        );
      })}
    </div>
  );
}