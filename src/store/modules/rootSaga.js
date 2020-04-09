import {all} from 'redux-saga/effects';

import filters from './filters/sagas';

export default function* rootSaga() {
  return yield all([filters]);
}
