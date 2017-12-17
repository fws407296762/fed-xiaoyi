/**
 * Created by fws on 2017/12/10.
 */

import {combineReducers} from 'redux';

const loginUser = function(state = {user:''},action){
    switch(action.type){
        case 'LOGIN_USER':
            return Object.assign({},state,{
                user:action.user
            });
        case 'LOGOUT_USER':
            return Object.assign({},state,{
                user:action.user
            })
        default:
            return state;
    }
}

const reducer = combineReducers({
    userInfo:loginUser
});

export default reducer;