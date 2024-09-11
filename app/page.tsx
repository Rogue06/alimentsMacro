'use client'

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { Aliment, aliments } from './data/foods';
import Search from './components/Search';
import AlimentInfo from './components/AlimentInfo';
import NutritionInfo from './components/NutritionInfo';
import DarkModeToggle from './components/DarkModeToggle';

export default function Home() {
  const [recherche, setRecherche] = useState('');
  const [alimentSelectionne, setAlimentSelectionne] = useState<Aliment | null>(null);
  const [grammage, setGrammage] = useState<number | ''>('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const alimentsFiltres = aliments.filter(aliment =>
    aliment.nom.toLowerCase().includes(recherche.toLowerCase())
  );

  const handleSelectionAliment = (aliment: Aliment) => {
    setAlimentSelectionne(aliment);
    setRecherche('');
  };

  const calculerNutriments = (aliment: Aliment, grammes: number) => {
    const facteur = grammes / 100;
    return {
      calories: aliment.calories * facteur,
      proteines: aliment.proteines * facteur,
      glucides: aliment.glucides * facteur,
      lipides: aliment.lipides * facteur,
    };
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-100 to-purple-100'}`}>
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <Image
            className={`${isDarkMode ? 'invert' : ''} mb-4`}
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={120}
            height={25}
            priority
          />
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </header>

        <main className="space-y-8">
          <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Informations Nutritionnelles
          </h1>
          
          <Search
            recherche={recherche}
            setRecherche={setRecherche}
            alimentsFiltres={alimentsFiltres}
            handleSelectionAliment={handleSelectionAliment}
            isDarkMode={isDarkMode}
          />

          <AlimentInfo alimentSelectionne={alimentSelectionne} isDarkMode={isDarkMode} />

          {alimentSelectionne && (
            <NutritionInfo
              alimentSelectionne={alimentSelectionne}
              grammage={grammage}
              setGrammage={setGrammage}
              calculerNutriments={calculerNutriments}
              isDarkMode={isDarkMode}
            />
          )}
        </main>

        <footer className="mt-12 text-center">
          {/* ... Gardez le contenu du footer existant ... */}
        </footer>
      </div>
    </div>
  );
}
