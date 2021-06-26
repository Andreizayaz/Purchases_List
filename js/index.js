'use strict'

import { showTimeAndDate } from './timeAndDate.js';
import { setPurchaseData, checkIfInputFill, addPurchaseItem } from './formActions.js';

const time = document.querySelector(".time");
const date = document.querySelector(".date")
const selectField = document.querySelector(".categories-list-select");
const inputField = document.querySelector(".purchas-input");
const addBtn = document.querySelector("#add");

const purchaseObject = {};
const purchases = [];

setTimeout(() => showTimeAndDate(time, date), 1000);

selectField.addEventListener('change', (e) => setPurchaseData(e, purchaseObject));
inputField.addEventListener('input', (e) => setPurchaseData(e, purchaseObject, addBtn));
inputField.addEventListener('focusout', (e) => checkIfInputFill(e, addBtn));
addBtn.addEventListener('click', (e) => addPurchaseItem(e, purchaseObject, purchases));