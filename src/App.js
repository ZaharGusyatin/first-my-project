import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
// noinspection ES6CheckImport
import {Route, BrowserRouter} from "react-router-dom";

function App(props) {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs
                        state={props.state.messagesPage}
                        dispatch={props.dispatch}


                    />}/>
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage}
                                                                  dispatch={props.dispatch}/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
