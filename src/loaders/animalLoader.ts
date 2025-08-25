import type { LoaderFunctionArgs } from "react-router";
import type { IAnimal } from "../models/IAnimal"
import { getAnimalById } from "../services/animalService";

export type AnimalLoader = {
  animal: IAnimal;
}

export const animalLoader = async({ params }: LoaderFunctionArgs): Promise<AnimalLoader> => {
  const { id } = params;

  if (id) {
    const animal = await getAnimalById(Number(id));
    return { animal } satisfies AnimalLoader;
  }

  return {
    animal: {
      name: "",
      id: 0,
      imageUrl: "",
      latinName: "",
      shortDescription: "",
      longDescription: "",
      yearOfBirth: 0,
      medicine: "",
      isFed: false,
      lastFed: ""
    },
  };
}