import countryTpl from '../templates/full-country.hbs';
import listTpl from '../templates/list-country.hbs'
import refs from './refs';
import pnotify from './pnotify'


function updateArticlesMarkup(countries) {
  console.log(countries)
  if (countries.length == 1) {
    const markup = countryTpl(countries);
    refs.countriesContainer.innerHTML = markup;
  }
  if (countries.length >= 2 && countries.length <= 10) {
    const markup = listTpl(countries);
    refs.countriesContainer.innerHTML = markup;
  }
  if (countries.length > 10) {
    refs.countriesContainer.innerHTML = '';
    pnotify.tooManyCountries();
  }
  if (!countries.length) {
    refs.countriesContainer.innerHTML = '';
    pnotify.error(countries.status)
  }
}

export default updateArticlesMarkup;
