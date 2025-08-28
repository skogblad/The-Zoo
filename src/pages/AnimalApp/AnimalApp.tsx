import { useEffect, useState } from "react";
import type { IAnimal } from "../../models/IAnimal";
import { getAnimals } from "../../services/animalService";
//import styles from "./AnimalApp.module.scss";
import { AnimalsContext } from "../../context/AnimalsContext";
import { AnimalsList } from "../../components/AnimalsList/AnimalsList";

export const AnimalApp = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    const getData = async () => {
      const animal = await getAnimals();
      setAnimals(animal);
    }

    getData();
  }, []);
  
  return (
    <AnimalsContext.Provider value={{ animals, feedAnimal: () => {} }}>
      <h2>Djuren hos oss</h2>
      <AnimalsList />
    </AnimalsContext.Provider>
  );
}