const INITIAL_STATE = {
    change: 0,
    loading: false,
    drinks: [],
    arrayOfGlass: [],
    arrayOfIgradients: [],
    filter: { }, 
    msg_erro: '',
};

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case 'DRINKS_LOADING':
            return { ...state, loading: true, change: state.change++ };

        case 'DRINKS_ERROR':
            return { ...state, loading: false, change: state.change++};

        case 'DRINKS_CHANGE_FIELD':
            let DRINKS_CHANGE_FIELD = { ...state };
            DRINKS_CHANGE_FIELD[action.payload.field] = action.payload.value;
            DRINKS_CHANGE_FIELD.loading = false;
            DRINKS_CHANGE_FIELD.change++;
            return DRINKS_CHANGE_FIELD;

        case 'DRINKS_REPOS': 
            return INITIAL_STATE;

        default:
            return state;
    }
}
