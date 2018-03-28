import moment from 'moment';
import filtersReducer from '../../reducers/filters';

// filterReducer(state{ text, startDate, endDate, sortBy }, action{})
//   actions:  SET_TEXT_FILTER  SORT_BY_DATE  SORT_BY_AMOUNT  SET_START_DATE  SET_END_DATE

// filterReducer()
test('should setup default filter values', () => {
  const action = { type: '@@INIT' }
  const state = filtersReducer(undefined, action);
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

// filterReducer(state{}, { SET_TEXT_FILTER, text })
test('should set text filter', () => {
  const text = 'Filtered text';
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

// filterReducer({ sortBy: 'amount' }, SORT_BY_DATE)
test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

// filterReducer(state{}, SORT_BY_AMOUNT)
test('should set sortBy to amount', () => {
  const action = { type: 'SORT_BY_AMOUNT' }
  const state = filtersReducer(undefined, action);
  expect(state.sortBy).toBe('amount');
});

// filterReducer(state{}, { SET_START_DATE, startDate })
test('should set startDate filter', () => {
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

// filterReducer(state{}, { SET_END_DATE, endDate })
test('should set endDate filter', () => {
  const endDate = moment();
  const action = {
    type: 'SET_END_DATE',
    endDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
