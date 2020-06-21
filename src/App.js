import React from 'react';
import './App.css';
import classes from './App.module.css';
import TitledPic from './components/TitledPic/TitledPic';

function App() {
    return (
        <div className={classes.a}>
            <TitledPic
                img={'https://therightsofnature.org/wp-content/uploads/2018/01/turkey-3048299_1920.jpg'}
                title={'MsKashef'}
                caption={'msk.codes'}
            />
        </div>
    );
}

export default App;
