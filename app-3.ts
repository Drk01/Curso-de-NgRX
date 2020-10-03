import {
  incrementadorAccion,
  multiplicarAction,
} from "./contador/contador.actions";
import { Action, Reducer } from "./ngrx-fake/ngrx";
import { contadorReducer } from "./contador/contador.reducer";

class Store<T> {
  // private state: T;

  constructor(private reducer: Reducer<T>, private state: T) {}
  getState() {
    return this.state;
  }

  dispatch(action: Action) {
    this.state = this.reducer(this.state, action);
  }
}

const store = new Store(contadorReducer, 10);

console.log(store.getState());

store.dispatch(incrementadorAccion);
store.dispatch(incrementadorAccion);

console.log(store.getState());

store.dispatch(multiplicarAction);

console.log(store.getState());
