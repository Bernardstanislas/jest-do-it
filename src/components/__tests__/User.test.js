import React from 'react';
import User from '../User';
import renderer from 'react-test-renderer';

test('User links to the user page', () => {
  const user = {
    login: 'jean_moust',
    avatarUrl: 'moustiswag.png',
    name: 'Jean De la Moustinière'
  };

  // Render a User component in the document
  const component = renderer.create(
    <User user={user} />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});