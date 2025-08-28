import { useEffect, useState } from "react";
import type { IAnimal } from "../../models/IAnimal";
import { getAnimals } from "../../services/animalService";
import { AnimalsList } from "../../components/AnimalsList/AnimalsList";

export const AnimalApp = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

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
      <AnimalsList animals={animals} />
    </>
  );
}