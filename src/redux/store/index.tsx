import {createStore} from "redux";
import {enthusiasm} from "../reducers";
import {StoreState} from "../types";
import {EnthusiasmAction} from "../actions";

const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
    languageName: '',
    enthusiasmLevel: 1,
});

export default store;
