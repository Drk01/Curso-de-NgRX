// Acciones
interface Action {
  type: string;
  payload?: any;
}

// const incrementadorAccion: Action = {
//   type: "INCREMENTAR",
// };

function reducer(state = 10, action: Action) {
  switch (action.type) {
    case "INCREMENTAR":
      return (state += 1);
    case "DECREMENTAR":
      return (state -= 1);
    case "MULTIPLICAR":
      return state * action.payload;
    default:
      return state;
  }
}

// Usar el reducer

const incrementadorAccion: Action = {
  type: "INCREMENTAR",
};

const decrementadorAction: Action = {
  type: "DECREMENTAR",
};

const multiplicarAction: Action = {
  type: "MULTIPLICAR",
  payload: 2,
};

console.log(reducer(10, incrementadorAccion)); // 11
console.log(reducer(10, decrementadorAction)); // 9
console.log(reducer(10, multiplicarAction));
