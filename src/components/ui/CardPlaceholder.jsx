// Composant CardPlaceholder qui sert de squelette pendant le chargement des données.
const CardPlaceholder = () => {
  return (
    // Conteneur principal du placeholder
    <div
      role="status" // Rôle ARIA pour indiquer un élément de statut
      className="w-full flex flex-col items-center bg-slate-200 border border-slate-300 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
    >
      {/* // Placeholder pour l'image */}
      <div className="flex items-center justify-center h-20 m-2 w-24 rounded-full border border-slate-300 bg-gray-300 dark:bg-gray-700">
        {/* // Icône SVG comme placeholder pour une image ou un avatar */}
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true" // Cache l'élément aux technologies d'assistance
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        ></svg>
      </div>
      {/* // Placeholder pour le contenu du texte */}
      <div className="flex flex-col md:text-left justify-between p-4 leading-normal">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        {/* // Placeholder pour une icône et du texte associé */}
        <div className="flex items-center mt-4 space-x-3">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-700"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          ></svg>
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
      {/* // Texte pour les technologies d'assistance pour indiquer le chargement */}
      <span className="sr-only">Chargement...</span>
    </div>
  );
};

export default CardPlaceholder;
