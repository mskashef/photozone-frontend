import React, {useState} from 'react';
import './App.css';
import classes from './App.module.css';
import Thumbnail from "./components/Thumbnail/Thumbnail";
import PageDetails from "./components/PageDetails/PageDetails";
import TabSelection from "./components/TabSelection/TabSelection";
import {TextField } from '@material-ui/core';
import TitleBar from "./components/TitleBar/TitleBar";
import Post from "./containers/Post/Post";
import TitledPic from "./components/TitledPic/TitledPic";

function App() {
    const [tab, setTab] = useState('Users');
    return (
        <div className={classes.a}>
            <TitleBar>
                PhotoZone
            </TitleBar>
            <Post
                postId={123}
                publisherId={"mskashef"}
                title="Post Title Goes Here"
                photo="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRC3imy89z6szdIlZddmWZqxF2d3Nm5kAUH5nKiXD8qVjU927EI&usqp=CAU"
                publisherName="Oil Art"
                publisherProfPic="https://i.pinimg.com/736x/50/df/34/50df34b9e93f30269853b96b09c37e3b.jpg"
                onPublisherClick={() => {alert("a")}}
                moreOptions={[
                    {title: "Copy link", onSelect: (postId) => {alert("Copy link")}},
                    {title: "Save Post", onSelect: (postId) => {alert("Save Post")}},
                ]}
            />

        </div>
    );
}

export default App;
