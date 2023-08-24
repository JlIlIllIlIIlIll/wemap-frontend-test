import { ArrowLeft, ArrowRight } from "lucide-react";

// Composant Pagination pour naviguer entre les pages de données
const Pagination = ({ handlePrev, handleNext, offset, limit, total }) => {
  // Calcul du début et de la fin de l'affichage actuel
  const start = offset + 1;
  const end = offset + limit > total ? total : offset + limit;

  return (
    <div className="flex flex-col items-center pt-4">
      {/* // Affichage du nombre d'entrées actuellement visibles */}
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Affichage de{" "}
        <span className="font-semibold text-slate-900 dark:text-slate-100">
          {start}
        </span>{" "}
        à{" "}
        <span className="font-semibold text-slate-900 dark:text-slate-100">
          {end}
        </span>{" "}
        sur{" "}
        <span className="font-semibold text-slate-900 dark:text-slate-100">
          {total}
        </span>{" "}
        entrées
      </span>
      {/* // Boutons de navigation pour aller à la page précédente ou suivante */}
      <div className="flex gap-x-10 mt-2 xs:mt-0">
        {/* // Bouton "Précédent" */}
        <button
          onClick={handlePrev}
          className="flex items-center justify-center gap-x-1 w-36 h-10 text-sm font-medium text-slate-100 bg-slate-800 rounded hover:bg-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-100"
        >
          <ArrowLeft size={16} className="mt-1" />
          Précédent
        </button>
        {/* // Bouton "Suivant" */}
        <button
          onClick={handleNext}
          className="flex items-center justify-center gap-x-1 w-36 h-10 text-sm font-medium text-slate-100 bg-slate-800 rounded hover:bg-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-100"
        >
          Suivant
          <ArrowRight size={16} className="mt-1" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
