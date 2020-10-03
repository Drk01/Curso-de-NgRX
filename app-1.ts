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
        case 'INCREMENTAR':
            return state += 1;
        default
            return state;
  }
}

// Usar el reducer

const incrementadorAccion: Action = {
  type: "INCREMENTAR",
};

console.log(reducer(10, incrementadorAccion));
