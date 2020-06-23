import React, {useState} from 'react';
import './App.css';
import classes from './App.module.css';
import Thumbnail from "./components/Thumbnail/Thumbnail";
import PageDetails from "./components/PageDetails/PageDetails";
import TabSelection from "./components/TabSelection/TabSelection";

function App() {
    const [tab, setTab] = useState('Users');
    return (
        <div className={classes.a}>
            <TabSelection
                tabs={['Posts','Users']}
                activeTab={tab}
                onTabChange={(activeTab) => {setTab(activeTab)}}
            />
        </div>
    );
}

export default App;
