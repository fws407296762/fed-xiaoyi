/**
 * Created by fws on 2017/12/3.
 */
import {createStore,applyMiddleware,compose} from 'redux';
import  rootReducers from './reducers/index';

const store = createStore(rootReducers);

export default store;