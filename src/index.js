import './styles.css';
import fetchCountries from './js/fetchCountries';
import _, { debounce } from 'lodash';
import updateArticlesMarkup from './js/update-articles';
import refs from './js/refs'


refs.searchForm.addEventListener(
  'input',
  _.debounce(() => {
    const inputValue = refs.searchForm.value;
    fetchCountries(inputValue).then(updateArticlesMarkup);
  }, 500),
);
