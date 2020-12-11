import './styles.css';
import fetchCountries from './fetchCountries';
import refs from './refs';
import _, { debounce } from 'lodash';
import updateArticlesMarkup from './update-articles';
import { info, error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";


refs.searchForm.addEventListener(
  'input',
  _.debounce(() => {
    const inputValue = refs.searchForm.value;
    fetchCountries(inputValue).then(updateArticlesMarkup);
  }, 500),
);
