import produce from 'immer';
import {Types} from '../Types';

const INITIAL_STATE = {
  loading: false,
  arrayOfGlass: [],
  arrayOfIgradients: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case Types.FILTERS_DATA_REQUEST: {
        draft.loading = true;
        break;
      }

      case Types.FILTERS_DATA_REQUEST_SUCCESS: {
        draft.loading = false;
        draft.arrayOfGlass = action.payload.arrayOfGlass;
        draft.arrayOfIgradients = action.payload.arrayOfIgradients;
        break;
      }

      case Types.FILTERS_DATA_REQUEST_ERROR: {
        draft.loading = false;
        break;
      }

      default:
        return INITIAL_STATE;
    }
  });
}
