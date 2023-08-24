import axios from "axios";

// Création d'une instance d'axios avec une base d'URL pour éviter les répétitions
const wemapAPI = axios.create({
  baseURL: "https://api.getwemap.com/v3.0/",
});

/**
 * Récupère les données de Wemap en fonction d'une requête donnée.
 *
 * @param {string} query - La requête de recherche.
 * @param {number} [offset=0] - L'offset pour la pagination.
 * @param {number} [limit=10] - La limite d'éléments à récupérer.
 * @returns {Object} Les données récupérées.
 * @throws {Error} Si une erreur se produit lors de la récupération des données.
 */
const fetchWemapData = async (query, offset = 0, limit = 10) => {
  // Validation des paramètres
  if (typeof offset !== "number" || offset < 0) {
    throw new Error("Le paramètre 'offset' doit être un nombre positif.");
  }
  if (typeof limit !== "number" || limit < 0) {
    throw new Error("Le paramètre 'limit' doit être un nombre positif.");
  }

  try {
    const response = await wemapAPI.get(`pinpoints/search`, {
      params: {
        query: encodeURIComponent(query),
        offset: offset,
        limit: limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    throw error;
  }
};

export default fetchWemapData;
