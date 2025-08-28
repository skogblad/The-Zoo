import { useContext } from "react";
import { Link } from "react-router";
import styles from "./AnimalsList.module.scss";
import { AnimalsContext } from "../../context/AnimalsContext";

export const AnimalsList = () => {
  const { animals } = useContext(AnimalsContext);
  const placeholderUrl = "/zoozoom1.png";
  
  return (
    <>
      <div className={styles.animalsGrid}>
        {animals.map((a) => (
          <article key={a.id} className={styles.animal}>
            <Link to={`/animal/${a.id}`}>
              <h3>{a.name}</h3>
              <img 
                src={a.imageUrl} 
                alt={a.latinName} 
                onError={(e) => e.currentTarget.src = placeholderUrl}
              />
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}