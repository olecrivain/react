import React from 'react';
import ReactDOM from 'react-dom';

import { filterResultsByDepart, filterResultsByVoyageType } from './SearchResultService.js';

const ALL_RESULTS = [
  { title: 'T1', content: 'blabla', depart: 'Paris', type: 'club' },
  { title: 'T2', content: 'blabla', depart: 'Londre', type: 'sejour' },
  { title: 'T3', content: 'blabla', depart: 'Berlin', type: 'sejour' },
  { title: 'T4', content: 'blabla', depart: 'Marseille', type: 'circuit' },
  { title: 'T5', content: 'blabla', depart: 'Lyon', type: 'club' }
];

it('filtrage des résultats par ville de départ', () => {
	expect(filterResultsByDepart(ALL_RESULTS, 'Cherbourg').length).toEqual(0);
	expect(filterResultsByDepart(ALL_RESULTS, 'Paris').length).toEqual(1);
});
