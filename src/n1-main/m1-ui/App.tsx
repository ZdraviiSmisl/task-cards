import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";


const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Provider>
                    <>
                      <Main/>

                    </>
                </Provider>
            </HashRouter>
        </div>
    );
}

export default App;
