import {CounterSaga} from './Counter'
import {all} from 'redux-saga/effects'

export function* rootSaga() {
    yield all([
        CounterSaga(),
    ])
}