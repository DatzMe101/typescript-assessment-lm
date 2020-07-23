import { AppEvents } from '../events';

interface Action<T, P> {
  type: T;
  payload?: P;
}

function createAction<T extends string, P>(type: T, payload?: P): Action<T, P> {
  return typeof payload === 'undefined' ? { type } : { type, payload };
}

export const SetName = (name: string) => createAction(AppEvents.SET_NAME, name);
export const SetAge = (age: number) => createAction(AppEvents.SET_AGE, age);

export type IAction = ReturnType<typeof SetName> | ReturnType<typeof SetAge>;
