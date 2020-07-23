import { AppEvents } from '../events';
import { IAction } from '../actions';
import { IState } from '../store';

const INITIAL_STATE: IState = {
  age: 0,
  name: '',
};

export const reducer = (state: IState = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case AppEvents.SET_AGE:
      return { ...state, age: action.payload };
    case AppEvents.SET_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
