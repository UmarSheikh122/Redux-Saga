import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../Redux/action";
import {takeEvery, put, all} from 'redux-saga/effects'

function* replaceDecrement() {
    yield put({
        type: `${DECREMENT_COUNTER}_SAGA`,
        value: 10
    })
}
function* replaceIncrement() {
    yield put({
        type: `${INCREMENT_COUNTER}_SAGA`,
        value: 10
    })
}

export function* CounterSaga() {
    yield all([
            yield takeEvery(INCREMENT_COUNTER, replaceIncrement),
            yield takeEvery(DECREMENT_COUNTER, replaceDecrement)
    ])
}