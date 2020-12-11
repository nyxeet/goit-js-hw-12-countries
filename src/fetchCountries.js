const fetchCountries = searchQuery => {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  const options = {
    headers: {},
  };
  return fetch(url, options)
    .then(res => res.json())
    .catch(error => console.log(error));
};

export default fetchCountries;
