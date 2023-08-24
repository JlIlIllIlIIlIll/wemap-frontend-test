const Card = ({ item }) => {
  // Gestionnaire d'erreur pour les images manquantes ou les liens brisés
  const handleImageError = (e) => {
    e.target.onerror = null; // Supprime le gestionnaire d'erreur pour éviter des appels répétés
    e.target.src = "../../assets/wemap.svg"; // Remplace par une image par défaut en cas d'erreur
  };

  return (
    // Lien vers la page détaillée de l'élément
    <a
      href={`https://livemap.getwemap.com/#/pinpoints/${item.id}`}
      target="_blank" // Ouvre le lien dans un nouvel onglet
      rel="noopener noreferrer" // Attribut de sécurité pour les liens ouverts dans un nouvel onglet
      className="w-full flex flex-col items-center bg-slate-200 border border-slate-300 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
    >
      {/* // Image de l'élément avec gestion des erreurs */}
      <img
        className="m-2 w-24 rounded-full border border-slate-300"
        src={item.image_url}
        alt={`Image de ${item.name}`} // Texte alternatif pour l'image pour l'accessibilité
        onError={handleImageError} // Appelle le gestionnaire d'erreur si l'image ne se charge pas
      />
      {/* // Conteneur pour le nom et l'adresse de l'élément */}
      <div className="flex flex-col md:text-left justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          {item.name}
        </h5>
        <p className="mb-3 font-normal text-slate-700 dark:text-slate-400">
          {item.address}
        </p>
      </div>
    </a>
  );
};

// Exportation du composant pour une utilisation dans d'autres parties de l'application
export default Card;
