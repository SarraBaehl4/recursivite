const dossierPrincipal = {
  nom: "Ada",
  contenu: [
    {
      nom: "Projets collectifs Ada",
      contenu: [
        {
          nom: "Pico8",
          contenu: [
            {
              nom: "mariokart.p8",
            },
          ],
        },
        {
          nom: "Dataviz",
          contenu: [
            {
              nom: "index.html",
            },
            {
              nom: "script.js",
            },
          ],
        },
      ],
    },
    { nom: "CV.pdf" },
    {
      nom: "Projets persos",
      contenu: [
        {
          nom: "Portfolio",
          contenu: [
            {
              nom: "index.html",
            },
            {
              nom: "script.js",
            },
          ],
        },
      ],
    },
  ],
};
//Etape 1: fonction afficherDossier qui va afficher le nom du dossier principal
//en utilisant la variable dossierPrincipal
function afficherDossier(dossier) {
  console.log(`🗂️ ${dossier.nom}`);
}
//afficherDossier(dossierPrincipal);

//Etape 2:
//fonction afficherDossierIteratif:
function afficherDossierIteratif(dossier) {
  afficherDossier(dossier);
  for (let i of dossier.contenu) {
    if (i.contenu) {
      console.log("🗂️" + i.nom); // Dossier
    } else {
      console.log("📑" + i.nom); // Fichier
    }
  }
}

//etape 2: afficher tout les sous-dossiers:
  //fonction itérative:
function afficherDossierIteratif(dossier) {
  afficherDossier(dossier);
  for (let i of dossier.contenu) {
    if (i.contenu) {
      console.log("🗂️" + i.nom); // Dossier
    } else {
      console.log("📑" + i.nom); // Fichier
    }
  }
}
  //fonction recursive:
function afficherDossierRecursif(dossier, index = 0) {
  const sousDossierAda = dossier.contenu;
  if (index < sousDossierAda.length) {
    if (sousDossierAda[index].contenu) {
      console.log(" 🗂️" + sousDossierAda[index].nom);
    } else {
      console.log(" 📑" + sousDossierAda[index].nom);
    }
    afficherDossierRecursif(dossier, index + 1);
  }
}
afficherDossier(dossierPrincipal);
afficherDossierRecursif(dossierPrincipal);
