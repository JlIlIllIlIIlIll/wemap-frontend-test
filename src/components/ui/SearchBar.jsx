import { Search } from "lucide-react";

// Composant SearchBar pour permettre à l'utilisateur de rechercher des données
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    // Conteneur principal de la barre de recherche
    <div className="flex items-center max-w-md mx-auto bg-slate-200 border border-slate-300 rounded-lg shadow p-2 focus-within:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 mt-4">
      {/* // Icône de recherche */}
      <Search size={20} />
      {/* // Champ de saisie pour la recherche */}
      <input
        type="text"
        value={searchTerm}
        // Met à jour la valeur de searchTerm à chaque modification du champ de saisie
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Rechercher..."
        className="ml-3 bg-transparent focus:outline-none flex-grow"
      />
    </div>
  );
};

export default SearchBar;
