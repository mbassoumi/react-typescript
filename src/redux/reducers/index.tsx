import {EnthusiasmAction} from "../actions";
import {INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM} from './../constants/index';
import {StoreState} from './../types/index';

const initialState = {
    languageName: '',
    enthusiasmLevel: 1,
};

export const enthusiasm = (state: StoreState = initialState, action: EnthusiasmAction): StoreState => {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return {
                ...state,
                enthusiasmLevel: state.enthusiasmLevel + 1
            };
        case DECREMENT_ENTHUSIASM:
            return {
                ...state,
                enthusiasmLevel: state.enthusiasmLevel - 1
            };
        default:
            return state
    }
};
