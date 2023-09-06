// Ex 1 ---------------------------------------------------------------------------
document.getElementById("boutonConvertir").addEventListener("click", exercice1);

/**
 * Récupère et affecte une valeur
 */
function exercice1 () {
    let celcius = document.getElementById("celcius_id").value;
    document.getElementById("fahr_id").textContent =  convertirCelciusFahr(celcius);
}

/**
 * Convertie la valeur
 * @param {*} celcius 
 * @returns température en °F
 */
function convertirCelciusFahr(celcius) {
    return  isNaN(celcius)
        ? NaN
        : Math.round(celcius * 9 / 5 + 32);
}

// Ex 2 ---------------------------------------------------------------------------
document.getElementById("ex2_longueur").addEventListener("change", exercice2);
document.getElementById("ex2_largeur").addEventListener("change", exercice2);

/**
 * Récupère les valeurs et affiche l'aire du rectangle
 */
function exercice2() {
    let longueur = document.getElementById("ex2_longueur").value;
    let largeur = document.getElementById("ex2_largeur").value;
    document.getElementById("ex2_aire").textContent = aireRectangle(longueur, largeur);
}

/**
 * Retourne l'aire du rectangle
 * @param {*} longueur 
 * @param {*} largueur 
 * @returns longueur * largeur
 */
function aireRectangle(longueur, largeur) {
    return (isNaN(longueur) || isNaN(largeur))
        ? NaN
        : longueur * largeur;
}

// Ex 3 ---------------------------------------------------------------------------
document.getElementById("ex3_nom").addEventListener("change", exercice3);
document.getElementById("ex3_prenom").addEventListener("change", exercice3);

/**
 * Récupère les valeurs et affiche l'aire du rectangle
 */
function exercice3() {
    let nom = document.getElementById("ex3_nom").value;
    let prenom = document.getElementById("ex3_prenom").value;
    document.getElementById("ex3_presentation").textContent = nom + " " + prenom;
}

// Ex 4 ---------------------------------------------------------------------------
document.getElementById("ex4_ht").addEventListener("change", exercice4);

/**
 * Récupère les valeurs et affiche l'aire du rectangle
 */
function exercice4() {
    const TVA = 20;

    let ht = document.getElementById("ex4_ht").value;
    document.getElementById("ex4_tva").textContent = TVA;
    document.getElementById("ex4_ttc").textContent = calculerPrixTTC(ht, TVA);
}

/**
 * Retorne le prix
 * @param {*} prix 
 * @param {*} taxe
 * @param prixTTC 
 */
function calculerPrixTTC(prix, taxe) {
    return (isNaN(prix) || isNaN(taxe))
        ? NaN
        : prix * (1 + taxe / 100);
}

// Ex 6 ---------------------------------------------------------------------------
document.getElementById("ex6_taille").addEventListener("change", exercice6);
document.getElementById("ex6_poids").addEventListener("change", exercice6);

function exercice6() {
    const taille = document.getElementById("ex6_taille").value;
    const poids = document.getElementById("ex6_poids").value;
    document.getElementById("ex6_imc").textContent = calculerPrixTTC(taille, poids);
}


function calculerPrixTTC(taille, poids) {
    return (isNaN(taille) || isNaN(poids))
        ? NaN
        : Math.round(poids / (taille * taille) * 100) / 100;
}

// Ex 7 ---------------------------------------------------------------------------
document.getElementById("ex7_total").addEventListener("change", exercice7);

function exercice7() {
    const SEUILLE = 60;

    const total = document.getElementById("ex7_total").value;
    document.getElementById("ex7_resultat").textContent = calculerFraisLivraison(total, SEUILLE);
}

function calculerFraisLivraison(prix, seuille) {
    if (isNaN(prix) || isNaN(seuille)) {
        return "Prix invalide !";
    } else if (prix < seuille) {
        return `Frais de livraison : ${prix} euros"`;
    } else {
        return "Livraison gratuite !";
    }
}

// Ex 8 ---------------------------------------------------------------------------
document.getElementById("ex8_binaire").addEventListener("change", exercice8);

function exercice8() {
    const binaire = document.getElementById("ex8_binaire").value;
    document.getElementById("ex8_decimal").textContent = convertionBinaireDecimal(binaire);
}

function convertionBinaireDecimal(binaire) {
    return parseInt(binaire, 2).toString(10);
}