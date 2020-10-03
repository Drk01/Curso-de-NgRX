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

console.log(reducer(10, incrementadorAccion)); // 11
console.log(reducer(10, decrementadorAction));
