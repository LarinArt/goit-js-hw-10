import './css/styles.css';
import {Notify} from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries.js';
import countryListTpl from './template/country-list.hbs';
import countryCardTpl from './template/country-card.hbs';


const DEBOUNCE_DELAY = 300;



