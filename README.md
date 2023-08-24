# Test Frontend - Wemap

Ce dépôt est une implémentation du test frontend pour Wemap. Il utilise React pour créer une interface utilisateur qui permet de rechercher, afficher, et paginer des données provenant de l'API de Wemap.

## Structure du projet

- **services/wemapAPI.js** : Contient la logique pour effectuer des requêtes à l'API de Wemap.
- **ui/** : Ce dossier contient des composants d'interface utilisateur réutilisables tels que `Card`, `CardPlaceholder`, `Pagination`, et `SearchBar`.
- **DataDisplay.js** : Le composant principal qui orchestre la recherche, l'affichage des données, et la pagination.

## Comment démarrer

1. Clonez ce dépôt.
2. Installez les dépendances avec `npm install`.
3. Lancez l'application avec `npm run dev`.

## Fonctionnalités

- **Recherche** : Utilisez la barre de recherche pour filtrer les données affichées.
- **Pagination** : Naviguez entre les pages de résultats.
- **Affichage des données** : Les résultats sont affichés sous forme de cartes avec une image, un nom, et une adresse.

## Choix de conception

- **React Query** : Utilisé pour gérer les requêtes de données et la mise en cache.
- **Axios** : Une bibliothèque de requêtes HTTP pour interagir avec l'API.
- **Lucide-react** : Une bibliothèque d'icônes pour embellir l'interface utilisateur.
