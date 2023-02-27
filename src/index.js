import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';

import { markup } from './js/markups/markup';
import { getCountry } from './js/api/country';

import { ERROR_MESSAGE } from './js/utils/constants/messages';

import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const {
  generateCountriesList,
  generaCountryCard
} = markup;

const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.country-list');
const wraperCardCountry = document.querySelector('.country-info');

inputEl.addEventListener('input', debounce(handleInputChange, DEBOUNCE_DELAY));

const clearContainer = () => {
  wraperCardCountry.innerHTML = '';
  listEl.innerHTML = '';
};

function handleInputChange(e) {
  const inputValue = e.target.value.trim();

  clearContainer();

  if (!inputValue) return;

  getCountry(inputValue)
    .then(data => {
      if (data.length > 10) return Notify.info(ERROR_MESSAGE);
      
      data.length >= 2 && data.length <= 10
        ? listEl.innerHTML = generateCountriesList(data)
        : wraperCardCountry.innerHTML = generaCountryCard(data);
    });
}