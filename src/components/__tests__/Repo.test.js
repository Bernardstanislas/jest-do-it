import React from 'react';
import Repo from '../Repo';
import {shallow} from 'enzyme';

test('Repo links to the repo name and the repo owner', () => {
  const repo = {
    name: 'my_repo',
    description: 'my repo description'
  };

  const owner = {
    login: 'jean_moust'
  };

  // Render a Repo component in the document
  const component = shallow(
    <Repo repo={repo} owner={owner} />
  );

  const links = component.find('Link');

  expect(links.at(0).props().to).toEqual('/jean_moust/my_repo');
  expect(links.at(1).props().to).toEqual('/jean_moust');
});