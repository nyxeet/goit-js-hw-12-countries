import countryTpl from './templates/full-country.hbs';
import listTpl from './templates/list-country.hbs'
import refs from './refs';
import { info, error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

function updateArticlesMarkup(countries) {
  console.log(countries)
  if (countries.length == 1) {
    const markup = countryTpl(countries);
    refs.countriesContainer.innerHTML = markup;
  } else if (countries.length >= 2 && countries.length <= 10) {
    const markup = listTpl(countries);
    refs.countriesContainer.innerHTML = markup;
  } else {
    error({
      delay: 500,
      text: 'Too many matches found. Please enter a more specific query'
    });
  }
}

export default updateArticlesMarkup;
