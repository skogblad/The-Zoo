import { useEffect, useState } from "react";
import { getAnimalById } from "../services/animalService";
import type { IAnimal } from "../models/IAnimal";
import { HomePresentation } from "../components/HomePresentation/HomePresentation";

export const Home = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const [monthlyAnimals, setMonthlyAnimals] = useState<{niceAnimal: IAnimal | null, badAnimal: IAnimal | null}>({niceAnimal: null, badAnimal: null})

  useEffect(() => {
    const getData = async () => {
      const firstAnimal = await getAnimalById(3)
      const secondAnimal = await getAnimalById(5);
      const thirdAnimal = await getAnimalById(2)
      
      setAnimals([firstAnimal, secondAnimal, thirdAnimal])
    }

    getData();
  }, []);

  useEffect(() => {
    const getMonthlyAnimals = async () => {
      const niceAnimal = await getAnimalById(6);
      const badAnimal = await getAnimalById(10);

      setMonthlyAnimals({niceAnimal, badAnimal});
    }

    getMonthlyAnimals();
  })
  
  return (
    <HomePresentation animals={animals} monthlyAnimals={monthlyAnimals}/>
  )
}