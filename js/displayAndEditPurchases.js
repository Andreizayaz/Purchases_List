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
        listByCategory.insertAdjacentHTML('beforeend', insertAdditionItemsBlock(item))
      })
    })
    console.log(purchasesArray);
    return;
  }

  purchasesCategoriesList.insertAdjacentHTML('beforebegin', '<p class="text-info">Список продуктов для покупки пуст</p>')
}

export const editPurchasesItems = (e, purchasesArray) => {
  switch (e.target.name) {
    case 'check-complete':
      e.target.closest('li').classList.toggle('text-through');
      checkItem(e, purchasesArray);
      break;
   case 'edit':
      e.target.closest('li').querySelector('p').contentEditable = true;
      break;
    case `delete`:
      e.target.closest('li').remove();
    break;
    default:
      break;
  }
}

const insertAdditionItemsBlock = ({ name, checked }) => {
  if (checked) {
    return ` <li class="purchas text-through">
                  <p class="purchas-name">${name}</p>
                  <div class="addition-actions-block">
                  <input type = "checkbox" class = "check-complete" name = "check-complete" checked>
                    <button class="btn btn-edit" name="edit">
                      <img class="insider-image" src="img/01_edit_icon.png" name="edit" alt="edit" class="btn-icon" title="редактировать">
                    </button>
                    <button class="btn btn-delete" name="delete">
                      <img class="insider-image"src="img/02_delete_icon.png" name="delete" alt="delete" class="btn-icon" title="удалить">
                    </button>
                  </div>
                </li>`
  }

  return ` <li class="purchas">
                  <p class="purchas-name">${name}</p>
                  <div class="addition-actions-block">
                  <input type = "checkbox" class = "check-complete" name = "check-complete">
                    <button class="btn btn-edit" name="edit">
                      <img class="insider-image" src="img/01_edit_icon.png" name="edit" alt="edit" class="btn-icon" title="редактировать">
                    </button>
                    <button class="btn btn-delete" name="delete">
                      <img class="insider-image"src="img/02_delete_icon.png" name="delete" alt="delete" class="btn-icon" title="удалить">
                    </button>
                  </div>
                </li>`
}

const checkItem = (e, purchasesArray) => {
  const purchaseCategory = e.target.closest('.purchases-category').querySelector('.purchases-category-header').innerText;
  const purchaseName = e.target.closest('li').querySelector('p').innerText;
  const purchaseItem = purchasesArray.find(item => Object.keys(item)[0] === purchaseCategory)[purchaseCategory].find(item => item.name === purchaseName).checked = true;
  localStorage.setItem('purchases', JSON.stringify(purchasesArray));
}