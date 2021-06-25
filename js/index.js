'use strict'

import { showTimeAndDate } from './timeAndDate.js';
import { setPurchaseData } from './formActions.js';

const time = document.querySelector(".time");
const date = document.querySelector(".date")
const inputDataBlock = document.querySelector(".form-input-data-block");
const inputField = document.querySelector(".purchas-input");
const addBtn = document.querySelector("#add");

const purchaseObject = {};
const purchases = [];

setTimeout(() => showTimeAndDate(time, date), 1000);

inputDataBlock.addEventListener('change', (e) => setPurchaseData(e, purchaseObject));
addBtn.addEventListener('click', (e, obj, arr) => setPurchaseData(e, obj, arr));