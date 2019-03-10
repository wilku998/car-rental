export default (state = {modalIsOpen: true, id: 'fordmustangvi', windowWidth: 0}, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        modalIsOpen: action.value,
        id: action.id ? action.id : state.id
      };
      case 'SET_WIDTH':
        return {
          ...state,
          windowWidth: action.windowWidth,
        }
    default:
      return state;
  }
};
