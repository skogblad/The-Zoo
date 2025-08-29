import { useEffect, useState } from "react";
import { getAnimalById } from "../services/animalService";
import type { IAnimal } from "../models/IAnimal";
import { HomePresentation } from "../components/HomePresentation/HomePresentation";

export const Home = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const [monthlyAnimal, setMonthlyAnimal] = useState<IAnimal | null>(null)

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
    const getMonthlyAnimal = async () => {
      const animal = await getAnimalById(6);

      setMonthlyAnimal(animal);
    }

    getMonthlyAnimal();
  })
  
  return (
    <HomePresentation animals={animals} monthlyAnimal={monthlyAnimal}/>
  )
}