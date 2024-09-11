export interface Aliment {
  nom: string;
  calories: number;
  proteines: number;
  glucides: number;
  lipides: number;
  vitamines: string[];
  mineraux: string[];
}

export const aliments: Aliment[] = [
  {
    nom: 'Pomme de terre',
    calories: 77,
    proteines: 2,
    glucides: 17,
    lipides: 0.1,
    vitamines: ['C', 'B6'],
    mineraux: ['Potassium', 'Magnésium']
  },
  {
    nom: 'Oignon',
    calories: 40,
    proteines: 1.1,
    glucides: 9,
    lipides: 0.1,
    vitamines: ['C', 'B6'],
    mineraux: ['Potassium', 'Magnésium']
  },
  {
    nom: 'Riz',
    calories: 130,
    proteines: 2.7,
    glucides: 28,
    lipides: 0.3,
    vitamines: ['B1', 'B3'],
    mineraux: ['Fer', 'Magnésium']
  },
  {
    nom: 'Filets de poulet',
    calories: 165,
    proteines: 31,
    glucides: 0,
    lipides: 3.6,
    vitamines: ['B3', 'B6'],
    mineraux: ['Phosphore', 'Sélénium']
  },
  {
    nom: 'Steak haché 5% de matière grasse',
    calories: 136,
    proteines: 21,
    glucides: 0,
    lipides: 5,
    vitamines: ['B3', 'B12'],
    mineraux: ['Fer', 'Zinc']
  },
  {
    nom: 'Brocolis',
    calories: 34,
    proteines: 2.8,
    glucides: 7,
    lipides: 0.4,
    vitamines: ['C', 'K', 'A'],
    mineraux: ['Potassium', 'Calcium']
  },
  {
    nom: 'Pâtes',
    calories: 158,
    proteines: 5.8,
    glucides: 31,
    lipides: 0.9,
    vitamines: ['B1', 'B3', 'B9'],
    mineraux: ['Fer', 'Magnésium']
  },
  {
    nom: 'Pois chiches',
    calories: 164,
    proteines: 8.9,
    glucides: 27,
    lipides: 2.6,
    vitamines: ['B9', 'B6'],
    mineraux: ['Fer', 'Magnésium']
  },
  {
    nom: 'Haricots rouges',
    calories: 127,
    proteines: 8.7,
    glucides: 22,
    lipides: 0.5,
    vitamines: ['B9', 'K'],
    mineraux: ['Fer', 'Potassium']
  },
  {
    nom: 'Oeuf dur',
    calories: 155,
    proteines: 12.6,
    glucides: 1.1,
    lipides: 10.6,
    vitamines: ['A', 'D', 'E', 'B12'],
    mineraux: ['Fer', 'Zinc', 'Sélénium']
  },
  {
    nom: 'Filet de colin',
    calories: 82,
    proteines: 18,
    glucides: 0,
    lipides: 0.7,
    vitamines: ['B3', 'B12', 'D'],
    mineraux: ['Phosphore', 'Sélénium', 'Iode']
  },
  {
    nom: 'Saumon',
    calories: 208,
    proteines: 20,
    glucides: 0,
    lipides: 13,
    vitamines: ['D', 'B3', 'B12'],
    mineraux: ['Sélénium', 'Phosphore', 'Potassium']
  },
  {
    nom: 'Thon',
    calories: 144,
    proteines: 23.5,
    glucides: 0,
    lipides: 4.9,
    vitamines: ['B3', 'B12', 'D'],
    mineraux: ['Sélénium', 'Magnésium', 'Potassium']
  },
  {
    nom: 'Sushi',
    calories: 150,
    proteines: 5.5,
    glucides: 30,
    lipides: 0.7,
    vitamines: ['B1', 'B3'],
    mineraux: ['Phosphore', 'Sélénium', 'Iode']
  },
  {
    nom: 'Avocat',
    calories: 160,
    proteines: 2,
    glucides: 9,
    lipides: 15,
    vitamines: ['K', 'C', 'B5', 'B6', 'E'],
    mineraux: ['Potassium', 'Cuivre', 'Magnésium']
  },
  {
    nom: 'Lentilles',
    calories: 116,
    proteines: 9,
    glucides: 20,
    lipides: 0.4,
    vitamines: ['B1', 'B5', 'B6', 'B9'],
    mineraux: ['Fer', 'Magnésium', 'Phosphore', 'Zinc']
  },
  {
    nom: 'Quinoa',
    calories: 120,
    proteines: 4.4,
    glucides: 21.3,
    lipides: 1.9,
    vitamines: ['B1', 'B2', 'B6', 'E'],
    mineraux: ['Fer', 'Magnésium', 'Phosphore', 'Zinc']
  },
  {
    nom: 'Épinards',
    calories: 23,
    proteines: 2.9,
    glucides: 3.6,
    lipides: 0.4,
    vitamines: ['A', 'C', 'K', 'B9'],
    mineraux: ['Fer', 'Calcium', 'Magnésium', 'Potassium']
  },
  {
    nom: 'Yaourt nature',
    calories: 59,
    proteines: 3.6,
    glucides: 4.7,
    lipides: 3.3,
    vitamines: ['B2', 'B12', 'D'],
    mineraux: ['Calcium', 'Phosphore', 'Potassium']
  },
  {
    nom: 'Amandes',
    calories: 579,
    proteines: 21,
    glucides: 22,
    lipides: 49,
    vitamines: ['E', 'B2'],
    mineraux: ['Magnésium', 'Phosphore', 'Calcium']
  },
  {
    nom: 'Banane',
    calories: 89,
    proteines: 1.1,
    glucides: 22.8,
    lipides: 0.3,
    vitamines: ['C', 'B6'],
    mineraux: ['Potassium', 'Magnésium']
  },
  {
    nom: 'Tomate',
    calories: 18,
    proteines: 0.9,
    glucides: 3.9,
    lipides: 0.2,
    vitamines: ['C', 'A', 'K'],
    mineraux: ['Potassium', 'Manganèse']
  },
  {
    nom: 'Fromage cheddar',
    calories: 402,
    proteines: 25,
    glucides: 1.3,
    lipides: 33,
    vitamines: ['A', 'B12', 'K2'],
    mineraux: ['Calcium', 'Phosphore', 'Zinc']
  },
  {
    nom: 'Noix de coco',
    calories: 354,
    proteines: 3.3,
    glucides: 15,
    lipides: 33,
    vitamines: ['C', 'E', 'B1', 'B6'],
    mineraux: ['Manganèse', 'Cuivre', 'Sélénium']
  }
];