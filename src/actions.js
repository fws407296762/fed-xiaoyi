/**
 * Created by fws on 2017/12/13.
 */

export function loginSubmit(user){
    return {
        type:"LOGIN_USER",
        user
    }
}

export function clearLogin(){
    return {
        type:"LOGOUT_USER",
        user:""
    }
}