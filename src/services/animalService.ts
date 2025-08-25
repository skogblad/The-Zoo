import type { IAnimal } from "../models/IAnimal";
import { get } from "./serviceBase";

const BASE_URL = "https://animals.azurewebsites.net/api/animals";

export const getAnimals = async (): Promise<IAnimal[]> => {
  const data = await get <IAnimal[]>(BASE_URL);

  localStorage.setItem("animals", JSON.stringify(data))

  return data
}

export const getAnimalById = async (id: number): Promise<IAnimal> => {
  return await get <IAnimal>(`${BASE_URL}/${id}`)
}