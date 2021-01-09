import './styles.css';
import fetchCountries from './js/fetchCountries';
import { debounce } from 'lodash';
import updateArticlesMarkup from './js/update-articles';
import refs from './js/refs'

const { searchForm } = refs;

refs.searchForm.addEventListener(
  'input',
  debounce(() => {
    handleInputChange()
  }, 500),
);

function handleInputChange() {
  if (searchForm.value) {
      const inputValue = searchForm.value;
      fetchCountries(inputValue).then(updateArticlesMarkup);
  } 
}
