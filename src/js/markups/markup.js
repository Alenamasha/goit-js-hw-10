import { stringifyLanguages } from '../utils/helpers/language';

const createCountriesMarkup = ({ src, name }) => (`
  <li class = "listItem">
    <img src="${src}" height="40px" width="40px"/>
    <span>${name}</span>
  </li>
`);

const createCountryCardMarkup = ({ src, name, capital, population, languages }) => (`
  <ul class="card">
    <li><img src="${src}" height="40px" width="40px"/>
    <h1>${name}</h1></li>
    <li><h2>Capital:${capital}</h2></li> 
    <li><h2>Population:${population}</h2></li>
    <li><h2>Languages:${stringifyLanguages(languages)}</h2></li>
  </ul>
`);

export const markup = {
  generaCountryCard: (data) => (
    data.reduce((acc, v) => acc + createCountryCardMarkup({
      src: v.flags.svg,
      name: v.name.official,
      capital: v.capital,
      population: v.population,
      languages: v.languages
    }), '')
  ),
  generateCountriesList: (data) => (
    data.reduce((acc, v) => (
      acc + createCountriesMarkup({ src: v.flags.svg, name: v.name.official })
    ), '')
  )
};