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
                        stater={props.state.messagesPage}
                            addPostDialogs={props.addPostDialogs}
                            updateNewPostTextDialogs={props.updateNewPostTextDialogs}


                    />}/>
                    <Route path='/profile' render={() => <Profile stater={props.state.profilePage}
                                                                  addPost={props.addPost}
                                                                  updateNewPostText={props.updateNewPostText}/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
