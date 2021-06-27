'use strict'

export const initSelectListOptions = (categories, selectField) => {
  categories.forEach(item=>{
    selectField.insertAdjacentHTML('beforeend', `<option class="option-item" value="${item}">${item}</option>`)
  })
}