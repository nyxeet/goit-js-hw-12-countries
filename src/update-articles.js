import articlesTpl from './templates/articles.hbs';
import secondaryTpl from './templates/secondary.hbs'
import refs from './refs';



function updateArticlesMarkup(articles) {
  console.log(articles);
  if (articles.length == 1) {
    
    const markup = articlesTpl(articles);
    refs.articlesContainer.innerHTML = markup;
  } else if (articles.length >= 2 && articles.length <= 10) {
    const markup = secondaryTpl(articles);
    refs.articlesContainer.innerHTML = markup;
  } 
}

export default updateArticlesMarkup;
