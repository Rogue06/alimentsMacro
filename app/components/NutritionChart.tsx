import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Aliment } from '../data/foods';

ChartJS.register(ArcElement, Tooltip, Legend);

interface NutritionChartProps {
  aliment: Aliment;
  grammage: number;
}

export default function NutritionChart({ aliment, grammage }: NutritionChartProps) {
  const factor = grammage / 100;
  const data = {
    labels: ['Protéines', 'Glucides', 'Lipides'],
    datasets: [
      {
        data: [
          aliment.proteines * factor,
          aliment.glucides * factor,
          aliment.lipides * factor,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Répartition des macronutriments pour ${grammage}g de ${aliment.nom}`,
      },
    },
  };

  return <Pie data={data} options={options} />;
}