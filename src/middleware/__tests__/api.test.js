import middleware from '../api';
import {CALL_API} from '../api';

const setFetchResponse = response => {
   global.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      json() {
        return Promise.resolve(response);
      },
      ok: true,
      headers: new Map()
    });
  });
}

const setFetchError = error => {
   global.fetch = jest.fn().mockImplementation(() => {
    return Promise.reject(error);
  });
}

test('api middleware should not interfer when the action is not an api call', () => {
  const storeMock = {};
  const nextSpy = jest.fn();
  const actionTest = {
    name: 'test action',
    payload: 'dummy'
  }

  middleware(storeMock)(nextSpy)(actionTest);

  expect(nextSpy.mock.calls.length).toEqual(1);
  expect(nextSpy.mock.calls[0][0]).toEqual(actionTest);
});

test('api middleware should dispatch a requestType when the action is an api call', () => {
  const types = ['TEST_REQUEST', 'TEST_SUCCESS', 'TEST_ERROR'];

  const storeMock = {};
  const nextSpy = jest.fn();
  const actionTest = {
    [CALL_API]: {
      types,
      endpoint: 'test/endpoint',
      schema: {}
    }
  }

  middleware(storeMock)(nextSpy)(actionTest);

  expect(nextSpy.mock.calls.length).toEqual(1);
  expect(nextSpy.mock.calls[0][0]).toEqual({type: types[0]});
});

test('api middleware should dispatch a success type when the api call is a success', done => {
  const types = ['TEST_REQUEST', 'TEST_SUCCESS', 'TEST_ERROR'];

  const storeMock = {};
  const nextSpy = jest.fn();
  const actionTest = {
    [CALL_API]: {
      types,
      endpoint: 'test/endpoint',
      schema: {}
    }
  }

  setFetchResponse({result: 'dummy'});

  middleware(storeMock)(nextSpy)(actionTest)
  .then(() => {
    expect(nextSpy.mock.calls.length).toEqual(2);
    expect(nextSpy.mock.calls[1][0].type).toEqual(types[1]);
    done();
  });
});

test('api middleware should dispatch a success type when the api call is a success', done => {
  const types = ['TEST_REQUEST', 'TEST_SUCCESS', 'TEST_ERROR'];

  const storeMock = {};
  const nextSpy = jest.fn();
  const actionTest = {
    [CALL_API]: {
      types,
      endpoint: 'test/endpoint',
      schema: {}
    }
  }

  setFetchError({error: 'dummy'});

  middleware(storeMock)(nextSpy)(actionTest)
  .then(() => {
    expect(nextSpy.mock.calls.length).toEqual(2);
    expect(nextSpy.mock.calls[1][0].type).toEqual(types[2]);
    done();
  });
});