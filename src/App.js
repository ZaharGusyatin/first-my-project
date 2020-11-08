import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
// noinspection ES6CheckImport
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer
                        store={props.store}


                    />}/>
                    <Route path='/profile' render={() => <Profile store={props.store}
                                                                />}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
