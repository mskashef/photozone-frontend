import React, {useState} from 'react';
import './App.css';
import classes from './App.module.css';
import Thumbnail from "./components/Thumbnail/Thumbnail";
import PageDetails from "./components/PageDetails/PageDetails";
import TabSelection from "./components/TabSelection/TabSelection";
import {TextField } from '@material-ui/core';
import TitleBar from "./components/TitleBar/TitleBar";

function App() {
    const [tab, setTab] = useState('Users');
    return (
        <div className={classes.a}>
            <TitleBar>
                sss
            </TitleBar>
            <TextField multiline={false} id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
    );
}

export default App;
