import './css/styles.css';
import {Notify} from 'notiflix';
import debounce from 'lodash.debounce';

import { refs, DEBOUNCE_DELAY } from './js/constants';
import {fetchCountries} from './js/fetchCountries';
import countryListTpl from './template/country-list.hbs';
import countryCardTpl from './template/country-card.hbs';


const clearMarkup = () => {
    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
};

const createCountryList = countries => countries.map(country => countryListTpl(country)).join('');

const renderCountryCard = countries => {
    const countriesQuantity = countries.length;
    clearMarkup();
    if (countriesQuantity > 10) {
        Notify.warning("Too many matches found. Please enter a more specific name.")
    }
    else if(countriesQuantity > 1 && countriesQuantity <= 10){
        Notify.info(`Hooray! We found ${countriesQuantity} countries.`);
        refs.countryList.innerHTML  = createCountryList(countries);
    } 
    else if(countriesQuantity === 1){
        Notify.success(`This is exactly what you were looking for!`);
        refs.countryInfo.innerHTML = countryCardTpl(countries[0]);
    }
};
    
const onFetchError = () => {
    Notify.failure('Oops! There is no country with that name!');
    clearMarkup();
};

const onSearch = e => {
    e.preventDefault;
    if (e.target.value) {
        fetchCountries(e.target.value.trim())
            .then(renderCountryCard)
            .catch(onFetchError);
    }
    clearMarkup();
};

refs.input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));
// refs.clickOnCountryTitle.addEventListener('click', );



