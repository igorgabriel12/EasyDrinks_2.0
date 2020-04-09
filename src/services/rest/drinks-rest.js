import api from '../api';

export const getDrinksByCategory = (category) => {
  return api.get(`/filter.php?c=${category}`);
};

export const getDrinksAlcoholic = (alcoholic) => {
  return api.get(`/filter.php?a=${alcoholic}`);
};

export const getDrinkById = (idDrink) => {
  return api.get(`/lookup.php?i=${idDrink}`);
};

export const getDrinksGlass = (glass) => {
  return api.get(`/filter.php?g=${glass}`);
};

export const getDrinksIgradient = (igradient) => {
  return api.get(`/filter.php?i=${igradient}`);
};
