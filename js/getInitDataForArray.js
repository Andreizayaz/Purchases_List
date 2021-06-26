'use strict'

export const getInitDataForArray = (arr) => { 
  arr = JSON.parse(localStorage.getItem('purchases')) || [];
}