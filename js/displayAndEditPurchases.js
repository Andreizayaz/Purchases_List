'use strict'

export const displayPurchasesList = (purchasesArray, purchasesCategoriesList) => {
  if (purchasesArray.length) {
    if (purchasesCategoriesList.previousElementSibling) {
      purchasesCategoriesList.previousElementSibling.remove();
    }
    purchasesArray = purchasesArray.map(i => JSON.parse(i)).sort((a,b)=>sortArrayByPropertyName(a, b));
    console.log(purchasesArray);
    return;
  }

  purchasesCategoriesList.insertAdjacentHTML('beforebegin', '<p class="text-info">Список продуктов для покупки пуст</p>')
}

const sortArrayByPropertyName = (firstItem, secondItem) => {
  if (firstItem.category > secondItem.category) {
    return 1;
  }
  if (firstItem.category < secondItem.category) {
    return -1;
  }
  return 0;
}