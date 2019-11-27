const initState = getClientsFromStorage() || [];

export default (state = initState, action) => {
  switch (action.type) {
    case 'ADD_CLIENT': {
      const newState = [
        ...state,
        { id: state.length + 1, ...action.client },
      ];
      setClientsToStorage(newState);
      return newState;
    }
    default: return state;
  }
}

function getClientsFromStorage() {
  return JSON.parse(localStorage.getItem('clients'));
}

function setClientsToStorage(clients) {
  return localStorage.setItem('clients', JSON.stringify(clients));
}