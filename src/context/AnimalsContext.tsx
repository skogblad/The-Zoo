import { createContext } from "react";
import type { IAnimal } from "../models/IAnimal";

export interface IAnimalsContext {
  animals: IAnimal[];
  feedAnimal: (id: number) => void;
}

export const AnimalsContext = createContext<IAnimalsContext>({
  animals: [],
  feedAnimal: () => {},
});