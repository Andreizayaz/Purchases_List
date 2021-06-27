'use strict'

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

export const addPurchaseItem = (e, obj, arr, inputField) => {  
  e.preventDefault();
  if (arr.length) {
    if (arr.some(item=>item.hasOwnProperty(obj.category))) {
      arr.find(item => item.hasOwnProperty(obj.category))[obj.category].push(obj['purchase-name'])
    } else {
      arr.push({ [obj.category]: [obj['purchase-name']]});
    }
  } else {
    arr.push({ [obj.category]: [obj['purchase-name']]});
  }
  arr.sort(sortArrayByPropertyName)
  localStorage.setItem('purchases', JSON.stringify(arr));
  inputField.value = '';
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