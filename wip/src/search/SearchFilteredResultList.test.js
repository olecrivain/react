import React from 'react';
import { shallow } from 'enzyme';

import SearchFilteredResultList from './SearchFilteredResultList.js';

const ALL_RESULTS = [
  { title: 'T1', content: 'blabla', depart: 'Paris', type: 'club' },
  { title: 'T2', content: 'blabla', depart: 'Londre', type: 'sejour' },
  { title: 'T3', content: 'blabla', depart: 'Berlin', type: 'sejour' },
  { title: 'T4', content: 'blabla', depart: 'Marseille', type: 'circuit' },
  { title: 'T5', content: 'blabla', depart: 'Lyon', type: 'club' }
];

const wrapper = shallow(<SearchFilteredResultList />);

it('filtre les résultats par ville de départ : Paris', () => {
	expect(wrapper.instance().filterResultsByDepart(ALL_RESULTS, 'Paris').length).toEqual(1);
});

it('filtre les résultats par ville de départ : Cherbourg', () => {
	expect(wrapper.instance().filterResultsByDepart(ALL_RESULTS, 'Cherbourg').length).toEqual(0);
});
