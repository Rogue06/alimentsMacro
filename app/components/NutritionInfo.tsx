import React from 'react';
import { Aliment } from '../data/foods';
import NutritionChart from './NutritionChart';
import styles from './NutritionInfo.module.css';

interface NutritionInfoProps {
  alimentSelectionne: Aliment;
  grammage: number | '';
  setGrammage: (grammage: number | '') => void;
  calculerNutriments: (aliment: Aliment, grammes: number) => Record<string, number>;
  isDarkMode: boolean;
}

export default function NutritionInfo({ alimentSelectionne, grammage, setGrammage, calculerNutriments, isDarkMode }: NutritionInfoProps) {
  const handleGrammageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setGrammage('');
    } else {
      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        setGrammage(numValue);
      }
    }
  };

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : styles.light}`}>
      <input
        type="text"
        value={grammage}
        onChange={handleGrammageChange}
        placeholder="Grammage (en grammes)"
        className={`${styles.input} ${isDarkMode ? styles.dark : styles.light}`}
      />

      {grammage && (
        <div>
          <h2 className={styles.title}>
            Informations nutritionnelles pour {grammage}g de {alimentSelectionne.nom}
          </h2>
          <div className={styles.grid}>
            <ul className={styles.list}>
              {Object.entries(calculerNutriments(alimentSelectionne, Number(grammage))).map(([nutriment, valeur]) => (
                <li key={nutriment} className={styles.listItem}>
                  <span className={styles.label}>{nutriment}</span>
                  <span>{valeur.toFixed(2)}</span>
                </li>
              ))}
              <li className={styles.listItem}>
                <span className={styles.label}>Vitamines</span>
                <span>{alimentSelectionne.vitamines.join(', ')}</span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.label}>Minéraux</span>
                <span>{alimentSelectionne.mineraux.join(', ')}</span>
              </li>
            </ul>
            <div>
              <NutritionChart aliment={alimentSelectionne} grammage={Number(grammage)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}