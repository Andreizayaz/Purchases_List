'use strict'

import { categories } from './data.js';
import { showTimeAndDate } from './timeAndDate.js';
import { setPurchaseData, checkIfInputFill, addPurchaseItem} from './formActions.js';
import { displayPurchasesList, editPurchasesItems } from './displayAndEditPurchases.js';
import { initSelectListOptions } from './initCategoriesList.js';

const time = document.querySelector(".time");
const date = document.querySelector(".date");
const selectField = document.querySelector(".categories-list-select");
const inputField = document.querySelector(".purchas-input");
const addBtn = document.querySelector("#add");
const purchasesCategoriesList = document.querySelector('.purchases-categories-list');

let purchasesArray = JSON.parse(localStorage.getItem('purchases')) || [];

initSelectListOptions(categories, selectField);

displayPurchasesList(purchasesArray, purchasesCategoriesList);

const purchaseObject = {
  category: selectField.value,
  checked:false,
};

setTimeout(() => showTimeAndDate(time, date), 1000);

selectField.addEventListener('change', (e) => setPurchaseData(e, purchaseObject));
inputField.addEventListener('input', (e) => setPurchaseData(e, purchaseObject, addBtn));
inputField.addEventListener('focusout', (e) => checkIfInputFill(e, addBtn));
addBtn.addEventListener('click', (e) => addPurchaseItem(e, purchaseObject, purchasesArray, inputField));
purchasesCategoriesList.addEventListener('click', (e, purchasesArray) => editPurchasesItems(e, purchasesArray));