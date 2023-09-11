class Personne {
    constructor(prenom, nom, age, ville) {
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
        this.ville = ville;
    }

    toString() {
        return this.prenom + ", " + this.nom + ", " + this.age + ", " + this.ville
    }
}

function afficherTableauPersonnes(tab) {
    for (let i = 0; i < tab.length; i++) {
        console.log(tab[i].toString());
    }
}

/* Exercice 1 ------------------------------------------  */

console.log("Exercice 1 : --------------------------");
const personne = new Personne("Alexandre", "Lerosier", 18, "Caen");
console.log(personne.toString());


/* Exercice 2 ------------------------------------------  */
console.log("Exercice 2 : --------------------------");

let personnes = [];
personnes.push(new Personne("John", "Doe", 25, "Rouan"));
personnes.push(new Personne("Jane", "Doe", 30, "Pares"));
personnes.push(new Personne("Jim", "Doe", 35, "Caen"));

afficherTableauPersonnes(personnes);
console.table(personnes);

/* Exercice 3 ------------------------------------------  */
console.log("Exercice 3 : --------------------------");

personnes.push(new Personne("Marc", "Doe", 32, "Marseille"))

afficherTableauPersonnes(personnes);
console.table(personnes);

/* Exercice 4 ------------------------------------------  */
console.log("Exercice 4 : --------------------------");

personnes[0].prenom = "Jean";
personnes.splice(1, 1);

afficherTableauPersonnes(personnes);
console.table(personnes);

/* Exercice 5 ------------------------------------------  */
console.log("Exercice 5 : --------------------------");

let numeros = [];
for (let i = 0; i < 10; i++) {
    numeros[i] = i + 1;
}

console.log("élément 1 : " + numeros[0]);
console.log("élément 10 : " +numeros[9]);
console.log("longueur : " + numeros.length);

/* Exercice 6 ------------------------------------------  */
console.log("Exercice 6 : --------------------------");

let tab6 = [];
for (let i = 0; i < 10; i++) {
    tab6[i] = (i + 1) * 10;
}

console.table(tab6);
tab6.reverse();
console.table(tab6);

/* Exercice 7 ------------------------------------------  */
console.log("Exercice 7 : --------------------------");

numbers = [ 2, 5, 1, 9, 0, 3, 7, 4, 6, 8 ];

console.table(numbers);
numbers.sort();
console.table(numbers);

/* Exercice 8 ------------------------------------------  */
console.log("Exercice 8 : --------------------------");

numbers.push(11);
console.table(numbers);

numbers.unshift(0);
console.table(numbers);

numbers.pop();
console.table(numbers); 

