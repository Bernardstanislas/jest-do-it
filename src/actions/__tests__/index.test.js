import * as actions from '..';
import {identity} from 'lodash';

test('loadUser action should dispatch a fetchUser action when needed', () => {
  const testUser = 'jean_moust';
  let testRequiredFields = ['name'];
  const dispatchMock = jest.fn(identity);

  const getEmptyUserStateMock = jest.fn().mockReturnValue({
    entities: {
      users: {}
    }
  });

  let thunk = actions.loadUser(testUser, testRequiredFields);
  let result = thunk(dispatchMock, getEmptyUserStateMock);

  expect(result).toMatchSnapshot();

  const getKnownUserStateMock = jest.fn().mockReturnValue({
    entities: {
      users: {
        jean_moust: {
          name: 'Jean'
        }
      }
    }
  });

  thunk = actions.loadUser(testUser, testRequiredFields);
  result = thunk(dispatchMock, getKnownUserStateMock);

  expect(result).toMatchSnapshot();

  testRequiredFields = ['name', 'age'];  

  thunk = actions.loadUser(testUser, testRequiredFields);
  result = thunk(dispatchMock, getKnownUserStateMock);

  expect(result).toMatchSnapshot();
}); 