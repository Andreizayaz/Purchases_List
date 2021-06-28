'use strict'

export const displayPurchasesList = (purchasesArray, purchasesCategoriesList) => {
  if (purchasesArray.length) {
    if (purchasesCategoriesList.previousElementSibling) {
      purchasesCategoriesList.previousElementSibling.remove();
    }
    purchasesArray = purchasesArray.sort();
    purchasesArray.forEach((item,index) => {
      purchasesCategoriesList.insertAdjacentHTML('beforeend', `<li class="purchases-category">
              <h3 class="purchases-category-header">${Object.keys(item)[0]}</h3>
              <ul class = "purchases-list-by-category"></ul>
              `);
      let listByCategory = document.querySelector(`.purchases-category:nth-child(${index + 1}) .purchases-list-by-category`);
      item[Object.keys(item)[0]].forEach(item => {
        listByCategory.insertAdjacentHTML('beforeend', ` <li class="purchas">
                  <p class="purchas-name">${item}</p>
                  <div class="addition-actions-block">
                    <input type="checkbox" class="check-complete" name = "check-complete">
                    <button class="btn btn-edit" name="edit">
                      <img class="insider-image" src="img/01_edit_icon.png" alt="edit" class="btn-icon" title="редактировать">
                    </button>
                    <button class="btn btn-delete" name="delete">
                      <img class="insider-image"src="img/02_delete_icon.png" alt="delete" class="btn-icon" title="удалить">
                    </button>
                  </div>
                </li>`)
      })
    })
    console.log(purchasesArray);
    return;
  }

  purchasesCategoriesList.insertAdjacentHTML('beforebegin', '<p class="text-info">Список продуктов для покупки пуст</p>')
}

export const editPurchasesItems = (e, purchasesArray) => {
  switch (e.target.name) {
    case "check-complete":
      e.target.closest('li').classList.toggle('text-through');
      break;
  
    default:
      break;
  }
}