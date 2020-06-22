import React from 'react';
import './App.css';
import classes from './App.module.css';
import TitledPic from './components/TitledPic/TitledPic';
import OrangeButton from "./components/OrangeButton/OrangeButton";

function App() {
    return (
        <div className={classes.a}>
            <OrangeButton
                text={'Button'}
                onClick={() => {}}
            />
        </div>
    );
}
export default App;
