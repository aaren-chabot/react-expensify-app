import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

// expensesReducer(state{ id, description, note, amount, createdAt }, action{})
//   actions: ADD_EXPENSE  REMOVE_EXPENSE  EDIT_EXPENSE

// expensesReducer(state{}, action{})
test('should set default state', () => {
  const action = { type: '@@INIT' };
  const state = expensesReducer(undefined, action);
  expect(state).toEqual([]);
});

// expensesReducer(state{}, action{ REMOVE_EXPENSE, id })
test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

// expensesReducer(state{}, action{ REMOVE_EXPENSE, id })
test('should not remove expenses if id not found', () => {
  const id = '-1';
  const action = {
    type: 'REMOVE_EXPENSE',
    id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// expensesReducer(state{}, action{ ADD_EXPENSE, expense{ id, description, note, amount, createdAt } })
test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Added expense',
    note: '',
    amount: 333,
    createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense    
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

// expensesReducer(state{}, action{ EDIT_EXPENSE, updates{ amount } })
test('should edit an expense', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

// expensesReducer(state{}, action{ EDIT_EXPENSE, updates{ amount } })
test('should not edit an expense if id not found', () => {
  const amount = 122000;
  const id = '-1';
  const action = {
    type: 'EDIT_EXPENSE',
    id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
