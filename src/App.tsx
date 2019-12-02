import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello";
import {Provider} from "react-redux";
import store from "./redux/store";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Hello name="Majd" enthusiasmLevel={3}/>
        </Provider>
    );
};

export default App;
