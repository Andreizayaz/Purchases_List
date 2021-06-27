'use strict'

export const initCategoriesObject = (categories) => {
  const objectOfCategories = {};

  categories.sort().forEach(item => objectOfCategories[item] = []);
  return objectOfCategories;
}