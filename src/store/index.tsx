import { createStore, combineReducers } from 'redux';
import { reducer as AppReducer } from '../reducers';

export const reducers = combineReducers({
  app: AppReducer,
});

export interface IState {
  age: number;
  name: string;
}

export interface IAppState {
  app: IState;
}

export const store = createStore(reducers);
