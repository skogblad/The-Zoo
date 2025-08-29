import type { IAnimal } from "../../models/IAnimal";
import { AnimalListPresentation } from "../AnimalListPresentation/AnimalListPresentation";
import styles from "./AnimalList.module.scss"

interface AnimalListProps {
  animals: IAnimal[];
}

export const AnimalsList = ({ animals }: AnimalListProps) => {
  return (
    <>
      <div className={styles.animalsGrid}>
        {animals.map((a) => (
          <AnimalListPresentation key={a.id} animal={a}/>
        ))}
      </div>
    </>
  )
}