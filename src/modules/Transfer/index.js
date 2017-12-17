/**
 * Created by fws on 2017/11/14.
 */

import {connect} from "react-redux";
import {loginSubmit,clearLogin} from "../../actions";
import Transfer from "./Transfer.jsx";

function mapStateToProps(state) {
    return {
        user: state.userInfo.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLoginSubmitProps(user){
            return dispatch(loginSubmit(user));
        },
        onLogOutSubmitProps(user){
            return dispatch(clearLogin(user))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Transfer);