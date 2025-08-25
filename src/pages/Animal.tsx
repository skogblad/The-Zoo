import { Link, useLoaderData } from "react-router"
import type { AnimalLoader } from "../loaders/animalLoader";

export const Animal = () => {
  const { animal } = useLoaderData<AnimalLoader>();

  return (
    <article>
      <h2>{animal.name}</h2>
      <img src={animal.imageUrl} alt={animal.latinName} />
      <p>{animal.shortDescription} Född: {animal.yearOfBirth}</p>
      <p>Om arten: {animal.longDescription}</p>
      <p>Medicin: {animal.medicine}</p>
      <button>Mata</button>
      <p>{animal.lastFed}</p>
      <Link to={`/animals`}>
        <button>Tillbaka</button>
      </Link>
    </article>
  );
}