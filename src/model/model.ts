/**
 * Class
 */
export class Palier{
  matiere: string;
  classe: string;
  pointAGagner : number;
  caurisADecrocher: number;
  niveauAPasser: number;
  animalADecouvrir: number;
  currentlevel: number;

}
export class Joueur{
  nom : string;
  prenom : string;
  adresse: string;
  ecole: string;
  age: number;
}

export class Lecon{
  niveau: number;
  title : string;
  description: string;
  questionnaires : Questionnaire[];
  isValidate : boolean = false;
  caurisAGagner: number;
}

export class Questionnaire{
  question: string;
  reponse: string;
  isCorrect: boolean = false;
  pointAGagner : number;
}

/**
 * CONST
 */
export const PALIER_MATH_CP : Palier = {
  matiere: 'Mathematique',
  classe: 'cp',
  pointAGagner : 52104,
  caurisADecrocher: 80,
  niveauAPasser: 60,
  animalADecouvrir: 60,
  currentlevel: 1
}

export const JOUEURS : Joueur[] = [
  {
    nom : 'Ka',
    prenom : 'Abdou',
    adresse: 'Sacré-coeur',
    ecole: 'Ecole police',
    age: 12
  }
]

export const LECON_ARITH : Lecon =   {
  niveau: 1,
  title : "Arithmetique",
  description: "Ecriture des nombre de 0 à 20",
  questionnaires:
    [
      {
        question : "2 X 3",
        reponse : "6",
        pointAGagner : 10,
        isCorrect: false
      },
      {
        question : "5 Batonés + 4 Batonés ",
        reponse : "9",
        pointAGagner : 10,
        isCorrect: false
      },
      {
        question : "7 - 1",
        reponse : "6",
        pointAGagner : 10,
        isCorrect: false
      },
      {
        question : "1 X 1",
        reponse : "1",
        pointAGagner : 10,
        isCorrect: false
      },
    ],
  isValidate: false,
  caurisAGagner: 5
}
