const BASE_URL = 'https://restcountries.com/v3.1/name';

export const fetchCountries = (name) => {
    return fetch(`${BASE_URL}/${name}`)
    .then(res => {
      if (res.ok) {
          return res.json();
        }
        throw new Error(res.status);
      });
};


