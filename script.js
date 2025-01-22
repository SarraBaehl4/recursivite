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

//etape 3: afficher tout les sous-dossiers:
//fonction itérative:

function afficherDossierIteratif(dossier) {
  afficherDossier(dossier);
  const sousDossierAda = dossier.contenu;
  for (let i = 0; i < sousDossierAda.length; i++) {
    if (sousDossierAda[i].contenu) {
      console.log(" 🗂️" + sousDossierAda[i].nom); // Dossier
      const sousDossier = sousDossierAda[i].contenu;
      for (let j = 0; j < sousDossier.length; j++) {
        if (sousDossier[j].contenu) {
          console.log(" 🗂️" + sousDossier[j].nom); // sous-dossier niveau 1
          const sousSousDossier = sousDossier[j].contenu;
          for (let h = 0; h < sousSousDossier.length; h++) {
            if (sousSousDossier[h].contenu) {
              console.log(" 🗂️" + sousSousDossier[h].nom); // sous-dossier niveau 2
            } else {
              console.log(" 📑" + sousSousDossier[h].nom);
            }
          }
        } else {
          console.log(" 📑" + sousDossier[j].nom);
        }
      }
    } else {
      console.log(" 📑" + sousDossierAda[i].nom); // Fichier
    }
  }
}
afficherDossierIteratif(dossierPrincipal);

//fonction recursive:
// function afficherDossierRecursif(dossier, index = 0) {
//   const sousDossierAda = dossier.contenu;
//   if (index < sousDossierAda.length) {
//     if (sousDossierAda[index].contenu) {
//       console.log(" 🗂️" + sousDossierAda[index].nom);
//     } else {
//       console.log(" 📑" + sousDossierAda[index].nom);
//     }
//     afficherDossierRecursif(dossier, index + 1);
//   }
// }
//afficherDossier(dossierPrincipal);
//afficherDossierRecursif(dossierPrincipal);
