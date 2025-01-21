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
function afficherDossierIteratif(dossier) {
afficherDossier(dossierPrincipal)
    for (let i of dossier.contenu) {
        if (i.contenu) {
           console.log ('🗂️' + i.nom);  // Dossier
        } else {
           console.log('📑' + i.nom);  // Fichier
        }  
    }
}
afficherDossierIteratif(dossierPrincipal)