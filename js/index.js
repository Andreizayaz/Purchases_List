'use strict'

import { categories } from './data.js';
import { showTimeAndDate } from './timeAndDate.js';
import { setPurchaseData, checkIfInputFill, addPurchaseItem} from './formActions.js';
import { displayPurchasesList } from './displayAndEditPurchases.js';
import { initCategoriesObject } from './initCategoriesList.js';

const time = document.querySelector(".time");
const date = document.querySelector(".date");
const selectField = document.querySelector(".categories-list-select");
const inputField = document.querySelector(".purchas-input");
const addBtn = document.querySelector("#add");
const purchasesCategoriesList = document.querySelector('.purchases-categories-list');

//const purchaseObject = initCategoriesObject(categories);

const purchaseObject = {
  category: selectField.value,
};
let purchasesArray= JSON.parse(localStorage.getItem('purchases'))||[];

setTimeout(() => showTimeAndDate(time, date), 1000);

displayPurchasesList(purchasesArray, purchasesCategoriesList);
//getInitDataForArray(purchasesArray);

selectField.addEventListener('change', (e) => setPurchaseData(e, purchaseObject));
inputField.addEventListener('input', (e) => setPurchaseData(e, purchaseObject, addBtn));
inputField.addEventListener('focusout', (e) => checkIfInputFill(e, addBtn));
addBtn.addEventListener('click', (e) => addPurchaseItem(e, purchaseObject, purchasesArray, inputField));