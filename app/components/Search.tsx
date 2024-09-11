import React from 'react';
import { Aliment } from '../data/foods';

interface SearchProps {
  recherche: string;
  setRecherche: (value: string) => void;
  alimentsFiltres: Aliment[];
  handleSelectionAliment: (aliment: Aliment) => void;
  isDarkMode: boolean;
}

export default function Search({ recherche, setRecherche, alimentsFiltres, handleSelectionAliment, isDarkMode }: SearchProps) {
  return (
    <div className="relative">
      <input
        type="text"
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
        placeholder="Rechercher un aliment"
        className={`w-full p-3 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
      />
      {recherche && (
        <ul className={`absolute z-10 w-full mt-1 max-h-60 overflow-y-auto rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          {alimentsFiltres.map((aliment) => (
            <li
              key={aliment.nom}
              onClick={() => handleSelectionAliment(aliment)}
              className={`cursor-pointer p-3 hover:bg-opacity-10 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              {aliment.nom}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}