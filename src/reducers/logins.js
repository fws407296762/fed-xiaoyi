/**
 * Created by fws on 2017/12/3.
 */
function postLogins(state=[],action){
    switch (action.type){
        case 'LOGIN_IN':
            return [
                ...state,{
                    user:action.user
                }
            ];
        case 'LOGIN_OUT':
            return [...state,{
                user:action.user
            }];
        default:
            return state;
    }
}

function logins(state={},action){
    if (typeof action.postId !== 'undefined') {
        return {
            // Take the current state
            ...state,
            // overwrite this post with the new one
            [action.postId]: postLogins(state[action.postId], action)
        };
    }
    return state;
}

export default logins;