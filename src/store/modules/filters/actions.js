import {Types} from '../Types';

export function requestAllFilters() {
  return {
    type: Types.FILTERS_DATA_REQUEST,
  };
}
export function requestAllFiltersSuccess(payload) {
  return {
    type: Types.FILTERS_DATA_REQUEST_SUCCESS,
    payload,
  };
}
export function requestAllFiltersError() {
  return {
    type: Types.FILTERS_DATA_REQUEST_ERROR,
  };
}
