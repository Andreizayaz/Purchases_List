'use strict'

export const displayPurchasesList = (purchasesArray, purchasesCategoriesList) => {
  if (purchasesArray.length) {
    if (purchasesCategoriesList.previousElementSibling) {
      purchasesCategoriesList.previousElementSibling.remove();
    }
    purchasesArray = purchasesArray.sort();
    console.log(purchasesArray);
    return;
  }

  purchasesCategoriesList.insertAdjacentHTML('beforebegin', '<p class="text-info">Список продуктов для покупки пуст</p>')
}