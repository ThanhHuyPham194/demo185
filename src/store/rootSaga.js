import { call, put, takeLatest } from 'redux-saga/effects';
import relicsService from '../services/relicsService';
import { fetInfoRelics, getInfoRelics } from './reducers/relicsReducers';
function* fetchData() {
    try {
        let result = yield call(relicsService.getInfo);
        yield put(getInfoRelics(result.results));
    } catch (error) {
        throw error;
    }
}


function* rootSaga() {
    yield takeLatest(fetInfoRelics.type, fetchData);
}

export default rootSaga;