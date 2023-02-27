import { Notify } from 'notiflix';

import { BASE_URL } from '../utils/constants/constants';
import { NOT_FOUND } from '../utils/constants/constants';

export const getCountry = (name) => (
  fetch(`${BASE_URL}/name/${name}?fields=name,capital,population,flags,languages`)
    .then(response => {
      if (!response.ok) Notify.failure(NOT_FOUND);
      return response.json();
    })
);

