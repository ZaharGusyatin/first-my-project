import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./redux/state";


export let rerenderEntireTree=(string)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={string}
                 addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}



