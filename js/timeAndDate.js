'use strict'

import { weekDays, months } from "./data.js";

export const showTimeAndDate = (time, date) => {
  let currentDate = new Date();
  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const weekDay = currentDate.getDay();
  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  time.innerHTML = `<span id="hour">${addZero(hour)}</span>:<span id="minutes">${addZero(minutes)}</span>:<span id="seconds">${addZero(seconds)}</span>`;
  date.innerHTML = `<span id="weekDay">${getCurrentWeekday(weekDay)}</span>, <span id="day">${day}</span> <span id="month">${getCurrentMonth(month)}</span> <span id="year">${year}</span>`
  currentDate = null;

  setTimeout(() => showTimeAndDate(time, date), 1000);
}

const addZero = (number) => {
  number = number >=10  ? number : `0${number}`;
  return number;
}

const getCurrentWeekday = (weekDay) => {
  const currentWeekDay = weekDay===0? weekDays[weekDays.length-1]:weekDays[weekDay-1];
  return currentWeekDay;
}

const getCurrentMonth = (month) => { 
  const currentMonth = months[month].slice(-1) === 'ь' || 'й' ? months[month].replace(/.$/, 'я')
    : months[month].replace(/.$/, 'а');
  return currentMonth;
}