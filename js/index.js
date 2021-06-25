'use strict'

import { showTimeAndDate } from './timeAndDate.js';

const time = document.querySelector(".time");
const date = document.querySelector(".date")
const selectField = document.querySelector("#category");
const inputField = document.querySelector("#category");
const addBtn = document.querySelector("#add");

setTimeout(()=>showTimeAndDate(time, date), 1000)