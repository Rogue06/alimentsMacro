import React from 'react';
import { Aliment } from '../data/foods';

interface AlimentInfoProps {
  alimentSelectionne: Aliment | null;
  isDarkMode: boolean;
}

export default function AlimentInfo({ alimentSelectionne, isDarkMode }: AlimentInfoProps) {
  return (
    <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
      {alimentSelectionne
        ? `Aliment sélectionné : ${alimentSelectionne.nom}`
        : "Vous devez chercher un aliment grâce à la barre de recherche ci-dessus"}
    </p>
  );
}