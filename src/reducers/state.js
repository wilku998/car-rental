export default (state = {modalIsOpen: true, id: 'fordmustangvi'}, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        modalIsOpen: action.value,
        id: action.id ? action.id : state.id
      };
    default:
      return state;
  }
};
