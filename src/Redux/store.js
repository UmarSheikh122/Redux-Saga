import {createStore, applyMiddleware} from 'redux'

import createSagaMiddleWare from 'redux-saga'
import { rootSaga } from '../Sagas/RootSaga';

import rootReducer from './reducers'

const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(rootSaga)

export default store