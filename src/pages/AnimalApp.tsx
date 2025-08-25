import { useEffect, useState } from "react"
import type { IAnimal } from "../models/IAnimal";
import { getAnimals } from "../services/animalService";
import { Link } from "react-router";

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
      {animals.map((a) => (
        <article key={a.id}>
          <Link to={`/animal/${a.id}`}>
            <h3>{a.name}</h3>
            <img src={a.imageUrl} alt={a.latinName} />
          </Link>
        </article>
      ))}
    </>
  );
}