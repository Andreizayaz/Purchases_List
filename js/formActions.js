'use strict'

export const setPurchaseData = ({ target: { name }, target: { value } }, obj, arr) => {  
  obj[name] = value;
}

// export const 

export const addPurchaseItem = (e, obj, arr) => {
  e.preventDefault();
  if (!obj['purchase-name'].trim()) {
    document.querySelector('input').insertAdjacentHTML('afterend', '<p>Поле "Название продукта" не может быть пустым</p>');
    return;
  }
  arr.push(obj);
  localStorage.setItem('purchases', JSON.stringify(arr));
  obj['category']= '';
  obj['purchase-name'] = '';
  return;
}