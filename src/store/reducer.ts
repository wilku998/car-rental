export default (state = {modalIsOpen: false, id: 'fordmustangvi', windowWidth: 0}, action: any) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen,
        id: action.id || 'fordmustangvi'
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
