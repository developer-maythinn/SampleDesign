const { createStore } = "redux";

function toggleMenu (state) {
    var newState = Object.assign({}, state)
    newState.showMenu = !newState.showMenu
    return newState;
  }

function reducer (state = {}, action) {
    switch (action.type) {
      case 'TOGGLE_MENU':
        return toggleMenu(state);
    }
    return state;
  }
  export default function store() {
    createStore(reducer);
  }
