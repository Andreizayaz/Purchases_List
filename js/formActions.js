'use strict'
import { displayPurchasesList } from './displayAndEditPurchases.js';

export const setPurchaseData = ({ target: { name }, target: { value } }, obj, btn) => { 
  obj[name] = value;
  if (name === 'purchase-name') {
    if ( obj[name].trim()) {
      btn.disabled = false;
      return;
    }
    btn.disabled = true;
  }
}

export const checkIfInputFill = ({target,target:{value}, target:{nextElementSibling}},btn) => {
  if (!value.trim() && nextElementSibling===null) {
    target.insertAdjacentHTML('afterend', '<p class="dangerous-text">Поле "Название продукта" не может быть пустым!!!</p>');
    return;
  }

  if (value.trim()) {
    if (nextElementSibling) {
      nextElementSibling.remove();
    }
    btn.disabled = false;
    return;
  }
}

export const addPurchaseItem = (e, obj, purchases, inputField) => {
  e.preventDefault();
  if (!obj['purchase-name'].trim().length) {
    return;
  }
  if (purchases.purchasesArray.find(item => Object.keys(item)[0] === obj.category)[obj.category].find(item => item.name === obj['purchase-name'])) {
    return
  }
  if (purchases.purchasesArray.length) {
    if (purchases.purchasesArray.some(item => item.hasOwnProperty(obj.category))) {
      purchases.purchasesArray.find(item => item.hasOwnProperty(obj.category))[obj.category].push({
        name: obj['purchase-name'],
        checked: false
      })
    } else {
      purchases.purchasesArray.push({
        [obj.category]: [{
          name: obj['purchase-name'],
          checked: false
        }]
      });
    }
  } else {
    purchases.purchasesArray.push({
      [obj.category]: [{
        name: obj['purchase-name'],
        checked: false
      }]
    });
  }
  purchases.purchasesArray.sort(sortArrayByPropertyName);
  localStorage.setItem('purchases', JSON.stringify(purchases.purchasesArray));
  inputField.value = '';
  obj['purchase-name'] = '';
  let listByCategoriesNode = document.querySelector('.purchases-categories-list');
  listByCategoriesNode.innerHTML = '';
  displayPurchasesList(purchases, listByCategoriesNode);
  return;
}

const sortArrayByPropertyName = (firstItem, secondItem) => {
  if (Object.keys(firstItem)[0] > Object.keys(secondItem)[0]) {
    return 1;
  }
  if (Object.keys(firstItem)[0] < Object.keys(secondItem)[0]) {
    return -1;
  }
  return 0;
}