import {all, call, put, takeLatest} from 'redux-saga/effects';

import api from '../../../services/api';

import {requestAllFiltersSuccess, requestAllFiltersError} from './actions';
import {Types} from '../Types';

export function* fetchFilters({payload}) {
  try {
    const igradients = yield call(api.get, '/list.php?i=list');
    const glass = yield call(api.get, '/list.php?g=list');

    yield put(
      requestAllFiltersSuccess({
        arrayOfIgradients: igradients.data.drinks,
        arrayOfGlass: glass.data.drinks,
      }),
    );
  } catch (error) {
    yield put(requestAllFiltersError());
  }
}

export default all([takeLatest(Types.FILTERS_DATA_REQUEST, fetchFilters)]);
