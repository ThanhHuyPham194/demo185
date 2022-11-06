import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import relicsReducer from './reducers/relicsReducers';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        relics: relicsReducer
    },
    middleware: [sagaMiddleware]
});
sagaMiddleware.run(rootSaga);
