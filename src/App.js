import React from 'react';
import './App.css';
import classes from './App.module.css';
import TitledPic from './components/TitledPic/TitledPic';
import OrangeButton from "./components/OrangeButton/OrangeButton";
import Thumbnail from "./components/Thumbnail/Thumbnail";
import PageDetails from "./components/PageDetails/PageDetails";

function App() {
    return (
        <div className={classes.a}>
            <PageDetails
                followers={10}
                photos={10}
                followings={10}
            />
        </div>
    );
}
export default App;
