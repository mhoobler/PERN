const AppReducer = (
  state: AppContextType,
  action: ActionType
): AppContextType => {
  switch (action.type) {
    case "ADD_FILTER": {
      const id = Object.keys(state.filters).length;
      const newFilter = {
        id: id,
        name: "",
        description: "",
        tags: [],
      };

      return {
        ...state,
        filters: {
          ...state.filters,
          [id]: newFilter,
        },
      };
    }

    case "EDIT_FILTER": {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.id]: action.payload,
        },
      };
    }

    case "REMOVE_FILTER": {
      const newFilters = state.filters;
      delete newFilters[action.payload];

      return {
        ...state,
        filters: newFilters,
      };
    }

    default:
      return state;
  }
};

export default AppReducer;
