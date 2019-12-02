import React, {Dispatch} from "react";
import './Hello.css';
import {useDispatch, useSelector} from "react-redux";
import {decrementEnthusiasm, incrementEnthusiasm} from "../redux/actions";
import {StoreState} from "../redux/types";

export interface HelloProps {
    name: string,
    enthusiasmLevel?: number
}

const Hello = ({name, enthusiasmLevel = 1}: HelloProps) => {

    const dispatch: Dispatch<any> = useDispatch();

    const currentEnthusiasmLevel = useSelector((state: StoreState) => state.enthusiasmLevel);

    if (currentEnthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    const getExclamationMarks = (numChars: number): string => (
        Array(numChars + 1).join('!')
    );


    const onDecrement = (): void => {
        dispatch(incrementEnthusiasm());
    };
    const onIncrement = (): void => {
        dispatch(decrementEnthusiasm())
    };


    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(currentEnthusiasmLevel)}
            </div>
            <button onClick={onDecrement}>+</button>
            <button onClick={onIncrement}>-</button>
        </div>
    );
};

export default Hello;
