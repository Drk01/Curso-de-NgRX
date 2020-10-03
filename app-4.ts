import { incrementadorAccion } from "./contador/contador.actions";
import { contadorReducer } from "./contador/contador.reducer";
import { createStore, Store } from "redux";

const store: Store = createStore(contadorReducer);

store.subscribe(() => {
  console.log("Subs", store.getState());
});

store.dispatch(incrementadorAccion);
