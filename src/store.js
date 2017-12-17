/**
 * Created by fws on 2017/12/10.
 */
import {createStore} from "redux";

import reducer from "./reducer";

const store = createStore(reducer);

export default store;