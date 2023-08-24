// Importation des hooks et des composants nécessaires
import { useQuery } from "react-query"; // Hook pour gérer les requêtes de données
import { useState, useMemo } from "react"; // Hooks d'état et de mémorisation

import wemapAPI from "../services/wemapAPI"; // Service pour interagir avec l'API Wemap
import Card from "./ui/Card"; // Composant pour afficher une carte d'élément
import CardPlaceholder from "./ui/CardPlaceholder"; // Composant de placeholder pendant le chargement
import Pagination from "./ui/Pagination"; // Composant de pagination
import SearchBar from "./ui/SearchBar"; // Composant de barre de recherche

const DataDisplay = () => {
  // État pour stocker et gérer le terme de recherche
  const [searchTerm, setSearchTerm] = useState("");
  // État pour gérer l'offset de la pagination
  const [offset, setOffset] = useState(0);
  // Limite fixe d'éléments à récupérer par requête
  const limit = 10;

  // Utilisation de react-query pour gérer la requête de données
  const {
    data: wemapData,
    isLoading,
    isError,
    error,
  } = useQuery(
    ["wemapData", searchTerm, offset], // Clés uniques pour cette requête
    () => wemapAPI(searchTerm, offset, limit) // Fonction pour récupérer les données
  );

  // Récupération du total des éléments si les données sont disponibles
  const total = wemapData?.count;

  // Fonction pour gérer la pagination vers l'arrière
  const handlePrev = () => {
    if (offset > 0) {
      setOffset((prevOffset) => prevOffset - limit);
    }
  };

  // Fonction pour gérer la pagination vers l'avant
  const handleNext = () => {
    if (total > offset + limit) {
      setOffset((prevOffset) => prevOffset + limit);
    }
  };

  // Utilisation de useMemo pour éviter de recréer le tableau de placeholders à chaque rendu
  const placeholders = useMemo(() => Array.from({ length: limit }), [limit]);

  return (
    <div>
      {/* Barre de recherche pour entrer et gérer le terme de recherche */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Composant de pagination pour naviguer entre les pages de résultats */}
      <Pagination
        handlePrev={handlePrev}
        handleNext={handleNext}
        offset={offset}
        limit={limit}
        total={total}
      />

      {/* Affichage des données ou des placeholders selon l'état de la requête */}
      <div className="flex flex-col items-center justify-center gap-2 w-full mt-4">
        {isLoading && // Si les données sont en cours de chargement, affiche les placeholders
          placeholders.map((_, index) => <CardPlaceholder key={index} />)}
        {isError && ( // Si une erreur s'est produite, affiche un message d'erreur
          <div>
            Une erreur s'est produite lors du chargement des données.
            {/* Affichage des détails de l'erreur si disponibles */}
            {error?.message && <p>{error.message}</p>}
          </div>
        )}
        {wemapData?.results.map(
          (
            item // Si les données sont disponibles, affiche les cartes d'éléments
          ) => (
            <Card key={item.id} item={item} />
          )
        )}
      </div>

      {/* Autre composant de pagination en bas pour une meilleure UX */}
      <Pagination
        handlePrev={handlePrev}
        handleNext={handleNext}
        offset={offset}
        limit={limit}
        total={total}
      />
    </div>
  );
};

// Exportation du composant pour une utilisation dans d'autres parties de l'application
export default DataDisplay;
