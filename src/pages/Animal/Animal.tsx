import { useLoaderData } from "react-router";
import type { AnimalLoader } from "../../loaders/animalLoader";
import { useState } from "react";
import { AnimalPresentation } from "../../components/AnimalPresentation/AnimalPresentation";

export const Animal = () => {
  const { animal } = useLoaderData<AnimalLoader>();

  const [whenLastFed, setWhenLastFed] = useState<Date | null>(() => {
    const saved = localStorage.getItem(`lastFed-${animal.id}`);
    return saved ? new Date(JSON.parse(saved)) : animal.lastFed ? new Date(animal.lastFed) : null;
  });

  const [isFed, setIsFed] = useState<boolean>(animal.isFed);

  const feed = () => {
    const currentTime = new Date();
    setWhenLastFed(currentTime);
    setIsFed(true);

    localStorage.setItem(`lastFed-${animal.id}`, JSON.stringify(currentTime));
  }

  console.log("Är matad:", isFed)

  const btnDisabled = () => {
    if (!whenLastFed) return false;

    const timeDiff = new Date().getTime() - whenLastFed.getTime();
    const lastFedTime = timeDiff / (1000 * 60 * 60);
    
    return lastFedTime < 4 || isFed;
  }

  const hoursSinceFed = whenLastFed ? (new Date().getTime() - whenLastFed.getTime()) / (1000 * 60 * 60) : 0;

  return (
    <AnimalPresentation 
      animal={animal}
      whenLastFed={whenLastFed}
      hoursSinceFed={hoursSinceFed}
      feed={feed}
      btnDisabled={btnDisabled()}
    />
  );
}